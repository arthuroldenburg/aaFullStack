import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../models/hospital.model';
import { HospitalService } from '../../services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patient: Patient = {
    name:'',
    consultNumber:0
  }

  constructor(private hs:HospitalService, private r: Router) {}

    onSubmit() {
    this.hs.registerPatient(this.patient).subscribe({
      next: (res: any) => {
        this.r.navigateByUrl('/home');
      },
      error: () => console.log('algo deu errado'),
    });
    this.patient.name=''
    this.patient.consultNumber=0
    ;
  }


}
