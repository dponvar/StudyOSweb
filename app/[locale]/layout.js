import { notFound } from 'next/navigation';
import { routing } from '../../i18n';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  return {
    title: messages.meta?.title || "StudyOS - Never study the same way again",
    description: messages.meta?.description || "Transform your learning experience with AI-powered study tools. Create notes, flashcards, and quizzes instantly from any content."
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages({ locale });
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
} 