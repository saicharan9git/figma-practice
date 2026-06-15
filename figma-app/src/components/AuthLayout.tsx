import React from 'react';
import { LoginForm } from './LoginForm';
import { Sidebar } from './Sidebar';

export const AuthLayout: React.FC = () => {
  return (
    <main className="flex h-[900px] w-[1440px] overflow-hidden bg-white [font-family:Inter,ui-sans-serif,system-ui,sans-serif]">
      <Sidebar />
      <LoginForm />
    </main>
  );
};
