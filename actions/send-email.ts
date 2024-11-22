'use server';

import { Resend } from 'resend';
import { getErrorMessage, isValid } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email');
  const message = formData.get('message');

  if (!isValid(email, 500)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!isValid(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <contactform@api.juliusliu.dev>',
      to: 'contact@juliusliu.dev',
      replyTo: email as string,
      subject: 'Message from contact form',
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
