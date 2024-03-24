import { Component, Input} from '@angular/core';
import { Project } from '../models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project= {} as Project;
  bsModalRef?:BsModalRef;// PERMET dinitialiser le Modal

    constructor ( private modalService: BsModalService) {
    }

    //Fpnction a activer pour le modal
    OpenProjectModal(){
      const modalOptions: ModalOptions={
        class:"modal-lg",
        initialState:{
          projetM: this.project
        }
      };
      this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);     
    }
}
