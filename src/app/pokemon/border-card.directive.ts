import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

private initialColour:string ="rgb(0, 150, 136)";
private defaultColour:string ="pink";
private defaultHeight:number = 260;

  constructor(private el:ElementRef) { 
    // this.setHeight(230);
    // this.setBorder("pink");
    this.setHeight(this.defaultHeight);
    this.setBorder(this.defaultColour);

  }



@Input('appBorderCard') borderColour:string;

@HostListener('mouseenter') onMouseEnter(){
  // this.setBorder(this.borderColour||"aqua");
  this.setBorder(this.initialColour||this.defaultColour);
}

@HostListener('mouseleave') onMouseLeave(){
  // this.setBorder("pink");
  this.setBorder(this.defaultColour);
}

setHeight(height:number){
this.el.nativeElement.style.height = `${height}px`;
}

setBorder(colour:string){
  this.el.nativeElement.style.border = `solid 5px ${colour}`;
}

}
