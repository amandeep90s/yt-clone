import React from 'react';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <p className="p-4 bg-blue-500">Home Navbar</p>
      {children}
    </div>
  );
};
