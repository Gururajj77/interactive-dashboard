import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CLOSE_ICON } from 'src/app/main/utils/customMainIcons';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Input() name: string = "";
  @Input() product: string = "";
  @Output() close = new EventEmitter<boolean>(false);

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('close', sanitizer.bypassSecurityTrustHtml(CLOSE_ICON));
  }

  closeModal() {
    this.close.emit(true);
  }
}
