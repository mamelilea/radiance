import { z } from 'zod';

const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const registerSchema = z.object({
  username: z.string()
      .min(1, { message: 'Username is required' })
      .regex(/^[A-Za-z0-9]+$/, { message: 'Username must be alphanumeric' }),
  email: z.string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email' }),
  password: z.string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(passwordRequirements, { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' }),
});

const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });

  export const authSchema = (isRegister) => (isRegister ? registerSchema : loginSchema);