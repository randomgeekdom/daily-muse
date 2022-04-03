import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  workType = "sonnet";
  subject = "a dragon";
  situation = "in a cave";

  public get placeholder(){
    return 'Write your ' + this.workType + ' here';
  }

  public get prompt(){
    return `Today I will write a ${this.workType} about ${this.subject} ${this.situation}`;
  }
}
