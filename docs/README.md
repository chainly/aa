# learn angular

## first example: top-menu

### ts

    # Can't bind to 'ngbTooltip' since it isn't a known property of 'button'. ("="c-title">
    # NgbModule in near-top-routing.module.ts and self.component.ts
    # NgbModule @TODO: hwo NgbModule export all
    import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

    # route
    this.router.navigate(["pathxxx"])

### css

    # @TODO: css, scss

### html

    # input
    [ngbTooltip] ==> read TopMenuComponent.???
    {{title}} ==> read TopMenuComponent.title
    # output
    (click)="userInfo()"==> click to call TopMenuComponent.userInfo()


    # @TODO: look for detail
    [ngClass]