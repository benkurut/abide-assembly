/**
 * MainLayout
 * Shared page layout wrapper
 */
import type { ReactNode } from 'react';
import NavBar from '../components/NavBar';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
