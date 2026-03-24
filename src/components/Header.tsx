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