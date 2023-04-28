import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  @HostListener("mouseenter")
  mouseover(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'red'
    )
  }
  @HostListener("mouseleave")
  mouseleave(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }
}
