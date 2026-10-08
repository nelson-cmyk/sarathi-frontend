import z from 'zod';

export const signinSchema = z.object({
  username: z.string().nonempty('Username is required'),
  password: z.string().nonempty('Password is required'),
  captcha: z
    .string()
    .nonempty('Captcha is required')
    .length(6, 'Captcha must be of 6 characters'),
});
export type SigninSchema = z.infer<typeof signinSchema>;
