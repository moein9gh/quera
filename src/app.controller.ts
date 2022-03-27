import {Body, Controller, Get, Param, Post, Render} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHome() {
    return {};
  }

  @Get("Questions")
  @Render('questions')
  getQuestions() {
    return this.appService.getQuestions();
  }

  @Get("questions/:questionNumber")
  @Render('question')
  getQuestion(@Param() param) {
    console.log(param)
    return this.appService.getQuestion(param.questionNumber);
  }

  @Post("submit")
  submit(@Body() body) {
    return this.appService.submit(body);
  }
}
