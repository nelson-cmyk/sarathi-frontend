import z from 'zod';

export const signinSchema = z.object({
  username: z.string().nonempty('Username is required'),
  password: z.string().nonempty('Password is required'),
});
export type SigninSchema = z.infer<typeof signinSchema>;
