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
        <div className="flex">
          <SidePic />
          <div className="w-50vw h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
