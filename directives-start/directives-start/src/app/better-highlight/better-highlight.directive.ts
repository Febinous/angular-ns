import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective {
  @HostBinding("style.backgroundColor") backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue",false,false);
  }
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "blue"
    );
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
}
function parseHostBinding(arg0: string) {
  throw new Error("Function not implemented.");
}

function HostBinding(arg0: string) {
  throw new Error("Function not implemented.");
}
