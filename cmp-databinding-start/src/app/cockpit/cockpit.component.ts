import { Component, OnInit } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerContent = "";
  newServerName = "";
  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
    // this.serverElements.push({
    //   type: "server",
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
    // this.serverElements.push({
    //   type: "blueprint",
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }
}