import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const questionItems = [
  "Bạn đang chuẩn bị cho lần đầu và muốn được trang bị đúng cách",
  "Bạn đã thử nhưng chưa thành công - đau quá, không vào được, hoặc kết thúc trong thất vọng",
  'Bạn muốn hiểu cơ thể mình thay vì chỉ "tự mò"',
  "Bạn tin rằng có một cách tốt hơn để trải nghiệm lần đầu (spoiler: có đấy!)",
  'Bạn muốn tự tin giao tiếp với người ấy về những điều "khó nói"',
  "Bạn là ba mẹ, anh chị muốn trang bị kiến thức đúng đắn cho người thân",
];

const CONTAINER_FADE_DURATION = 1;
const AFTER_CONTAINER_DELAY = 0.2;
const ITEM_STAGGER = 0.2;
const ITEM_FADE_DURATION = 0.5;
const ITEM_SLIDE_X = 56;
const BOX_QUEST_SLIDE_Y = 88;
const BOX_QUEST_DURATION = 1.5;

export default function Question() {
  const boxRef = useRef<HTMLDivElement>(null);
  const inView = useInView(boxRef, { once: true, amount: 0.5 });

  const boxQuestRef = useRef<HTMLDivElement>(null);
  const boxQuestInView = useInView(boxQuestRef, { once: true, amount: 0.35 });

  const firstItemDelay = CONTAINER_FADE_DURATION + AFTER_CONTAINER_DELAY;

  return (
    <section className=" w-full bg-secondary">
      {/* decor */}
      <div className="relative z-10 mx-auto hidden md:block">
        <div className="absolute top-[-172px] right-[min(calc(-1440px+100dvw),0px)]">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" className="w-[560px] h-auto rotate-[-152.2deg]" />
        </div>
        <div className="absolute bottom-[-948px] left-[min(calc(-1440px+100dvw),0px)]">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" className="w-[560px] rotate-[-35deg]" />
        </div>
      </div>

      {/* full layout */}
      <div className="xl:gap-[68px] md:gap-[48px] gap-[12px] flex flex-col items-center md:pt-[22px] pt-[7.6px] md:pb-[11.1dvw] pb-[80px]">
        {/* title */}
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[64px] md:text-[48px] text-[32px] font-lamoric text-beige leading-none">
            CÓ PHẢI BẠN...
          </h1>
          <img
            src="/icons/line-white.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>

        {/* layout question */}
        <motion.div
          ref={boxRef}
          className="md:w-[500px] w-[343px] relative mx-auto z-10 bg-beige"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: CONTAINER_FADE_DURATION, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {/* dots 4  */}
          <div className="absolute top-0 left-0 size-8 -translate-y-1/2 -translate-x-1/2 bg-secondary rounded-full" />
          <div className="absolute bottom-0 left-0 size-8 translate-y-1/2 -translate-x-1/2 bg-secondary rounded-full" />
          <div className="absolute top-0 right-0 size-8 -translate-y-1/2 translate-x-1/2 bg-secondary rounded-full" />
          <div className="absolute bottom-0 right-0 size-8 translate-y-1/2 translate-x-1/2 bg-secondary rounded-full" />
          {/* contents layout */}
          <div className="md:px-[65px] px-[18px] md:py-[28px] pt-[28px] flex flex-col md:gap-[14px] gap-[9px]">
            {questionItems.map((item, index) => (
              <motion.div
                key={index}
                className="pt-[14px] last:pb-[14px] border-t-2 md:last:border-b-2 border-dashed border-secondary"
                initial={{ opacity: 0, x: ITEM_SLIDE_X }}
                animate={
                  inView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: ITEM_SLIDE_X }
                }
                transition={{
                  duration: ITEM_FADE_DURATION,
                  delay: firstItemDelay + index * ITEM_STAGGER,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <div className="flex items-start gap-[14px]">
                  {/* dots and content */}
                  <div className="flex-shrink-0 w-1 aspect-square bg-secondary rounded-full translate-y-[12px]" />
                  <p className="md:text-[20px] text-[14px] font-gilroy font-medium text-secondary ">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="md:hidden block text-center text-[14px] font-gilroy font-bold text-secondary py-[12px] border-t-2 border-b-2 border-dashed border-secondary mb-[24px] mx-[18px]"
            initial={{ opacity: 0, x: ITEM_SLIDE_X }}
            animate={
              inView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: ITEM_SLIDE_X }
            }
            transition={{
              duration: ITEM_FADE_DURATION,
              delay: firstItemDelay + questionItems.length * ITEM_STAGGER,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            Nếu bạn thấy mình trong ít nhất 1 dòng trên
            <br />
            Khóa học này được thiết kế cho bạn.
          </motion.p>
        </motion.div>
        {/* box — slide up from bottom when in view */}
        <motion.div
          ref={boxQuestRef}
          className="relative mx-auto hidden md:block"
          initial={{ y: BOX_QUEST_SLIDE_Y, opacity: 0 }}
          animate={
            boxQuestInView
              ? { y: 0, opacity: 1 }
              : { y: BOX_QUEST_SLIDE_Y, opacity: 0 }
          }
          transition={{ duration: BOX_QUEST_DURATION, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <img
            src="/images/decor/box-quest.png"
            alt="box question"
            className="block w-[74.2dvw] max-w-[1068px]"
          />
          <div className="absolute inset-0 flex items-center justify-center px-[37px] py-[13px]">
            <p className="font-lamoric text-center text-[min(3.3dvw,48px)] leading-[1.35] text-[#D8C6AF]">
              NẾU BẠN THẤY MÌNH ÍT NHẤT MỘT DÒNG TRÊN
              KHOÁ HỌC NÀY DÀNH CHO BẠN
            </p>
          </div>
        </motion.div>
      </div>

      {/* decor paper */}
      <div className="relative z-10">
        <div className="absolute bottom-[-1dvw] right-0 left-0">
          <img src="images/decor/questionDecor/paper-bottom.png" alt="paper-bottom" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
