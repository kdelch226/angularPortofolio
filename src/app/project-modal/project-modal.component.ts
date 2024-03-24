import { Component } from '@angular/core';
import { Project } from '../models/project';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  projetM= {} as Project;
  
  constructor(public bsModalRef: BsModalRef){
      
  }
}
