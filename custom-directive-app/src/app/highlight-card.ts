import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true
})
export class HighlightCardDirective implements OnChanges {
  @Input('appHighlightCard') isAvailable: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateBackgroundColor();
  }

  private updateBackgroundColor(): void {
    if (this.isAvailable) {
      this.el.nativeElement.style.backgroundColor = '#d4edda'; // ღია მწვანე
    } else {
      this.el.nativeElement.style.backgroundColor = '#f8d7da'; // ღია წითელი
    }
  }
}