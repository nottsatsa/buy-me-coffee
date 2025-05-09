import { Button } from '@/components/ui/button';

export const FooterBtn = ({ className }: any) => {
  return (
    <div className="h-[64px] w-[407px] p-6 pt-0">
      <Button className={`bg-[#18181B] h-10 w-[359px] ${className}`}>
        Continue
      </Button>
    </div>
  );
};
