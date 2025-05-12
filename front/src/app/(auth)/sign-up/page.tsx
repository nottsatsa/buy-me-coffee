import { Contents } from '../_components/contents';
import { FooterBtn } from '../_components/footer';
import { UsernameInput } from '../_components/usernameInput';
import { UsernameForm } from '../_components/usernameForm';
import { EmailPassForm } from '../_components/emailPassForm';
import { LoginForm } from '../_components/loginForm';

export default function Home() {
  return (
    <div className="h-100vh">
      sign up
      {/* <UsernameForm /> */}
      {/* <EmailPassForm username={'tsatsa'} /> */}
      <LoginForm />
    </div>
  );
}
