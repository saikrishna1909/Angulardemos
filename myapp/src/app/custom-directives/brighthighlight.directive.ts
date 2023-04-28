import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[brightHighLighter]'
})
export class BrightHighlightDirective implements OnInit{
   constructor(private someElement:ElementRef, private renderer:Renderer2){}
   ngOnInit(): void {
       this.renderer.setStyle(
        this.someElement.nativeElement,
        'background-color',
        'green'
       )
   }

}