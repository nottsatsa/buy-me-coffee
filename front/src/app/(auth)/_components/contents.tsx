'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye } from 'lucide-react';
import { RefObject } from 'react';

interface types {
  classname: any;
  emailRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
}

export const Contents = ({ classname, emailRef, passwordRef }: types) => {
  let [passVisible, setPassVisible] = useState(false);
  const passVisibleOnClick = () => {
    setPassVisible((prev) => !prev);
    console.log(passVisible, 'toggle success');
  };

  return (
    // <div>
    //   <div className="grid w-full max-w-sm items-center gap-1.5">
    //     <Label htmlFor="email">Email</Label>
    //     <Input type="email" id="email" placeholder="Email" />
    //   </div>
    //   <div className="grid w-full max-w-sm items-center gap-1.5">
    //     <Label htmlFor="pass">Email</Label>
    //     <Input type="email" id="pass" placeholder="Email" />
    //   </div>
    // </div>
    <div className="flex flex-col gap-3 h-40 w-[107px] p-6 pt-0">
      <div className="grid items-center gap-2">
        <Label>Email</Label>
        <Input
          className="w-[359px] h-10 py-2 px-3"
          ref={emailRef}
          type="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="grid items-center gap-2">
        {' '}
        <Label>Password</Label>
        <div className="flex">
          <Input
            className="w-[319px] h-10 py-2 px-3"
            ref={passwordRef}
            type={passVisible ? 'text' : 'password'}
            placeholder="Entr password here"
          />
          <Button
            variant="outline"
            className="size-10"
            size="icon"
            onClick={passVisibleOnClick}
          >
            <Eye size={16} strokeWidth={1} />
          </Button>
        </div>
      </div>
    </div>
  );
};
