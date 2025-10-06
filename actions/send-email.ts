'use server';

import { Resend } from 'resend';
import { getErrorMessage, isValid } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY ?? "test");

type TurnstileResponse = {
  success: boolean;
  message: string;
}

const verifyTurnstile = async (token: string, ip: string | null): Promise<TurnstileResponse> => {
  // Create form data for Turnstile verification
  const verifyFormData = new FormData();
  verifyFormData.append(
    "secret",
    process.env.TURNSTILE_SECRET_KEY!,
  );
  verifyFormData.append("response", String(token));
  verifyFormData.append("remoteip", String(ip));

  // Specify Turnstile URL
  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  try {
    const result = await fetch(url, {
      body: verifyFormData,
      method: "POST",
    });

    const outcome = await result.json();
    if (!outcome.success) {
      return {
        success: false,
        message: "Invalid CAPTCHA"
      };
    }
    return {
      success: true,
      message: "",
    }
  } catch (err) {
    return {
      success: false,
      message: "Unable to verify CAPTCHA"
    }
  }
}

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email');
  const message = formData.get('message');
  const token = formData.get('cf-turnstile-response');
  const ip = (await headers()).get("x-real-ip");

  if (typeof token !== "string") {
    return {
      error: "Invalid captcha"
    }
  }

  const turnstileResponse = await verifyTurnstile(token, ip);

  if (!turnstileResponse.success) {
    return {
      error: turnstileResponse.message,
    }
  }

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
