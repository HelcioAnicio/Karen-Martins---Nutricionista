import { Button } from "./button";

interface ButtonProps {
  text: string;
  ariaLabel?: string;
}

export const ButtonCTA = ({ text, ariaLabel }: ButtonProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      className="min-h-max w-max cursor-pointer shadow-lg md:text-lg lg:px-5 lg:py-2 xl:text-xl"
    >
      {text}
    </Button>
  );
};
