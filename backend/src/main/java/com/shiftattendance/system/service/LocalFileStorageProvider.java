package com.shiftattendance.system.service;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;

@Service
@RequiredArgsConstructor
@Slf4j
public class LocalFileStorageProvider implements FileStorageProvider {

    private final Path rootLocation = Path.of("uploads"); // sẽ tạo thư mục uploads trong project

    @PostConstruct
    public void init() throws IOException {
        Files.createDirectories(rootLocation);
        log.info("Folder upload đã được tạo: {}", rootLocation.toAbsolutePath());
    }

    @Override
    public String save(InputStream inputStream, String filePath) throws IOException {
        Path destination = rootLocation.resolve(filePath).normalize().toAbsolutePath();

        // Bảo mật: không cho lưu ngoài thư mục uploads
        if (!destination.startsWith(rootLocation.toAbsolutePath())) {
            throw new RuntimeException("Không được lưu file ngoài thư mục uploads!");
        }

        Files.createDirectories(destination.getParent());
        Files.copy(inputStream, destination, StandardCopyOption.REPLACE_EXISTING);

        log.info("Đã lưu file: {}", destination);
        return filePath; // trả về đường dẫn tương đối
    }

    @Override
    public String save(InputStream inputStream, String filePath) throws IOException {
        return "";
    }

    @Override
    public Resource loadAsResource(String filePath) {
        try {
            Path file = rootLocation.resolve(filePath).normalize();
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            }
            throw new RuntimeException("Không thể đọc file: " + filePath);
        } catch (MalformedURLException e) {
            throw new RuntimeException("Lỗi đường dẫn file: " + filePath);
        }
    }

    @Override
    public void delete(String filePath) throws IOException {
        Path file = rootLocation.resolve(filePath).normalize();
        Files.deleteIfExists(file);
        log.info("Đã xóa file vật lý: {}", file);
    }

    @Override
    public String getUrl(String filePath) {
        // Cách 1: Dùng endpoint proxy (an toàn hơn)
        return "/api/files/download/" + filePath;

        // Cách 2: Trả thẳng URL file (nhanh hơn, nhưng phải config static resource)
        // return "/files/" + filePath;
    }

    @Override
    public boolean exists(String filePath) {
        Path file = rootLocation.resolve(filePath);
        return Files.exists(file);
    }
}
