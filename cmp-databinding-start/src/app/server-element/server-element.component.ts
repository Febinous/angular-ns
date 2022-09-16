import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input("srvElement") element: { type: string; name: string; content: string };
  constructor() {
    console.log("Constructor is init");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("On changes");
  }
  ngOnInit(): void {
    console.log("ng On it is called");
  }
}
