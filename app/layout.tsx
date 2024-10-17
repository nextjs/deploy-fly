import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js on Fly',
  description: 'Deploy your Next.js application to Fly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
