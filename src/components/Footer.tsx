import { motion } from "framer-motion";
const fbLinks = [
  {
    label: "SEBT - SexEdu by Trang",
    url: "https://www.facebook.com/sebt.2019",
    icon: "/icons/fb-icon.png",
  },
  {
    label: "69era.vn",
    url: "https://www.instagram.com/69era.vn/",
    icon: "/icons/fb-icon.png",
  },
  {
    label: "lmtrangers",
    url: "https://www.instagram.com/imtrangers/",
    icon: "/icons/fb-icon.png",
  },
];

const instaLinks = [
  {
    label: "Sex Edu By Trang",
    url: "https://www.instagram.com/sexedubytrangvn/",
    icon: "/icons/ins-icon.png",
  },
  {
    label: "69era.vn",
    url: "https://www.instagram.com/69era.vn/",
    icon: "/icons/ins-icon.png",
  },
  {
    label: "lmtrangers",
    url: "https://www.instagram.com/imtrangers/",
    icon: "/icons/ins-icon.png",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* background images */}
      <img
        src="/images/background-footer.png"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* content layouts */}
      <div className="relative z-10 flex flex-col items-center pt-[2.5dvw] gap-[222px]">
        {/* Menu social links layouts */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex md:flex-row flex-col md:w-[56.7dvw] w-[338px]  border backdrop-blur-xl bg-beige/10 "
        >
          {/* facebook list */}
          <div className="flex md:flex-1 flex-0 flex-col md:gap-[0.6dvw] gap-[10px] md:p-[1dvw] p-[15px] md:border-none border-b">
            {fbLinks.map((item) => (
              <div className="flex items-center md:gap-[0.6dvw] gap-[9px]">
                <img
                  src={item.icon}
                  alt=""
                  className="md:w-[3.4dvw] w-[50px] h-auto aspect-square"
                />
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  className="md:text-[1.6dvw] text-[20px] font-gilroy font-semibold  text-beige underline underline-offset-2 inline-block transition-all duration-300 ease-out
  hover:scale-105 hover:opacity-80"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <div className="border-r " />

          {/* instagram list */}
          <div className="flex md:flex-2 flex-0 md:gap-[0.6dvw] gap-[10px] md:p-[1dvw] p-[15px] flex-col">
            {instaLinks.map((item) => (
              <div className="flex items-center md:gap-[0.6dvw] gap-[9px]">
                <img
                  src={item.icon}
                  alt=""
                  className="md:w-[3.4dvw] w-[50px] h-auto aspect-square"
                />
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  className="md:text-[1.6dvw] text-[20px] font-gilroy font-semibold text-beige underline underline-offset-2 inline-block transition-all duration-300 ease-out
  hover:scale-105 hover:opacity-80"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* text */}
        <div className="font-lamoric font-normal md:text-[2.8dvw] text-[20px] text-beige items-center text-center">
          <h1>© 2026 SEBT - SexEdu by Trang</h1>
          <h1>Safe Sex is a Foundation, Not a Choice.</h1>
        </div>
      </div>
    </footer>
  );
}
