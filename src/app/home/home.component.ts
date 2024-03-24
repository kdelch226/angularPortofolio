import { Component, OnInit, Renderer2 } from '@angular/core';
import { Project } from '../models/project';
import { Title } from '@angular/platform-browser';
import { ProjectSService } from '../service/project-s.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  featuredProjet={} as Project;

  constructor(private titleService: Title, private projet_service: ProjectSService,private render:Renderer2){
    this.titleService.setTitle('Brunel Kompaore - Portofolio');
  }

  /*recuper les donnes conserant le projet  */
  ngOnInit(): void {
    const randomNumber = Math.round(Math.random());
    this.featuredProjet=this.projet_service.GetProjetId(randomNumber);
  }

  /* fonction  permettant de telecharger un fichier */
  DownloadFile(){
    const link = this.render.createElement('a');
    link.setAttribute('target','blank');
    link.setAttribute('href','../../assets/Brunel-Cv.pdf');
    link.setAttribute('download','Brunel-Cv.pdf');
    link.click();
    link.remove();

  }
}
