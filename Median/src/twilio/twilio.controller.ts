// your.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('send-sms')
  async sendSMS(@Body() body: { to: string, message: string }) {
    await this.twilioService.sendSMS(body.to, body.message);
    return { success: true, message: 'SMS sent.' };
  }

  @Post('make-call')
  async makeCall(@Body() body: { to: string, message: string }) {
    await this.twilioService.makeCall(body.to, body.message);
    return { success: true, message: 'Call initiated.' };
  }
}
