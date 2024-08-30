package com.back.back.controllers;


import com.back.back.domain.patient.Patient;
import com.back.back.domain.patient.PatientRequestDTO;
import com.back.back.domain.patient.PatientResponseDTO;
import com.back.back.repositories.PatientRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping
    public ResponseEntity<List<PatientResponseDTO>> getPatients(){
        return ResponseEntity.ok(patientRepository.findAll().stream().map(PatientResponseDTO::new).toList());
    }

    @PostMapping
    public ResponseEntity<Object> postPatient(@RequestBody @Valid PatientRequestDTO body) {
        Patient newPatient = new Patient(body);
        this.patientRepository.save(newPatient);
        return ResponseEntity.ok().build();
    }
}
