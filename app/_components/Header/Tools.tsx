import { useState, useEffect, useRef } from "react";
import searchIcon from "@/public/svg/tools/search-icon.svg";
import phoneIcon from "@/public/svg/tools/phone-icon.svg";
import heartIcon from "@/public/svg/tools/heart-icon.svg";
import Image from "next/image";
import burgerMenu from "@/public/svg/tools/burger-menu.svg";
import Menu from "../Menu";
import Link from "next/link";

interface ToolsProps {
  navOptions: {
    title: string;
    slug: string;
  }[];
}

const Tools: React.FC<ToolsProps> = ({ navOptions }) => {
  const [menu, setMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("RU");
  const [searchMenu, setSearchMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    if (searchMenu) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [searchMenu]);

  const toggleLanguageMenu = () => {
    setLanguageMenu(!languageMenu);
  };

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setLanguageMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="h-full items-center flex gap-[8px] xl:gap-[12px]">
      <button onClick={() => setSearchMenu(prev => !prev)} className="border border-neutral-300 px-3 py-3 rounded-full max-mdx:px-3 max-mdx:py-3">
        <Image
          src={searchIcon}
          height={100}
          width={100}
          alt={`Tools Item SearchIcon`}
          className="w-7 h-7 max-mdx:w-[20px] max-mdx:h-[20px]"
        />
      </button>
      <Link href={'/favorites'}>
        <button className="border border-neutral-300 px-3 py-3 rounded-full max-mdx:px-3 max-mdx:py-3">
          <Image
            src={heartIcon}
            height={100}
            width={100}
            alt={`Tools Item HeartIcon : Favorites`}
            className="w-7 h-7 max-mdx:w-[20px] max-mdx:h-[20px]"
          />
        </button>
      </Link>
      <a href="tel:+998990909095" className="border bg-[#333333] border-neutral-300 px-3 py-3 rounded-full max-mdx:px-3 max-mdx:py-3 hidden xl:block">
        <Image
          src={phoneIcon}
          height={100}
          width={100}
          alt={`Tools Item HeartIcon : Favorites`}
          className="w-7 h-7 max-mdx:w-3 max-mdx:h-3"
        />
      </a>
      <div ref={menuRef} className="mdx:relative xl:flex xl:items-center xl:text-left hidden z-40">
        <button
          id="dropdownButton"
          className="inline-flex items-center text-[19px] font-medium bg-white focus:outline-none border border-neutral-300 px-4 py-3 rounded-full"
          onClick={toggleLanguageMenu}
        >
          {selectedLanguage}
          <svg
            className="w-5 h-5 ml-1 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {languageMenu && (
          <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="py-1">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeLanguage("RU")}
              >
                Русский
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeLanguage("UZ")}
              >
                <p>O&apos;zbekcha</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      <button
        onClick={handleOpenMenu}
        className="bg-[#333333] max-mdx:px-3 max-mdx:py-3 px-4 py-4 rounded-full 2xl:hidden"
      >
        <Image
          src={burgerMenu}
          height={100}
          width={100}
          alt={`Tools Item Burger Menu`}
          className="w-6 h-6 max-mdx:w-[20px] max-mdx:h-[20px]"
        />
      </button>
      {menu ? (
        <Menu menu={menu} closeMenu={handleCloseMenu} navOptions={navOptions} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tools;
