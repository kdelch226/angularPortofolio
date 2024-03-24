import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { Title } from '@angular/platform-browser';
import { ProjectSService } from '../service/project-s.service';
import { Tech } from '../models/Tech';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css'
})
export class PortofolioComponent implements OnInit{

  projet = {} as Project [];
  isCollapse:boolean=true;
  restOption:boolean=false;
  
  /* initialisation de toute les variables de filtre a false */
  TypeScript: boolean = false;
  Python: boolean = false;
  Java: boolean = false;
  JavaScript: boolean = false;
  CPP: boolean = false;
  Angular: boolean = false;
  React: boolean = false;
  Bootstrap: boolean = false;
  JQuery: boolean = false;
  Wordpress: boolean = false;
  Django: boolean = false;
  SpringBoot: boolean = false;
  HTML: boolean = false;
  CSS: boolean = false;
  MySQL: boolean = false;
  MongoDB: boolean = false;
  WindowsServer: boolean = false;
  AndroidStudio: boolean = false;
  RapidAPI: boolean = false;
  MCUExpresso: boolean = false;
  PacketTracer: boolean = false;
    
  constructor(private titleService: Title,private projet_service:ProjectSService) {
    this.titleService.setTitle('Brunel Kompaore - Portofolio');
  }

  ngOnInit(): void {
    this.projet=this.projet_service.GetProjet();
  }

  /**pour chaque filtre selection on on actualise la liste des projet a afficher */
  filter(){
    let filterTech: Tech[]=[];
    if (this.Java) {
      filterTech.push(Tech.JAVA);
  }
  if (this.JavaScript) {
      filterTech.push(Tech.JAVASCRIPT);
  }
  if (this.TypeScript) {
      filterTech.push(Tech.TYPESCRIPT);
  }
  if (this.Python) {
      filterTech.push(Tech.PYTHON);
  }
  if (this.MySQL) {
      filterTech.push(Tech.MYSQL);
  }
  if (this.JQuery) {
      filterTech.push(Tech.JQUERY);
  }
  if (this.Bootstrap) {
      filterTech.push(Tech.BOOTSTRAP);
  }
  if (this.Wordpress) {
      filterTech.push(Tech.WORDPRESS);
  }
  if (this.React) {
      filterTech.push(Tech.REACT);
  }
  if (this.Django) {
      filterTech.push(Tech.DJANGO);
  }
  if (this.SpringBoot) {
      filterTech.push(Tech.SPRINGBOOT);
  }
  if (this.CPP) {
      filterTech.push(Tech.CPP);
  }
  if (this.Angular) {
      filterTech.push(Tech.ANGULAR);
  }
  if (this.MongoDB) {
      filterTech.push(Tech.MONGODB);
  }
  if (this.WindowsServer) {
      filterTech.push(Tech.WINDOWSSERVER);
  }
  if (this.AndroidStudio) {
      filterTech.push(Tech.ANDROIDSTUDIO);
  }
  if (this.RapidAPI) {
      filterTech.push(Tech.RAPIDAPI);
  }
  if (this.MCUExpresso) {
      filterTech.push(Tech.MCUEXPRESSO);
  }
  if (this.PacketTracer) {
      filterTech.push(Tech.PACKETTRACER);
  }
  if (this.HTML) {
      filterTech.push(Tech.HTML);
  }
  if (this.CSS) {
      filterTech.push(Tech.CSS);
  }

  /**tant qun fitre est choisi on laisse loption reinitialiser les filtres */
  if (this.Java || this.TypeScript || this.Python || this.JavaScript || this.CPP || 
    this.Angular || this.React || this.Bootstrap || this.JQuery || this.Wordpress || 
    this.Django || this.SpringBoot || this.HTML || this.CSS || this.MySQL || 
    this.MongoDB || this.WindowsServer || this.AndroidStudio || this.RapidAPI || 
    this.MCUExpresso || this.PacketTracer){
    this.restOption=true;
  }
  else{
    this.restOption=false;
  }
    this.projet=this.projet_service.GetprojectByFilter(filterTech)
  }

  /**fonction pour reinitialiser les filtres a zero */
  resetFilter(){
    this.TypeScript = false;
    this.Python= false;
    this.Java = false;
    this.JavaScript = false;
    this.CPP = false;
    this.Angular= false;
    this.React = false;
    this.Bootstrap= false;
    this.JQuery= false;
    this.Wordpress= false;
    this.Django = false;
    this.SpringBoot = false;
    this.HTML = false;
    this.CSS = false;
    this.MySQL = false;
    this.MongoDB = false;
    this.WindowsServer = false;
    this.AndroidStudio = false;
    this.RapidAPI = false;
    this.MCUExpresso = false;
    this. PacketTracer= false;
    this.restOption=false;

    this.projet=this.projet_service.GetProjet();
  }

}
