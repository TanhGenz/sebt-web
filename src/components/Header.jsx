export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[1440px] px-0">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#top" className="text-white/90 font-semibold">
            {/* thay bằng img/svg logo của bạn */}
            <img
              src="src/assets/images/logo.svg"
              alt="Pera_logo"
              className="w-[120px]"
            />
          </a>

          {/* Nav */}
          <nav className="flex items-center gap-10 text-sm tracking-wide text-white/90">
            <a
              href="#about"
              className="font-gilroy font-semibold hover:text-white transition"
            >
              ABOUT US
            </a>
            <a
              href="#contact"
              className="font-gilroy font-semibold hover:text-white transition"
            >
              CONTACT US
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
