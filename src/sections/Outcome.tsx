import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const titleList = [
  "Hiểu cơ thể mình",
  "Biết cách chuẩn bị",
  "Biết cách chuẩn bị",
  "Bảo vệ bản thân đúng cách",
  "Tự tin giao tiếp",
  "Có lần đầu kết nối",
];

const contentList = [
  'Không còn mơ hồ về "chuyện ấy". Bạn sẽ biết cơ thể mình hoạt động như thế nào, và tại sao điều đó quan trọng.',
  'Từ tâm lý đến thể chất, từ không gian đến "dụng cụ" — bạn sẽ có checklist cụ thể.',
  'Đây là tình huống phổ biến nhất, và khóa học có hướng dẫn từng bước để giải quyết.',
  'Tránh thai ngoài ý muốn, phòng ngừa STIs — với kiến thức thực tế, không lý thuyết suông.',
  'Có script để mở lời về những điều "khó nói", để cả hai đều thoải mái.',
  'Không phải lần đầu hoảng loạn. Mà là lần đầu trọn vẹn — dù nó có hoàn hảo hay không.',
];

const ROW_STAGGER = 0.16;
const DECOR_AFTER_TITLE = 0.06;
const BODY_AFTER_TITLE = 0.12;
const DURATION = 0.48;
const H3_FROM_RIGHT = 52;
const DECOR_FROM_LEFT = 48;
const BODY_FROM_LEFT = 36;

export default function Outcome() {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.15 });

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative w-full bg-beige">
      <div className="w-full h-full">
        <div className="flex flex-col items-center xl:gap-[50px] gap-[18px] pt-0 md:pb-[210px] pb-[55px]">
          {/* title */}
          <div className="flex flex-col items-center">
            <h1 className="xl:text-[64px] md:text-[48px] text-[32px] font-lamoric text-primaryText">
              SAU KHÓA HỌC BẠN SẼ
            </h1>
            <img
              src="src\assets\icons\line-red.svg"
              alt="content-section-line"
              className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
            />
          </div>

          {/* content */}
          <div
            ref={listRef}
            className="flex flex-col gap-3 w-full md:max-w-[884px] max-w-[400px] pr-[8px] md:pl-[53px] pl-[38px]"
          >
            {titleList.map((item, index) => {
              const base = index * ROW_STAGGER;
              return (
                <div key={index} className="flex flex-col pb-3">
                  <div className="relative w-max">
                    <motion.h3
                      className="md:text-[24px] text-[20px] md:pb-[5px] font-gilroy font-bold leading-none text-primaryText"
                      initial={{ opacity: 0, x: H3_FROM_RIGHT }}
                      animate={
                        inView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: H3_FROM_RIGHT }
                      }
                      transition={{
                        duration: DURATION,
                        delay: base,
                        ease,
                      }}
                    >
                      {item}
                    </motion.h3>
                    <motion.div
                      className="absolute bottom-[-1px] left-[-6px] right-0 md:h-[2px] h-[1px] bg-primaryText rounded-full"
                      initial={{ opacity: 0, x: -DECOR_FROM_LEFT }}
                      animate={
                        inView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -DECOR_FROM_LEFT }
                      }
                      transition={{
                        duration: DURATION,
                        delay: base + DECOR_AFTER_TITLE,
                        ease,
                      }}
                    />
                    <motion.div
                      className="absolute md:top-[10px] top-[10px] md:left-[-45px] left-[-28px] md:w-[40px] w-[22px] md:aspect-square aspect-square md:border-[2px] border-[1px] border-primaryText rounded-full"
                      initial={{ opacity: 0, x: -DECOR_FROM_LEFT }}
                      animate={
                        inView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -DECOR_FROM_LEFT }
                      }
                      transition={{
                        duration: DURATION,
                        delay: base + DECOR_AFTER_TITLE + 0.02,
                        ease,
                      }}
                    />
                  </div>
                  <motion.p
                    className="md:text-[20px] text-[16px] font-gilroy italic leading-none mt-[6px]"
                    initial={{ opacity: 0, x: -BODY_FROM_LEFT }}
                    animate={
                      inView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -BODY_FROM_LEFT }
                    }
                    transition={{
                      duration: DURATION,
                      delay: base + BODY_AFTER_TITLE,
                      ease,
                    }}
                  >
                    {contentList[index]}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-[60px] w-max left-[55%] hidden md:block">
          <img src="images/decor/lip-stick.png" alt="lip-stick" className="w-[230px] rotate-[24.69deg]" />
        </div>
      </div>
    </section>
  );
}
