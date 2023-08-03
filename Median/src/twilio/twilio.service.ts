import * as Twilio from 'twilio';
import { Injectable } from '@nestjs/common';


@Injectable()
export class TwilioService{
    private readonly auth_token = process.env.TWILIO_AUTH_TOKEN
    private readonly account_sid = process.env.TWILIO_ACCOUNT_SID

    private readonly twilioClient: Twilio.Twilio;

    constructor(){
        this.twilioClient =  Twilio(this.account_sid, this.auth_token);
    }


    async sendSMS(to: string, body: string): Promise<void>{
        await this.twilioClient.messages.create({
            body,
            to,
            from: '+14704666603',
        });
    }

    async makeCall(to: string, message: string): Promise<void>{
        await this.twilioClient.calls.create({
            twiml: `<Response><Say>${message}</Say></Response>`,
            to,
            from: '+14704666603',
        })
    }


}