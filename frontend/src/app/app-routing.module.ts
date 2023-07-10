import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'features', component: FeaturesPageComponent},
  { path: 'contact', component: ContactPageComponent},
  {path: 'profile/:id', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
