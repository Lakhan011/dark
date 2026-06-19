import { Directive, Input, TemplateRef, ViewContainerRef, inject, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appHasPermission]',
  standalone: true
})
export class HasPermissionDirective implements OnInit, OnDestroy {
  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);
  private authService = inject(AuthService);
  
  private permissions: string[] = [];
  private sub?: Subscription;

  @Input() set appHasPermission(val: string | string[]) {
    this.permissions = Array.isArray(val) ? val : [val];
    this.updateView();
  }

  ngOnInit() {
    // Re-evaluate whenever the current user changes (e.g. login/logout)
    this.sub = this.authService.currentUser$.subscribe(() => {
      this.updateView();
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  private updateView() {
    this.viewContainer.clear();
    
    // Check if the current user has the required permission(s)
    if (this.authService.hasPermission(this.permissions)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
