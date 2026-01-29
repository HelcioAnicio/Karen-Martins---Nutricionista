import { Button } from './button';

interface ButtonProps {
  text: string;
}

export const ButtonCTA = ({ text }: ButtonProps) => {
  return (
    <Button className='md:text-lg w-max min-h-max lg:px-5 lg:py-2 shadow-lg cursor-pointer'>
      {text}
    </Button>
  );
};
