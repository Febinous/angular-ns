import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };
  paramsSub: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };
    this.paramsSub = this.route.params.subscribe((data) => {
      this.user.id = data["id"];
      this.user.name = data["name"];
    });
  }
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
