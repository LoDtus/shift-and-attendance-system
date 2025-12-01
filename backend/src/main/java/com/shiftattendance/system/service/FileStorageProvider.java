package com.shiftattendance.system.service;

import jakarta.annotation.Resource;

import java.io.IOException;
import java.io.InputStream;

public interface FileStorageProvider {
    /** Lưu file từ InputStream và trả về đường dẫn lưu trữ (ví dụ: uploads/2025/12/abc.jpg) */
    String save(InputStream inputStream, String filePath) throws IOException;

    /** Load file dưới dạng Resource để download/stream */
    Resource loadAsResource(String filePath);

    /** Xóa file vật lý */
    void delete(String filePath) throws IOException;

    /** Lấy URL truy cập trực tiếp (local thì trả http://localhost:8080/files/..., S3 thì signed URL) */
    String getUrl(String filePath);

    /** Kiểm tra file có tồn tại không (dùng khi cleanup orphaned files) */
    boolean exists(String filePath);
}
