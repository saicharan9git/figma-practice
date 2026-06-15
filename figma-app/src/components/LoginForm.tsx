import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { SocialButton } from './SocialButton';
import { useLoginMutation } from '../store';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [login, { isLoading, data: loginResponse, error: loginError }] = useLoginMutation();

  useEffect(() => {
    if (loginError) {
      const errorMessage = loginError && typeof loginError === 'object' && 'data' in loginError 
        ? (loginError.data as any)?.message || 'Login failed'
        : 'An error occurred';
      setError(errorMessage);
    }
  }, [loginError]);

  useEffect(() => {
    if (loginResponse?.success) {
      console.log('Login successful:', loginResponse);
      setError('');
      // You can navigate to dashboard here or show success message
    }
  }, [loginResponse]);

  const handleSignIn = async () => {
    setError('');
    try {
      await login({ email, password }).unwrap();
    } catch (err) {
      console.error('Login error:', err);
    }
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

      {error && (
        <div className="absolute left-[180px] top-[260px] w-[400px] bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
          {error}
        </div>
      )}

      <Input
        className="absolute left-[180px] top-[290px]"
        label="Email address"
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={isLoading}
      />

      <Input
        className="absolute left-[180px] top-[380px]"
        label="Password"
        type="password"
        placeholder="••••••••••••"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        disabled={isLoading}
      />

      <Button
        type="submit"
        onClick={handleSignIn}
        className="absolute left-[180px] top-[510px]"
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
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
