// your.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SlackService } from './slack.service';

@Controller('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @Post('send')
  async sendMessageToSlack(@Body() body: { message: string }) {
    await this.slackService.sendMessage(body.message);
    return { success: true, message: 'Message sent to Slack.' };
  }

  @Get('messages/:channelId')
  async getMessagesFromChannel(@Param('channelId') channelId: string) {
    const messages = await this.slackService.getMessages(channelId);
    return { messages };
  }

  @Get('allChannels')
  async getAllChannels(){
    const channels = await this.slackService.getChannelList();
    return {channels};
  }

  


}
