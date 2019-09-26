import { Directive, ElementRef, AfterContentInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appInfoPop]'
})
export class InfoPopDirective implements AfterContentInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterContentInit() {
    this.elementRef.nativeElement.innerHtml = '<div class="popup" onclick="myFunction()">Click me!<span class="popuptext" id="myPopup">Popup text...</span></div>';
  }

  @HostListener('mouseover')
  popUpInfo() {
    document.getElementById("appInfoPop").innerHTML = this.elementRef.nativeElement.innerHtml;
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

}
