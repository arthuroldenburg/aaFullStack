package com.back.back.domain.user;

public record RegisterDTO(String login, String password, UserRole role) {
}
