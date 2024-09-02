import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../services/hospital.service';
import { Login } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login = {
    login: '',
    password: ''
  }

  constructor(private hs:HospitalService, private r: Router){}

  onSubmit(){
    this.hs.login(this.login).subscribe({
      next: (res: any) => {
        localStorage.setItem('token_angular', res.token);
        this.r.navigateByUrl('/home');
      },
      error: () => alert('login or password invalid!'),
    });
    this.login.login=''
    this.login.password=''
  }
}
