import { Component } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';
import { Patient } from '../../models/hospital.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  patients: Patient[] = [];
  constructor(private hs: HospitalService) {}

  getAll():void {
    this.hs.getAll().subscribe((res) => this.patients = res)
  }

  logout() {
      this.hs.logout('nice');
  }
}
