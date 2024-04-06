import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'Acceuil',component:HomeComponent},
  {path:'Realisations',component:PortofolioComponent},
  {path:'Parcours',component:ResumeComponent},
  {path:'Contact',component:ContactComponent},
  {path: ' ', redirectTo: '/Acceuil', pathMatch: 'full' }, // Redirection vers /Home par défaut
  {path: '**', redirectTo: '/Acceuil', pathMatch: 'full' }, // Redirection vers /Home par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
