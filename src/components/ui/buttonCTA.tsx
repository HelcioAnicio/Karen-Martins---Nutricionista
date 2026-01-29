import { Button } from "./button";

interface ButtonProps {
  text: string;
}

export const ButtonCTA = ({ text }: ButtonProps) => {
  return (
    <Button className="min-h-max w-max cursor-pointer shadow-lg md:text-lg lg:px-5 lg:py-2">
      {text}
    </Button>
  );
};
