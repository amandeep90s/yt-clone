import { SidebarTrigger } from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { SearchInput } from './search-input';

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 flex items-center bg-white px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />

          <Link href="/">
            <div className="p-4 flex items-center gap-1">
              <Image src="/logo.svg" className="h-8 w-8" height={32} width={32} alt="Logo" />
              <p className="text-xl font-semibold tracking-tight">Youtube</p>
            </div>
          </Link>
        </div>

        {/* Searchbar */}
        <div className="flex flex-1 justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
};
