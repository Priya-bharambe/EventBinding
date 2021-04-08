import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBinding';

  months = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  isavailable = true;
  myClickFunction(event: any) {
    alert("Button is clicked");
    console.log(event);
  }
  changedays(event: any) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }
}