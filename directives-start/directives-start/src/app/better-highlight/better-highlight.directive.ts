import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
  HostListener,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective {
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue",false,false);

    this.backgroundColor = this.defaultColor;
  }
  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(

    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
function parseHostBinding(arg0: string) {
  throw new Error("Function not implemented.");
}

function HostBinding(arg0: string) {
  throw new Error("Function not implemented.");
}
