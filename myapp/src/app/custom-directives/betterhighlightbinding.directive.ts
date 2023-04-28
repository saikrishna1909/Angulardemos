import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlightbinding]'
})
export class BetterhighlightbindingDirective implements OnInit{
  @HostBinding("style.backgroudColor")
  backgroundColor:string=''
  @Input()
  defaultColor:string=''
  @Input()
  highlightColor:string=''
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {}

  @HostListener("mouseenter")
  mouseover(){
    this.backgroundColor=this.highlightColor
  }
  @HostListener("mouseleave")
  mouseleave(){
    this.backgroundColor=this.defaultColor
  }
}
