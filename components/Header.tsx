'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SubmenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  submenu: SubmenuItem[] | null;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const menuLinks: MenuItem[] = [
    { title: 'Home', href: '/', submenu: null },
    {
      title: 'Opportunities',
      href: '#',
      submenu: [
        { title: 'Careers', href: '/career' },
        { title: 'Internships', href: '#' },
      ],
    },
    { title: 'About Us', href: '/about', submenu: null },
    { title: 'Courses', href: '/courses', submenu: null },
    {
      title: 'Explore',
      href: '#',
      submenu: [
        { title: 'Destinations', href: '#' },
        { title: 'Packages', href: '#' },
      ],
    },
    { title: 'Contact Us', href: '/contact', submenu: null },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = (menu: string) =>
    setDropdownOpen((prev) => (prev === menu ? null : menu));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full md:mb-20 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/mainlogo.png"
              alt="Skillvity logo"
              width={200}
              height={43}
            />
          </Link>

          {/* Mobile Toggle Button */}
          <div className="flex lg:hidden">
            <button type="button" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="text-black" /> : <Menu className="text-black" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-black">
            {menuLinks.map((link) => (
              <div
                key={link.title}
                className="relative group"
                onMouseEnter={() => setHoveredLink(link.title)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className={`transition flex items-center ${
                    pathname === link.href ? 'text-[#0B96F3]' : 'hover:text-[#0B96F3]'
                  }`}
                >
                  {link.title}{' '}
                  {link.submenu &&
                    (hoveredLink === link.title ? <ChevronUp /> : <ChevronDown />)}
                </Link>
                {link.submenu && (
                  <div
                    className={`absolute top-full left-0 bg-white text-black shadow-lg rounded mt-2 min-w-[150px] py-2 z-20 transition-all duration-200 ease-in-out ${
                      hoveredLink === link.title ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.title}
                        href={sublink.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/enquire">
              <button className="btn-primary flex items-center justify-center gap-2 hover:bg-[#000717]">
                Get a Quote{' '}
                <Image src="/arrowb.svg" alt="arrow" width={16} height={16} />
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#000717] text-white mt-4 p-4 rounded-lg space-y-4">
            {menuLinks.map((link) => (
              <div key={link.title} className="border-b border-white/30 pb-2">
                {!link.submenu ? (
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold block w-full ${
                      pathname === link.href ? 'text-[#0B96F3]' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <>
                    <div className="flex justify-between items-center w-full">
                      <Link
                        href={link.href}
                        className={`text-sm font-semibold block ${
                          pathname === link.href ? 'text-[#0B96F3]' : ''
                        }`}
                      >
                        {link.title}
                      </Link>
                      <button onClick={() => toggleDropdown(link.title)}>
                        {dropdownOpen === link.title ? <ChevronUp /> : <ChevronDown />}
                      </button>
                    </div>
                    {dropdownOpen === link.title && (
                      <div className="pl-4 mt-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.title}
                            href={sublink.href}
                            className={`text-sm block py-1 ${
                              pathname === sublink.href ? 'text-[#0B96F3]' : ''
                            }`}
                          >
                            {sublink.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
