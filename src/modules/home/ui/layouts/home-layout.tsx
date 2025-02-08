import { SidebarProvider } from '@/components/ui/sidebar';
import { HomeNavbar } from '@/modules/home/ui/components/home-navbar';
import React from 'react';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};
