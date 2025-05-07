import React from 'react';
import { SidePic } from './_components/pic';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-100vh w-100vw">
          <SidePic />
          <div className="w-50vw h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
