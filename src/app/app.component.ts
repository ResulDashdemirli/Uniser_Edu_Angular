import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  username = " Hello World ";
  serverCreated = false;
  serverCreationStatus = "No servers Created"
  showSecret = false;

  Clear(){
    this.username = '';
  }
  onCreateServer(){ 
        this.serverCreated = true;
      this.serverCreationStatus= "Server was created! Name is  " + this.username;
  }
}
