import { Component, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { BELL_ICON, MESSAGE_ICON, SEARCH_ICON } from './utils/SearchBarCustomIcons';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('search', sanitizer.bypassSecurityTrustHtml(SEARCH_ICON));
    iconRegistry.addSvgIconLiteral('bell', sanitizer.bypassSecurityTrustHtml(BELL_ICON));
    iconRegistry.addSvgIconLiteral('message', sanitizer.bypassSecurityTrustHtml(MESSAGE_ICON));
  }
  userName = signal<string>("J Gururaj")
}
