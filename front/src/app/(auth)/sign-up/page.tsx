// 'use client';
// import React, { useRef, useState } from 'react';
// import { UsernameForm } from '../_components/usernameForm';
// import { EmailPassForm } from '../_components/emailPassForm';
// import axios from 'axios';
// import { LoginForm } from '../_components/loginForm';
// import { Button } from '@/components/ui/button';

// export default function Home() {
//   const usernameRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

//   const handleOnClick = async () => {
//     console.log('duudadgjiin');

//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_BACKEND_URI}/user/`,
//       {
//         username: 'uzii',
//         email: 'uzii@gmail.com',
//         password: '1234',
//       }
//     );
//     // localStorage.setItem('token', response.data.token);
//     console.log('yvsan');
//   };

//   const [currentStep, setCurrentStep] = useState(0);

//   const FormNo = [UsernameForm, EmailPassForm, LoginForm][currentStep];

//   return (
//     <div className="h-100vh">
//       sign up
//       {/* <FormNo username={undefined} /> */}
//       {/* <Button onClick={handleOnClick} /> */}
//       <UsernameForm />
//     </div>
//   );
// }

'use client';
import React, { useRef, useState } from 'react';
import { UsernameForm } from '../_components/usernameForm';
import { EmailPassForm } from '../_components/emailPassForm';
import axios from 'axios';
import { LoginForm } from '../_components/loginForm';
import { Button } from '@/components/ui/button';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [postReq, setPostReq] = useState(false);

  const handleOnClick = async () => {
    console.log('duudadgjiin');

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/user/`,
      {
        username: username,
        email: email,
        password: password,
      }
    );
    // localStorage.setItem('token', response.data.token);
    console.log('yvsan');
  };

  return (
    <div>
      {!username ? (
        <UsernameForm onUsernameSubmit={setUsername} />
      ) : (
        <EmailPassForm
          username={username}
          onEmailSubmit={setEmail}
          onPasswordSubmit={setPassword}
          onContinue={handleOnClick}
        />
      )}
    </div>
  );
}
