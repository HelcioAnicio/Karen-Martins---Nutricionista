import { IoMenu } from "react-icons/io5";
export const Header = () => {
  return (
    <header className="w-full px-2 py-4">
      <nav className="flex w-full justify-end">
        <IoMenu className="h-6 w-6" />
      </nav>
    </header>
  );
};
