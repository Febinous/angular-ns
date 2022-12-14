import { Component, EventEmitter, Output } from "@angular/core";
import { AccountService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  constructor(
    private logging: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert("New Status: " + status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.logging.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
  }
}
