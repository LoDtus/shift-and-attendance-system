package com.shiftattendance.system.controller;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ArticleController {
    ResponseEntity<?> getArticles();
    ResponseEntity<?> createArticle();
    ResponseEntity<?> updateArticle();
    ResponseEntity<?> deleteArticles(List<String> ids);
}
