package com.back.back.services;

import com.back.back.domain.patient.Patient;
import com.back.back.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceSpecification {

    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getAllPatients(){return this.patientRepository.findAll();}
}
