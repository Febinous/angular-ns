import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',as a attribute
  // selector: '.app-servers', class
  selector: 'app-servers',
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = t