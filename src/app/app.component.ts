import { Component } from '@angular/core';
import Prompts from './models/Prompts';
import PromptGeneratorService from './services/prompt-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private promptGenerator: PromptGeneratorService) {
    var prompts = localStorage.getItem('prompts');
    if (!!prompts) {
      this.prompts = JSON.parse(prompts);
      if (
        this.prompts.PromptDate == new Date().toDateString()
      ) {
        return;
      }
    }

    this.prompts = promptGenerator.Generate();
    localStorage.setItem('prompts', JSON.stringify(this.prompts));
  }

  prompts = new Prompts();

  public get placeholder() {
    return 'You can do this';
  }

  public getPrompt(workType: string, subject: string, situation: string){
    return `${workType} about ${subject} ${situation}`;
  }

  public get prompt1(): string {
    return this.getPrompt(this.prompts.WorkType1, this.prompts.Subject1, this.prompts.Situation1);
  }

  public get prompt2(): string {
    return this.getPrompt(this.prompts.WorkType2, this.prompts.Subject2, this.prompts.Situation2);
  }
  public GeneratePrompts(): void {
    this.prompts = this.promptGenerator.Generate();
  }
}
