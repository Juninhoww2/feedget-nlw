import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '124452369dd3f6',
    pass: 'c837b5b2777a86',
  },
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'John Doe <john.doe@fakemail.com>',
    subject,
    html: body,
  });
  }
}