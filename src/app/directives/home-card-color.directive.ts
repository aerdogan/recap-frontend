import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[HomeCardColor]'
})

export class HomeCardColorDirective {

  constructor(private elRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightgray');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
