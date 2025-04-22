import { Component, HostListener } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
[x: string]: any;
isVisible: boolean = true;

constructor(private sidebarService: SidebarService , private router: Router) {}

ngOnInit() {
  this.sidebarService.isSidebarVisible$.subscribe(value => {
    this.isVisible = value;
  });

  this.handleResponsiveSidebar();
}

@HostListener('window:resize')
handleResponsiveSidebar() {
  if (window.innerWidth < 992) {
    this.sidebarService.hideSidebar();
  } else {
    this.sidebarService.showSidebar();
  }
}

}
