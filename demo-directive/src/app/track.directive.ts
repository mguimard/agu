import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTrack]',
  standalone: true
})
export class TrackDirective {

  @Input() appTrack : string = "";

  constructor(private elRef: ElementRef) { 
    console.log('APP TRACK directive', elRef)
    let htmlElement = elRef.nativeElement;
    htmlElement.onmouseenter = () => {
      console.log('On track le user', this.appTrack)
    }
  }

  @HostListener('click') doSomething(){
    console.log('CLICK', this.appTrack)
    this.elRef.nativeElement.style.color = 'red'
  }

}
