import { Injectable } from '@nestjs/common';
const samples = require('../samples.json');

@Injectable()
export class AppService {
  async getQuestions() {
    return {len:samples.length};
  }

  async getQuestion(questionNumber) {
    const question = samples[Number(questionNumber)-1]
    return {
      title:question.title,
      body:question.body,
      examples:question.examples
    };
  }

  async submit(data) {
    console.log(data)
    return {
      msg:"success"
    };
  }
}
