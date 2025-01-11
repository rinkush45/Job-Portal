import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dream Job',
  description: 'Find your dream job or post job opportunities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-indigo-600">Dream Job</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/jobs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                    Browse Jobs
                  </Link>
                  <Link href="/jobs/post" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    Post a Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">© 2024 JobPortal. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}