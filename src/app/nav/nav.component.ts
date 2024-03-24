import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isCollapse:boolean=true;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Brunel Kompaore - Portofolio');
  }

}
