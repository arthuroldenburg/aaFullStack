import { Component } from '@angular/core';
import { Register } from '../../models/register.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  body: Register = {
    login: '',
    password: '',
    role: '',
  };
  constructor(private hs: HospitalService, private r: Router) {}

  onSubmit() {
    this.hs.register(this.body).subscribe({
      next: (res: any) => {
        this.r.navigateByUrl('/home');
      },
      error: () => console.log("algo deu errado")
      ,
    });
    this.body.login=''
    this.body.password=''
    this.body.role='';
  }
}
