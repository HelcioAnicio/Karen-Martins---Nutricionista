import { IoMenu } from 'react-icons/io5';
export const Header = () => {
  return (
    <header className='py-4 px-2 w-full'>
      <nav className='w-full flex justify-end'>
        <IoMenu className='w-6 h-6' />
      </nav>
    </header>
  );
};
