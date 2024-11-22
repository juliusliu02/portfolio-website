import React from 'react';
import {
  Html,
  Head,
  Preview,
  Container,
  Section,
  Body,
  Hr,
  Heading,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-100'>
          <Container>
            <Section className='borderBlack my-10 rounded-md bg-white px-10 py-4'>
              <Heading className='leading-tight'>
                You have received the following message from the contact form.
              </Heading>
              <Text>Sender: {senderEmail}</Text>
              <Hr />
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;
