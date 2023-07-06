import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegFormComponent } from './user-reg-form/user-reg-form.component';


const routes: Routes = [
  {path: 'register', component: UserRegFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
