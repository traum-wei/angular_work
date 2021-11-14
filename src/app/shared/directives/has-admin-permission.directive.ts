import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Directive({
 selector: '[appHasAdminPermission]'
})
export class HasAdminPermissionDirective {

 constructor(
   private authService: AuthService,
   private templateRef: TemplateRef<any>,
   private viewContainer: ViewContainerRef
 ) {
   this.createDOMwhenUserIsAdmin();
  }

 private createDOMwhenUserIsAdmin(): void {
   const userIsAdmin = this.authService.getUserInfo().role === 'ADMIN';
   if (userIsAdmin) {
     this.viewContainer.createEmbeddedView(this.templateRef);
   }
 }
}
