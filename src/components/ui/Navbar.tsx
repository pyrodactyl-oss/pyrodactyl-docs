'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { useSearchContext } from 'fumadocs-ui/provider';

const Logo = () => (
  <svg aria-label="Pyrodactyl logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 61" className="w-6 h-6" fill="none">
    <path fill="#f94943" fillRule="evenodd" d="M.221 5.894c2.105 4.942 3.762 10.569 3.518 15.349-.124 2.415 2.375 5.89 4.683 6.683 2.568.881 4.998 2.762 6.208 6.329.66 1.942 3.005 3.258 4.995 2.696 4.253-1.203 9.98-1.256 14.475 3.247.529.53.764 1.286.597 2.012a15.343 15.343 0 01-10.022 10.946c-1.798.623-2.37 2.472-.468 2.575 2.41.13 6.157-.897 11.586-4.603.3-.205.71-.175.968.08.228.225.284.57.14.854l-.644 1.276c-.47.93-.358 2.043.287 2.864l.73.93c.431.549.54 1.28.285 1.928l-.192.49c-.14.353-.077.754.162 1.05.485.6 1.434.51 1.793-.172l.329-.623c.187-.355.445-.597.801-.407.717.382 2.333.346 2.279-.458l-.002-.029a.74.74 0 00-.22-.5L40.47 56.33a2.679 2.679 0 01-.396-3.238l.93-1.579a1.478 1.478 0 00-.104-1.656 1.48 1.48 0 01.292-2.097l.93-.69a1.89 1.89 0 012.297.036c.71.562.91 1.548.474 2.339l-.027.05a1.909 1.909 0 00.22 2.162l1.67 1.958c.405.476.502 1.139.25 1.709l-.165.375a.974.974 0 00.155 1.032.997.997 0 001.656-.232l.312-.68c.136-.296.445-.486.761-.398.091.026.186.057.282.095.69.27 2.127.084 2.052-.647a.675.675 0 00-.2-.402l-2.52-2.423a2.68 2.68 0 01-.523-3.172l.414-.796c.417-.802.408-1.762-.115-2.502a19.405 19.405 0 00-.56-.752c-.843-1.077-1.013-2.612-.04-3.576 3.14-3.11 8.802-6.355 15.662-4.248 2.002.614 4.458-.647 5.178-2.596.796-2.157 2.177-4.31 4.396-5.684 2.262-1.4 6.302-6.74 6.465-9.377.228-3.701 1.408-8.64 4.302-14.947 1.104-2.407-1.49-5.198-3.953-4.176C75.77 2.205 69.92 4.458 64.573 6.11c-1.138.352-1.935 1.377-1.96 2.557l-.183 8.996c-.008.393-.095.781-.308 1.112-1.138 1.767-4.333 5.01-10.452 7.749-1.31.586-2.828-.035-3.426-1.33l-.826-1.79c-1.06-2.565.04-5.525 6.322-6.655l.017-.003c.025-.004.04-.007.068-.017l.033-.012c.565-.203 1.4-.503 1.43-1.086.061-1.177-.167-2.505-1.224-2.907a1.529 1.529 0 00-.547-.078h-9.795c-.212 0-.424.02-.626.087-1.419.465-3.466 1.923-5.226 3.175-1.36.967-2.547 1.813-3.14 1.983a.5.5 0 01-.142.017c-.54 0-.847.572-.46.943.823.788 2.085 1.456 3.651 1.142 1.366-.274 2.94-.274 3.674.9 1.309 2.095 2.165 4.855.056 6.647-.361.307-.835.439-1.31.433-4.32-.057-12.867-1.902-18.27-9.031a2.514 2.514 0 01-.496-1.523v-8.77c0-1.227-.833-2.297-2.025-2.636A156.196 156.196 0 014.896 1.071C2.294.032-.869 3.334.221 5.894zM43.993 15.92a.823.823 0 00.827-.82.823.823 0 00-.827-.818.823.823 0 00-.827.819c0 .452.37.819.827.819z" clipRule="evenodd" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export function Navbar() {
  const pathname = usePathname();
  const { setOpenSearch } = useSearchContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`container mx-auto px-4 transition-all duration-200 ease-out ${scrolled ? 'py-2' : 'py-2'}`}>
        <nav className={`flex items-center justify-between gap-4 rounded-xl transition-all duration-200 ease-out ${
          scrolled 
            ? 'px-4 py-2.5 bg-[#18181b]/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 shadow-xl shadow-black/40' 
            : 'px-3 py-1.5 bg-transparent border border-transparent'
        }`}>
          <Link href="/" className="flex items-center gap-2.5 text-white hover:text-brand transition-colors">
            <Logo />
            <span className="font-semibold text-sm hidden sm:block">Pyrodactyl</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              href="/docs/pyrodactyl"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
                pathname?.startsWith('/docs')
                  ? 'text-brand bg-brand/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpenIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Docs</span>
            </Link>
            
            <Link
              href="https://github.com/pyrodactyl-oss/pyrodactyl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <GitHubIcon />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </div>

          <button
            onClick={() => setOpenSearch(true)}
            className="flex items-center gap-2 pl-3 pr-2 py-1.5 text-white/40 hover:text-white/60 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-lg transition-all text-sm"
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="w-4 h-4" />
            <span className="hidden md:inline text-white/40">Search...</span>
            <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] font-mono text-white/30 bg-white/[0.06] rounded border border-white/[0.06]">
              Ctrl K
            </kbd>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
