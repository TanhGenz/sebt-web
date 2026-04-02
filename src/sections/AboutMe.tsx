import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CONTAINER_DURATION = 1.5;
const AFTER_CONTAINER = 0.8;
const AVATAR_DURATION = 1.5;
const AFTER_AVATAR = 1.5;
const TEXT_BLOCK_DURATION = 1.2;
const TEXT_STAGGER = 0.4;

export default function AboutMe() {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.2 });
  const ease = [0.22, 1, 0.36, 1] as const;

  const avatarDelay = AFTER_CONTAINER;
  const textBase = AFTER_AVATAR;
  const textDelay = (i: number) => textBase + i * TEXT_STAGGER;

  return (
    <section className="relative translate-y-[-1px] w-full bg-beige">
      {/* decor paper */}
      <div className="relative z-1">
        <div className="absolute top-0 right-0 hidden md:block">
          <img
            src="images/decor/aboutDecor/about-line-right.png"
            alt="right decor"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 w-full h-full  flex flex-col items-center  sm:gap-[150px] gap-[100px]">
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[64px] sm:text-[48px] text-[38px] font-lamoric text-primaryText">
            VỀ MINH TRANG
          </h1>
          <img
            src="/icons/line-red.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>

        {/* about Layout */}
        <motion.div
          ref={cardRef}
          className="relative mx-auto sm:mb-[100px] mb-[23px] sm:w-[531px] w-[390px] sm:p-[11px] p-[8px] h-auto bg-secondary rounded-b-full shadow-[8px_8px_20px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: CONTAINER_DURATION, ease }}
        >
          {/* AVATAR — position on outer div so motion scale does not override translate */}
          <div className="absolute left-1/2 top-0 z-10 sm:w-[253px] w-[178px] sm:h-[253px] h-[178px] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="h-full w-full overflow-hidden rounded-full border-[0.5dvw] border-white bg-white"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }
              }
              transition={{
                duration: AVATAR_DURATION,
                delay: avatarDelay,
                ease,
              }}
              style={{ transformOrigin: "center center" }}
            >
              <img
                src="images/avt.png"
                alt="Minh Trang"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
          <div className="border border-white rounded-b-full">
            <div className="text-[16px] leading-[1.2] text-creamBeige font-gilroy flex flex-col sm:px-[50px] px-[10px] sm:pt-[139px] pt-[100px] pb-[109px] gap-[12px]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: TEXT_BLOCK_DURATION,
                  delay: textDelay(0),
                  ease,
                }}
              >
                Minh Trang là nhà hoạt động giới tính và khoái cảm, người sáng
                lập SexEdu by Trang (SEBT) từ năm 2019.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: TEXT_BLOCK_DURATION,
                  delay: textDelay(1),
                  ease,
                }}
              >
                Trang không phải bác sĩ. Không phải chuyên gia tâm lý. Trang là
                một người từng không có ai để hỏi về những điều "khó nói" — và
                đã dành nhiều năm tự học, nghiên cứu, để bây giờ có thể chia sẻ
                lại.
              </motion.p>
              <motion.p
                className="text-center text-[#FFFFFF]/50 font-semibold italic mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: TEXT_BLOCK_DURATION,
                  delay: textDelay(2),
                  ease,
                }}
              >
                "Nhiều bạn nói với mình: Em không
                <br />
                biết hỏi ai, em chỉ tin chị thôi."
              </motion.p>
              <br />
              <motion.p
                className="font-gilroy text-creamBeige text-[16px] font-normal "
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: TEXT_BLOCK_DURATION,
                  delay: textDelay(3),
                  ease,
                }}
              >
                Cách tiếp cận của Trang kết hợp:
              </motion.p>
              <motion.ul
                className="list-disc list-inside text-[#FFFFFF]/50 font-semibold italic mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: TEXT_BLOCK_DURATION,
                  delay: textDelay(4),
                  ease,
                }}
              >
                <li>Khoa học tình dục học</li>
                <li>Giải phẫu - sinh lý</li>
                <li>Tâm lý học</li>
                <li>Thực hành kết nối cơ thể</li>
              </motion.ul>
              <br />
              <motion.p
                className="font-gilroy text-creamBeige text-[16px] font-normal "
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: TEXT_BLOCK_DURATION,
                  delay: textDelay(5),
                  ease,
                }}
              >
                Tất cả được truyền đạt bằng ngôn ngữ dễ hiểu, không phán xét, và
                có thể áp dụng ngay.
              </motion.p>
              <motion.p
                className="text-center font-gilroy text-creamBeige text-[20px] font-normal "
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: TEXT_BLOCK_DURATION,
                  delay: textDelay(6),
                  ease,
                }}
              >
                Triết lý
              </motion.p>
              <motion.div
                className="w-max mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: TEXT_BLOCK_DURATION,
                  delay: textDelay(7),
                  ease,
                }}
              >
                <div className="border border-white px-[12px] py-[12px]">
                  <p className="font-medium leading-none">
                    Hiểu → Làm được → Kết nối → Tận hưởng
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* left decor */}
      <div className="relative z-1">
        <div className="absolute bottom-0 left-0 hidden md:block">
          <img
            src="images/decor/aboutDecor/about-line-left.png"
            alt="left decor"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
