import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChooseCoursesComponent } from './choose-courses/choose-courses.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
 { path: 'login' , component: LoginComponent },
 {path: 'home', component: HomeComponent},
 {path: 'choose-courses', component: ChooseCoursesComponent},
 {path: 'create-courses', component: CreateCoursesComponent},
 {path: 'my-courses', component: MyCoursesComponent},
 {path:'header', component: HeaderComponent},
 {path: 'footer', component: FooterComponent},
 {path:'registration', component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
