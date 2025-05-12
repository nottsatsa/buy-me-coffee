'use client';
import React, { useRef, useState } from 'react';
import { Eye } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FooterBtn } from '@/app/(auth)/_components/footer';
import { Header } from './header';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

interface typesOfEmailPassForm {
  username: String;
}

export const EmailPassForm = ({ username }: typesOfEmailPassForm) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: '',
  //   },
  // });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(`email:${values.email}, pass:${values.password}`);
  };

  // ...
  let [passVisible, setPassVisible] = useState(false);
  const passVisibleOnClick = () => {
    setPassVisible((prev) => !prev);
    // console.log(passVisible, 'toggle success');
  };

  return (
    <div className="h-100vh">
      <Header noName={false} username={`${username}`} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 h-40 w-[107px] "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid max-w-sm items-center gap-2 h-[64px] w-[407px] p-6 pt-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="grid max-w-sm items-center gap-2 h-[64px] w-[407px] p-6 pt-0">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  {/* <Input placeholder="Enter password here" {...field} /> */}
                  <div className="flex">
                    <Input
                      // className="w-[319px] h-10 py-2 px-3"
                      type={passVisible ? 'text' : 'password'}
                      placeholder="Enter password here"
                      {...field}
                    />
                    <Button
                      variant="outline"
                      // className="size-10"
                      size="icon"
                      onClick={passVisibleOnClick}
                    >
                      <Eye size={16} strokeWidth={1} />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FooterBtn type="submit" />
        </form>
      </Form>
    </div>
  );
};
