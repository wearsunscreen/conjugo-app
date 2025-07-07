import type { Metadata } from 'next';
import './globals.css';
import { AppLayout } from '@/components/AppLayout';
import { Toaster } from '@/components/ui/toaster';
import { SettingsProvider } from '@/context/SettingsContext';

export const metadata: Metadata = {
  title: 'Conjugaí',
  description: 'An app to learn Portuguese verb conjugations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SettingsProvider>
          <AppLayout>{children}</AppLayout>
          <Toaster />
        </SettingsProvider>
      </body>
    </html>
  );
}
