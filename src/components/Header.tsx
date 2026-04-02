export default function Header() {
  return (
    <header className="absolute top-0 w-full ">
      <div className="w-full pt-2 mx-auto lg:px-10 px-3 flex  flex-row justify-between items-center">
        <div>
          <img
            className="lg:w-[6.1dvw] w-[50px]"
            src="/images/logo.svg"
            alt="logo_sebt"
          />
        </div>

        <nav className="flex items-center lg:gap-[102px] gap-7 text-lg justify-betweeen">
          <a
            href="#about"
            className="font-gilroy text-beige font-semibold lg:text-[1.1dvw] text-[10px]"
          >
            {" "}
            ABOUT US{" "}
          </a>
          <a
            href="#contact"
            className="font-gilroy text-beige font-semibold lg:text-[1.1dvw] text-[10px]"
          >
            CONTACT US
          </a>
        </nav>
      </div>
    </header>
  );
}
