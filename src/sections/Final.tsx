import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Final() {
  const boxRef = useRef<HTMLDivElement>(null);
  const boxInView = useInView(boxRef, { once: true, amount: 0.5 });
  const decorRef = useRef<HTMLDivElement>(null);
  const decorInView = useInView(decorRef, { once: true, amount: 0.4 });
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative w-full translate-y-[-1px]">
      <img
        src="images/decor/finalDecor/paper.png"
        alt="paper"
        className="relative w-full object-contain bottom-1 right-0 left-0 z-10"
      />
      <img
        src="/images/decor/finalDecor/background-final.png"
        alt="backgorund final"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative z-10 flex flex-col items-center md:gap-[6dvw] gap-[18px] md:py-[6.25dvw] py-[18px] md:px-0 px-[18px]">
        {/* title */}
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[64px] md:text-[48px] text-[36px] font-lamoric text-primaryText">
            BẠN ĐÃ SẴN SÀNG ?
          </h1>
          <img
            src="/icons/line-red.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>
        {/* content */}
        <motion.div
          ref={boxRef}
          className="xl:w-[918px] md:w-[840px] w-[calc(100%-36px)] max-md:mx-auto p-[28px] bg-beige text-center border border-secondary shadow-[8px_8px_20px_rgba(0,0,0,0.2)] flex flex-col items-center font-gilroy font-normal text-secondary leading-none text-[18px] overflow-x-hidden"
          initial={{ opacity: 0, y: 56 }}
          animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
          transition={{ duration: 0.65, ease }}
        >
          <p>Bạn không cần phải "thử vận may" nữa.</p>
          <br />
          <p>Bạn không cần phải sợ hãi những gì chưa biết.</p>
          <br />
          <p>
            Bạn xứng đáng được chuẩn bị — để lần đầu trở thành trải nghiệm kết
            nối, không phải ám ảnh.
          </p>
        </motion.div>

        {/* Decor Image and Text — slide up from bottom (desktop + mobile) */}
        <div
          ref={decorRef}
          className="w-full flex flex-col items-center overflow-x-hidden"
        >
          <motion.div
            className="hidden md:block relative w-[48.5dvw] z-10 shadow-[8px_8px_20px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: 56 }}
            animate={decorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
            transition={{ duration: 1.5, ease }}
          >
            <img
              src="/images/decor/finalDecor/final.png"
              alt="end journey"
              className="w-full"
            />
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <div className="flex flex-col items-center gap-[0.5dvw]">
                <a
                  href="https://69era.com/thanh-toan/?add-to-cart=1267"
                  target="_blank"
                  className="font-lamoric font-normal text-[2.2dvw] text-primaryText leading-none hover:opacity-80 cursor-pointer"
                >
                  BẮT ĐẦU HÀNH TRÌNH
                </a>
                <img
                  src="/icons/line-red.svg"
                  alt="content-section-line"
                  className="w-[234px] h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative w-full md:hidden"
            initial={{ opacity: 0, y: 56 }}
            animate={decorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
            transition={{ duration: 1.5, ease }}
          >
            <img
              src="/images/decor/finalDecor/final.png"
              alt="end journey"
              className="w-full h-auto"
            />
            <div className="w-max flex flex-col items-center absolute top-[41%] left-[50.5%] -translate-x-1/2">
              <a
                href="https://69era.com/thanh-toan/?add-to-cart=1267"
                target="_blank"
                className="font-lamoric font-normal text-[5dvw] text-primaryText leading-none "
              >
                BẮT ĐẦU HÀNH TRÌNH
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
