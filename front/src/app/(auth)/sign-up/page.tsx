import { Contents } from '../_components/contents';
import { FooterBtn } from '../_components/footer';
import { Header } from '../_components/header';
import { UsernameInput } from '../_components/usernameInput';

export default function Home() {
  return (
    <div className="h-100vh">
      sign up
      <Header noName={true} username="" />
      {/* <UsernameInput /> */}
      {/* <Contents /> */}
      <FooterBtn />
    </div>
  );
}
