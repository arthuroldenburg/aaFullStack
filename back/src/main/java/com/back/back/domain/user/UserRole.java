package com.back.back.domain.user;

public enum UserRole {

    ADMIN("admin"),
    MEDIC("medic"),
    RECEPTIONIST("receptionist"),
    USER("user");



    private String role;

    UserRole(String role){
        this.role = role;
    }

    String getRole(){
        return this.role;
    }
}
