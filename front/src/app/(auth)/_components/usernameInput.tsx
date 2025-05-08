import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const UsernameInput = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input type="username" id="username" placeholder="Enter username here" />
    </div>
  );
};
