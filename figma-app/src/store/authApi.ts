import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  email: string;
  name: string;
  token: string;
  success: boolean;
}

export interface LoginError {
  message: string;
  code: string;
}

// Mock API implementation
const mockBaseQuery = async (args: any) => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      if (args.method === 'POST' && args.url === '/api/login') {
        const credentials = args.body as LoginCredentials;
        
        // Mock validation
        if (!credentials.email || !credentials.password) {
          resolve({
            error: {
              message: 'Email and password are required',
              code: 'VALIDATION_ERROR',
            },
          });
          return;
        }

        // Mock credentials
        const MOCK_EMAIL = 'demo@example.com';
        const MOCK_PASSWORD = 'password123';

        // Check credentials
        if (credentials.email !== MOCK_EMAIL || credentials.password !== MOCK_PASSWORD) {
          resolve({
            error: {
              message: 'Invalid email or password',
              code: 'AUTH_ERROR',
            },
          });
          return;
        }

        // Mock success response
        resolve({
          data: {
            id: '123456',
            email: credentials.email,
            name: credentials.email.split('@')[0],
            token: 'mock_jwt_token_' + Math.random().toString(36).substr(2, 9),
            success: true,
          },
        });
      } else {
        resolve({
          error: {
            message: 'Not Found',
            code: 'NOT_FOUND',
          },
        });
      }
    }, 1500); // 1.5 second delay to simulate real API
  });
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    // In a real app, you'd use the actual fetch-based query
    // For this mock, we'll override with our custom implementation
  }) as any,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      queryFn: async (credentials) => {
        try {
          const result = await mockBaseQuery({
            method: 'POST',
            url: '/api/login',
            body: credentials,
          });

          if (result.error) {
            return { error: result.error as LoginError };
          }

          return { data: result.data as LoginResponse };
        } catch (error) {
          return {
            error: {
              message: (error as Error).message || 'Login failed',
              code: 'NETWORK_ERROR',
            },
          };
        }
      },
    }),

    logout: builder.mutation<{ success: boolean }, void>({
      queryFn: async () => {
        // Simulate logout
        await new Promise((resolve) => setTimeout(resolve, 500));
        return { data: { success: true } };
      },
    }),

    getCurrentUser: builder.query<LoginResponse, void>({
      queryFn: async () => {
        // Simulate fetching current user
        await new Promise((resolve) => setTimeout(resolve, 800));
        return {
          data: {
            id: '123456',
            email: 'user@example.com',
            name: 'User',
            token: 'mock_token',
            success: true,
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetCurrentUserQuery } =
  authApi;
