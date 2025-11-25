package com.shiftattendance.system.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/article")
public class ArticleControllerImpl implements ArticleController {
    @Override
    @GetMapping("/get")
    public ResponseEntity<?> getArticles() {
        return null;
    }

    @Override
    @PostMapping("/create")
    public ResponseEntity<?> createArticle() {
        return null;
    }

    @Override
    @PutMapping("/update")
    public ResponseEntity<?> updateArticle() {
        return null;
    }

    @Override
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteArticles(List<String> ids) {
        return null;
    }
}
