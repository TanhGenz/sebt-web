export default function Header() {
  return (
    <header className="absolute top-0 w-full ">
      <div className="w-full pt-2 mx-auto px-10 flex  flex-row justify-between items-center">

          <div ><img className="w-[6.1dvw]" src="/images/logo.svg" alt="logo_sebt" /></div>

          <nav className="  flex items-center gap-[102px] text-sm justify-betweeen">
          <a href="#about" className="font-gilroy text-beige font-semibold text-[1.1dvw]" > ABOUT US </a>
            <a href="#contact" className="font-gilroy text-beige font-semibold text-[1.1dvw]" >
              CONTACT US
            </a>
          </nav>
      </div> 
    </header>
  );
}


/* <div className="flex h-20 items-center justify-between">
           Logo - dùng đường dẫn từ thư mục public (/) }
          <a href="#top" className="text-white/90 font-semibold">
            <img
              src="/images/logo.svg"
              alt="Pera_logo"
              className="w-[120px]"
            />
          </a>

           Nav - danh sách link điều hướng 
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
        </div> ***/