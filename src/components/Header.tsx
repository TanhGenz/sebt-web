export default function Header() {
  return (
    <header className="absolute top-0 w-full">
      <div className="mx-auto px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - dùng đường dẫn từ thư mục public (/) */}
          <a href="#top" className="text-white/90 font-semibold">
            <img
              src="/images/logo.svg"
              alt="Pera_logo"
              className="w-[120px]"
            />
          </a>

          {/* Nav - danh sách link điều hướng */}
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
