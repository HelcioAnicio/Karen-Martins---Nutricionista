import { Button } from './button';

interface ButtonProps {
  text: string;
}

export const ButtonCTA = ({ text }: ButtonProps) => {
  return (
    <Button className='md:text-lg w-max min-h-max lg:px-10 lg:py-4'>
      {text}
    </Button>
  );
};
