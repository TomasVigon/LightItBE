import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
  private readonly resend: any;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  sendEmail(email: string) {
    try {
      this.resend.emails.send({
        from: 'onboarding@resend.dev',
        to: `${email}`,
        subject: 'Hello World ok!',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
      });
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: error.message || 'Unknown error occurred. Failed to send Email',
      };
    }
  }
}
