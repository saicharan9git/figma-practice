import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { SocialButton } from './SocialButton';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign in:', { email, password });
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
  };

  const handleGithubSignIn = () => {
    console.log('Sign in with GitHub');
  };

  return (
    <section className="relative h-[900px] w-[760px] shrink-0 bg-white">
      <h1 className="absolute left-[180px] top-[180px] h-[35px] w-[201px] text-[28px] font-bold leading-[35px] text-[#111827]">
        Welcome back
      </h1>
      <p className="absolute left-[180px] top-[220px] h-[17px] w-[201px] text-[14px] font-normal leading-[17px] text-[#6B7280]">
        Sign in to your SaaSly account
      </p>

      <Input
        className="absolute left-[180px] top-[290px]"
        label="Email address"
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        className="absolute left-[180px] top-[380px]"
        label="Password"
        type="password"
        placeholder="••••••••••••"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button
        type="submit"
        onClick={handleSignIn}
        className="absolute left-[180px] top-[510px]"
      >
        Sign in
      </Button>

      <p className="absolute left-[240px] top-[564px] h-[15px] w-[179px] text-[12px] font-normal leading-[15px] text-[#6B7280]">
        Don't have an account?{' '}
        <span className="cursor-pointer hover:underline">Sign up</span>
      </p>

      <p className="absolute left-[290px] top-[595px] h-[15px] w-[94px] text-[12px] font-normal leading-[15px] text-[#6B7280]">
        Or continue with
      </p>

      <SocialButton
        className="absolute left-[180px] top-[618px]"
        label="Google"
        onClick={handleGoogleSignIn}
      />
      <SocialButton
        className="absolute left-[388px] top-[618px]"
        label="GitHub"
        onClick={handleGithubSignIn}
      />
    </section>
  );
};
