import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GradeProvider } from '@/components/gradeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quickgrade',
  description: 'Effortlessly check your average grade with a few clicks.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GradeProvider>{children}</GradeProvider>
      </body>
    </html>
  );
}
