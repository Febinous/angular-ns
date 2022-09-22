import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService, AccountService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountService
  ) {}

  onSetTo(status: string) {
    // console.log('A server status changed, new status: ' + status);

    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
