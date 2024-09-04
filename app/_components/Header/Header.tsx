import React from 'react';
import Logo from '@/components/Header/Logo';
import Navigation from '@/components/Header/Navigation';
import Tools from '@/components/Header/Tools';

interface NavItem {
  title: string;
  slug: string;
}

const Header: React.FC = () => {
  const data: NavItem[] = [
    { title: 'Услуги', slug: 'services' },
    { title: 'О нас', slug: 'about' },
    { title: 'Блог', slug: 'blog' },
    { title: 'Контакты', slug: 'contacts' },
  ];

  return (
    <header className="w-full bg-white px-2 h-[90px] max-mdx:h-[72px] xl:h-[100px] shadow-2xl">
      <div className="w-full max-w-[1440px] flex items-center justify-between gap-2 h-full mx-auto">
        <Logo />
        <Navigation navOptions={data} />
        <Tools navOptions={data} />
      </div>
    </header>
  );
};

export default Header;