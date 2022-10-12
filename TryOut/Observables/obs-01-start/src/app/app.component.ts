import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { userService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private userService: userService) {}
  userActivated = false;
  private activatedSub: Subscription;
  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (didActivated) => {
        this.userActivated = didActivated;
      }
    );
  }
  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
