import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent {
  @Input() svgIcon: string = "";

  icon: any;

  ngOnInit() {
    this.icon = this.convertSvgToIconObject(this.svgIcon);
  }

  private convertSvgToIconObject(svg: string): any {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    const svgElement = doc.documentElement;

    const icon = {
      xmlns: svgElement.getAttribute('xmlns'),
      fill: svgElement.getAttribute('fill'),
      viewBox: svgElement.getAttribute('viewBox'),
      strokeWidth: svgElement.getAttribute('stroke-width'),
      stroke: svgElement.getAttribute('stroke'),
      cssClass: svgElement.getAttribute('class'),
      paths: Array.from(svgElement.querySelectorAll('path')).map((pathElement: Element) => ({
        strokeLinecap: pathElement.getAttribute('stroke-linecap'),
        strokeLinejoin: pathElement.getAttribute('stroke-linejoin'),
        d: pathElement.getAttribute('d'),
      })),
    };

    return icon;
  }
}
