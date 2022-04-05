import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  workType = "a sonnet";
  subject = "a dragon";
  situation = "in a cave";

  workType2 = "a haiku";
  subject2 = "a man";
  situation2 = "who is lost";

  public get placeholder(){
    return 'You can do this';
  }

  public get prompt(){
    return `${this.workType} about ${this.subject} ${this.situation}`;
  }

  public get prompt2(){
    return `${this.workType2} about ${this.subject2} ${this.situation2}`;
  }
}
