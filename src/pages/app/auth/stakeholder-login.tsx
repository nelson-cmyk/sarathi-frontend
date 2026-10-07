import { images, titles, webIcons } from '@/constants';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signinSchema, type SigninSchema } from '@/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput, FormPassword } from '@/components';

const AppStakeholderLogin = () => {
  document.title = `Stakeholder Signin | ${titles.appTitle}`;
  const {
    formState: { errors, isSubmitting },
    ...form
  } = useForm<SigninSchema>({
    defaultValues: { username: '', password: '' },
    mode: 'onSubmit',
    resolver: zodResolver(signinSchema),
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link to={`/`} className="self-center">
          <div className="flex size-10 items-center justify-center rounded-md">
            <img src={images.nationalEmblem} />
          </div>
        </Link>
        <div className="flex flex-col gap-6">
          <Card className="py-20">
            <CardHeader className="text-center mb-4">
              <CardTitle className="text-xl">Welcome back</CardTitle>
              <CardDescription>
                Login with your username and password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <FormInput
                      register={form.register}
                      name="username"
                      errorMsg={errors.username?.message}
                      iconStart={<webIcons.user />}
                      placeholder="Username"
                    />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Link
                        to={`/auth/forgot-password`}
                        className="ml-auto text-[13px] text-muted-foreground underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <FormPassword
                      register={form.register}
                      name="password"
                      iconStart={
                        <webIcons.lock className="text-muted-foreground/40" />
                      }
                      placeholder="Password"
                      type="password"
                    />
                  </Field>
                  <Field>
                    <Button type="submit">Login</Button>
                    <FieldDescription className="text-center">
                      Don&apos;t have an account? <a href="#">Sign up</a>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default AppStakeholderLogin;
