import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomePageComponent },
  { path: 'features', component: FeaturesPageComponent},
  { path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
