import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { PatientComponent } from './pages/patient/patient.component';

export const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"register", component: RegisterComponent},
  {path:"new_patient", component:PatientComponent}
];
