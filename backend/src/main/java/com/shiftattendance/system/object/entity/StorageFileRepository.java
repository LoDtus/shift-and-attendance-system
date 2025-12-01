package com.shiftattendance.system.object.entity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StorageFileRepository extends JpaRepository<StorageFile, String> {
    @Query("SELECT f FROM storage_file f WHERE f.ownerId = :ownerId " +
            "AND f.deletedAt IS NULL " +
            "AND (:search IS NULL OR LOWER(f.name) LIKE LOWER(CONCAT('%', :search, '%'))) ")
    Page<StorageFile> findActiveByOwnerId(@Param("ownerId") String ownerId,
                                          @Param("search") String search,
                                          Pageable pageable);

    @Query("SELECT f FROM storage_file f WHERE f.ownerId = :ownerId AND f.deletedAt IS NOT NULL")
    Page<StorageFile> findDeletedByOwnerId(@Param("ownerId") String ownerId, Pageable pageable);
}
