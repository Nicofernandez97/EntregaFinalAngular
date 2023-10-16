import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontsize]'
})
export class FontsizeDirective {

  constructor(public elementRef: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.elementRef.nativeElement, "font-size", "20px")

   }

}
