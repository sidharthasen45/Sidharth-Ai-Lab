import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/whatsapp-button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Sidharth AI Lab | AI-Powered Digital Growth',
  description: 'A modern digital marketing agency focusing on leads, sales, and AI automation.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="font-sans bg-brand-dark text-white antialiased selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
