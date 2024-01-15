import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useRouter } from 'next/router';
import TopBar from './client/components/TopBar';
import Footer from './client/components/Footer';
import { CartProvider } from './client/components/CartContext';
import AuthProvider from './client/components/Utilities/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <CartProvider>
        <TopBar/>
        <div className={inter.className}>
          {children}
        </div>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}
