import { Injectable } from '@angular/core';
import Prompts from '../models/Prompts';

@Injectable({
  providedIn: 'root'
})
export default class PromptGeneratorService {

  constructor() { }

  Generate(): Prompts{
    var prompts = new Prompts();

    prompts.Situation1 = this.getRandom(this.situations);
    prompts.Situation2 = this.getRandom(this.situations);
    prompts.Subject1 = this.getRandom(this.subjects);
    prompts.Subject2 = this.getRandom(this.subjects);
    prompts.WorkType1 = this.getRandom(this.workTypes.map(x=>x.type));
    prompts.WorkType2 = this.getRandom(this.workTypes.map(x=>x.type));

    return prompts;
  }

  private getRandom(arr: string[]): string{
    return arr[this.getRandomInt(arr.length)];
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private subjects = [
    "a dwarf",
    "an elf",
    "a man",
    "an unknown figure",
    "a woman",
    "a child",
    "a boy",
    "a girl",
    "a witch",
    "a dragon",
    "a giant",
    "a fairy"
  ];

  private situations = [
    "in a cave",
    "who is lost",
    "who has died",
    "who wonders about the world",
    "who went to the fair"
  ];

  private workTypes = [
    {
      type: "an acrostic",
      description: "An acrostic is a poem where the first letter of each line make up a word"
    },
    {
      type: "a ballad",
      description: "A ballad is a short form poem that can be sung and follows a rhyming scheme of ABAB."
    },
    {
      type: "a flash fiction",
      description: "Flash fiction are stories that are shorter than short stories and usually less than 1500 words"
    },
    {
      type: "a free-verse",
      description: "A free-verse is an unstructured poem with complete freedom"
    },
    {
      type: "a haiku",
      description: "A haiku is 3-lined poem that doesn't need to rhyme and where the syllables of each line are 5-7-5"
    },
    {
      type: "a limerick",
      description: "A limerick is an amusing 5-line poem that follows the rhyiming scheme AABBA"
    },
    {
      type: "an ode",
      description: "An ode is a short poem in praise of something"
    },
    {
      type: "a sonnet",
      description: "A sonnet is a rhyming poem that is 14 lines and follows the rhyming scheme of A-B-A-B-C-D-C-D-E-F-E-G-G"
    },
    {
      type: "a tanka",
      description: "A tanka is 5-lined poem that doesn't need to rhyme and where the syllables of each line are 5-7-5-7-7"
    }
  ]
}
