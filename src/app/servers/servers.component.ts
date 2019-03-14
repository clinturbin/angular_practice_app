import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  // For Assignment 2
  // userName = '';
  // For assignment 3
  displaySecretMessage = false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  // For Assignment 2
  // onResetUserName() {
  //   this.userName = '';
  // }

  // For Assignment 3
  onToggleSecretMessage() {
    this.displaySecretMessage = !this.displaySecretMessage;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
