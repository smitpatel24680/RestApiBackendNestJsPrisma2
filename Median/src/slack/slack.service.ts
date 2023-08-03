// slack.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SlackService {

  //Bot-1  
  private readonly authToken_bot1 = process.env.AUTHTOKEN_BOT1;
  private readonly webhookUrl_bot1_general = 'https://hooks.slack.com/services/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';
  

  //Bot-2
  private readonly authToken_bot2 = process.env.AUTHTOKEN_BOT2;
  private readonly webhookUrl_bot2_random = 'https://hooks.slack.com/services/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';
 
  


    //*** Sending a message *******/

  async sendMessage(message: string) {
    try {
        await axios.post(this.webhookUrl_bot1_general, { text: message });
      } catch (error) {
        throw new Error('Failed to send message to Slack.');
      }
  }


  //***   Getting all messages from a particular channel ****/

  async getMessages(channelId: string): Promise<any> {
    try {
      const response = await axios.get(`https://slack.com/api/conversations.history`, {
        headers: {
          Authorization: `Bearer ${this.authToken_bot1}`,
        },
        params: {
          channel: channelId,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to retrieve messages from Slack.');
    }
  }

  //*******   Getting all the channels from the workspace ****/
  async getChannelList(): Promise<any> {
    try {
      const response = await axios.get('https://slack.com/api/conversations.list', {
        headers: {
          Authorization: `Bearer ${this.authToken_bot1}`,
        },
      });
  
      return response.data;
    } catch (error) {
      throw new Error('Failed to retrieve channel list from Slack.');
    }
  }



}
