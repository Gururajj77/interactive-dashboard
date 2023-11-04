import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BOX_ICON, GRAPH_ICON, PLUS_ICON, TICK_ICON, NAV_ICON } from './utils/NavBarCustomIcons';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('box', sanitizer.bypassSecurityTrustHtml(BOX_ICON));
    iconRegistry.addSvgIconLiteral('graph', sanitizer.bypassSecurityTrustHtml(GRAPH_ICON));
    iconRegistry.addSvgIconLiteral('plus', sanitizer.bypassSecurityTrustHtml(PLUS_ICON));
    iconRegistry.addSvgIconLiteral('tick', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('nav', sanitizer.bypassSecurityTrustHtml(NAV_ICON));
  }
}
