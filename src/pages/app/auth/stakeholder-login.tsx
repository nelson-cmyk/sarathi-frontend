import { images, titles, webIcons } from '@/constants';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signinSchema, type SigninSchema } from '@/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput, FormPassword, SubmitBtn } from '@/components';
import { RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { simpleFetch } from '@/axios/simple.fetch';

type CaptchaProps = {
  key: string;
  image: string;
  strikethrough: number;
};

const AppStakeholderLogin = () => {
  document.title = `Stakeholder Signin | ${titles.appTitle}`;
  const {
    formState: { errors, isSubmitting },
    ...form
  } = useForm<SigninSchema>({
    defaultValues: { username: '', password: '', captcha: '' },
    mode: 'onSubmit',
    resolver: zodResolver(signinSchema),
  });

  // Captcha related starts ------
  const [captcha, setCaptcha] = useState<CaptchaProps>({
    key: '',
    image: '',
    strikethrough: 12,
  });

  const getCaptcha = async () => {
    const angle = Math.floor(Math.random() * 31) - 15;
    try {
      const res = await simpleFetch.get(`/auth/captcha`);
      setCaptcha({
        key: res.data.key,
        image: res.data.image,
        strikethrough: angle,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCaptcha();
  }, []);
  // Captcha related ends ------

  const handleSubmit = async (data: SigninSchema) => {
    console.log(data);
    await new Promise((t) => setTimeout(t, 1000));
  };

  return (
    <div
      className="relative min-h-svh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/ys-signin.jpg')" }}
    >
      {/* Black overlay */}{' '}
      <div className="absolute inset-0 bg-card-foreground/70" />
      {/* Page content */}
      <div className="relative z-10 flex min-h-svh items-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 py-10 md:px-10 lg:flex-row lg:justify-between lg:gap-16">
          {/* Left side - Project / Department information */}
          <div className="w-full max-w-xl text-center text-card lg:text-left">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-card/70 flex flex-col gap-1">
              <span>{titles.depName},</span>
              <span>{titles.govName}</span>
            </p>
            <h1 className="font-bold text-4xl uppercase tracking-wider sm:text-4xl lg:text-5xl">
              {titles.projectName}
            </h1>
            <p className="mt-6 max-w-lg text-base tracking-wider leading-7 text-card/80 sm:text-base">
              Free bicycles are distributed to students across West Bengal to
              reduce school dropout rates, empower youth, and support easy,
              eco-friendly commuting to high schools.
            </p>
          </div>
          {/* Right side - Login form */}
          <div className="w-full max-w-sm">
            <Card className="border-card/20 bg-card/95 py-8 shadow-2xl backdrop-blur-sm">
              <CardHeader className="mb-4 text-center">
                <div className="w-full flex size-16 items-center justify-center rounded-md mb-2">
                  <img
                    src={images.nationalEmblem}
                    alt="National Emblem"
                    className="h-16 w-auto"
                  />
                </div>
                <CardTitle className="text-xl">Welcome back</CardTitle>
                <CardDescription>
                  Login with your username and password
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                  <fieldset disabled={isSubmitting}>
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
                            to="/auth/forgot-password"
                            className="ml-auto text-[13px] underline-offset-4 hover:underline text-muted-foreground"
                            tabIndex={-1}
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
                          errorMsg={errors.password?.message}
                          placeholder="Password"
                          type="password"
                        />
                      </Field>
                      {/* Captcha */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {captcha?.image && (
                            <div className="relative w-36 h-16 overflow-hidden">
                              <img
                                src={captcha.image}
                                alt="CAPTCHA"
                                className="w-full h-full object-cover"
                              />
                              <span
                                className={`absolute left-[-20%] top-1/2 w-[150%] h-0.5 bg-primary/50`}
                                style={{
                                  transform: `rotate(${captcha.strikethrough}deg)`,
                                }}
                              />
                            </div>
                          )}
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            type="button"
                            onClick={getCaptcha}
                          >
                            <RefreshCcw />
                          </Button>
                        </div>
                        <FormInput
                          register={form.register}
                          name="captcha"
                          placeholder="Captcha"
                        />
                      </div>
                      {errors.captcha?.message && (
                        <div className="-mt-3.5 text-xs text-destructive">
                          {errors.captcha.message}
                        </div>
                      )}
                      <Field>
                        <SubmitBtn
                          isSubmitting={isSubmitting}
                          label="Login"
                          submitLabel="Logging in ..."
                        />
                      </Field>
                    </FieldGroup>
                  </fieldset>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppStakeholderLogin;
