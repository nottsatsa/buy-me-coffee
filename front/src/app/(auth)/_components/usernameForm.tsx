'use client';

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
import { UsernameInput } from '@/app/(auth)/_components/usernameInput';
import { Header } from './header';

const formSchema = z.object({
  username: z
    .string({ required_error: 'Enter username' })
    .min(4, { message: 'Username must be at least 4 characters.' }),
});

export const UsernameForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('onsubmit');
  };

  // ...

  return (
    <div className="h-100vh">
      <Header noName={true} username="" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="grid max-w-sm items-center gap-1.5 h-[64px] w-[407px] p-6 pt-0">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username here" {...field} />
                </FormControl>
                {/* <UsernameInput /> */}
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
