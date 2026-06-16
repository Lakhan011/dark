import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, inject, TemplateRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbNavModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';
import { HorizontalNavigationComponent } from 'src/app/shared/horizontal-header/horizontal-navigation.component';
import { HorizontalSidebarComponent } from 'src/app/shared/horizontal-sidebar/horizontal-sidebar.component';
import { VerticalNavigationComponent } from 'src/app/shared/vertical-header/vertical-navigation.component';
import { VerticalSidebarComponent } from 'src/app/shared/vertical-sidebar/vertical-sidebar.component';
declare var $: any;

import { options } from 'src/app/config';
import { CustomizerComponent } from 'src/app/shared/customizer/customizer.component';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [
    VerticalNavigationComponent,
    VerticalSidebarComponent,
    HorizontalNavigationComponent,
    HorizontalSidebarComponent,
    NgbNavModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    RouterModule,
    NgbCollapseModule,
    NgScrollbarModule,
    CustomizerComponent, FeatherModule
  ],
  templateUrl: './full.component.html',
})
export class FullComponent implements OnInit {
  constructor(public router: Router) {}

  private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		switch (reason) {
			case OffcanvasDismissReasons.ESC:
				return 'by pressing ESC';
			case OffcanvasDismissReasons.BACKDROP_CLICK:
				return 'by clicking on the backdrop';
			default:
				return `with: ${reason}`;
		}
	}

  themeOptions = options;

  public isCollapsed = false;

  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  public showMobileMenu = false;
  public expandLogo = false;

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard/dashboard1']);
    }
    this.defaultSidebar = this.themeOptions.sidebartype;
    this.handleSidebar();
    document.body.setAttribute('data-bs-theme', this.themeOptions.theme);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: string) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
        if (this.innerWidth < 1170) {
          this.themeOptions.sidebartype = 'mini-sidebar';
        } else {
          this.themeOptions.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  toggleSidebarType() {
    switch (this.themeOptions.sidebartype) {
      case 'full':
        this.themeOptions.sidebartype = 'mini-sidebar';
        break;
      case 'mini-sidebar':
        if (this.defaultSidebar === 'mini-sidebar') {
          this.themeOptions.sidebartype = 'full';
        } else {
          this.themeOptions.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  handleClick(event: boolean) {
    this.showMobileMenu = event;
  }
}
