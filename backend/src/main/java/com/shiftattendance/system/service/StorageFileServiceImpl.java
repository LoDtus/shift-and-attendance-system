package com.shiftattendance.system.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shiftattendance.system.config.exception.BusinessException;
import com.shiftattendance.system.object.entity.StorageFile;
import com.shiftattendance.system.object.entity.StorageFileRepository;
import jakarta.annotation.Resource;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.awt.print.Pageable;
import java.io.IOException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class StorageFileServiceImpl implements StorageFileService {
    private final StorageFileRepository storageFileRepository;
    private final FileStorageProvider fileStorageProvider; // tự viết interface cho local/S3 sau này
    private final ObjectMapper objectMapper;

    // 1. Upload 1 file (dùng nhiều nhất trong HRM: CV, hợp đồng, ảnh nhân viên...)
    @Transactional
    public StorageFile uploadFile(MultipartFile file, String ownerId) throws IOException {
        validateFile(file);

        String storagePath = fileStorageProvider.save(file.getInputStream(), generateFilePath(file));
        String thumbnailPath = generateThumbnailIfImage(file, storagePath);

        StorageFile storageFile = StorageFile.builder()
                .name(file.getOriginalFilename())
                .mimeType(file.getContentType())
                .size(String.valueOf(file.getSize()))
                .path(storagePath)
                .thumbnail(thumbnailPath)
                .ownerId(ownerId)
                .metadata(extractMetadata(file))
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();
        return storageFileRepository.save(storageFile);
    }

    // 2. Upload nhiều file cùng lúc (CV nhiều ứng viên, scan hợp đồng batch...)
    @Transactional
    public List<StorageFile> uploadMultipleFiles(List<MultipartFile> files, String ownerId) throws IOException {
        List<StorageFile> result = new ArrayList<>();
        for (MultipartFile file : files) {
            try {
                result.add(uploadFile(file, ownerId));
            } catch (Exception e) {
//                log.warn("Upload failed for file: {}", file.getOriginalFilename(), e);
                // vẫn tiếp tục upload file khác
            }
        }
        return result;
    }

    // 3. Download file (xem CV, tải hợp đồng)
    public Resource downloadFile(UUID fileId) {
        StorageFile file = findByIdOrThrow(fileId);
        if (file.getDeletedAt() != null) {
            throw new BusinessException("File đã bị xóa");
        }
        return fileStorageProvider.loadAsResource(file.getPath());
    }

    // 4. Xem trước (thumbnail hoặc file nhỏ)
    public String getPreviewUrl(UUID fileId) {
        StorageFile file = findByIdOrThrow(fileId);
        return file.getThumbnail() != null ? fileStorageProvider.getUrl(file.getThumbnail())
                : fileStorageProvider.getUrl(file.getPath());
    }

    // 5. Danh sách file của user + phân trang + tìm kiếm tên
    public Page<StorageFile> getFilesByOwner(String ownerId, String search, Pageable pageable) {
        return storageFileRepository.findActiveByOwnerId(ownerId, search, pageable);
    }

    // 6. Soft delete (rất quan trọng với công ty Nhật)
    @Transactional
    public void softDelete(UUID fileId) {
        StorageFile file = findByIdOrThrow(fileId);
        file.setDeletedAt(Instant.now());
        file.setUpdatedAt(Instant.now());
    }

    // 7. Khôi phục file từ thùng rác
    @Transactional
    public void restore(UUID fileId) {
        StorageFile file = storageFileRepository.findById(fileId)
                .orElseThrow(() -> new EntityNotFoundException("File not found"));
        file.setDeletedAt(null);
        file.setUpdatedAt(Instant.now());
    }

    // 8. Xóa vĩnh viễn + xóa file thật (admin only)
    @Transactional
    public void permanentDelete(UUID fileId) {
        StorageFile file = findByIdOrThrow(fileId);
        fileStorageProvider.delete(file.getPath());
        if (file.getThumbnail() != null) {
            fileStorageProvider.delete(file.getThumbnail());
        }
        storageFileRepository.delete(file);
    }

    // 9. Lấy danh sách thùng rác của user
    public Page<StorageFile> getTrashByOwner(String ownerId, Pageable pageable) {
        return storageFileRepository.findDeletedByOwnerId(ownerId, pageable);
    }

    // 10. Helper private
    private StorageFile findByIdOrThrow(UUID id) {
        return storageFileRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("File not found: " + id));
    }

    private void validateFile(MultipartFile file) {
        if (file.isEmpty()) throw new BusinessException("File rỗng");
        if (file.getSize() > 50 * 1024 * 1024) { // 50MB ví dụ
            throw new BusinessException("File quá lớn, tối đa 50MB");
        }
    }
}
