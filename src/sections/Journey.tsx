import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lessonList = [
  {
    number: "01",
    title: "PHẦN 1: HIỂU MÌNH",
    subtitle: "Tâm lý & Sự sẵn sàng",
    description:
      'Không còn mơ hồ về "chuyện ấy". Bạn sẽ biết cơ thể mình hoạt động như thế nào, và tại sao điều đó quan trọng.',
  },
  {
    number: "02",
    title: "PHẦN 2: BIẾT CƠ THỂ",
    subtitle: "Sinh lý & Giải phẫu",
    description:
      "Bản đồ cơ thể nam và nữ. Sự thật về màng trinh. Tại sao đau — và cách để không đau.",
  },
  {
    number: "03",
    title: "PHẦN 3: KẾT NỐI",
    subtitle: "Giao tiếp & Đồng thuận",
    description:
      "Mở lời về intimacy. Thể hiện nhu cầu. Mô hình FRIES để cả hai đều thoải mái.",
  },
  {
    number: "04",
    title: "PHẦN 4: CHUẨN BỊ",
    subtitle: "Checklist thực tế",
    description:
      "Từ vệ sinh đến không gian. Bao cao su 101. Gel bôi trơn — loại nào, dùng thế nào.",
  },
  {
    number: "05",
    title: "PHẦN 5: BƯỚC VÀO",
    subtitle: "Lần đầu từng bước",
    description:
      'Dạo đầu → Thâm nhập → Kết nối. Tư thế phù hợp. Xử lý "không vào được".',
  },
  {
    number: "06",
    title: "PHẦN 6: AN TOÀN",
    subtitle: "Bảo vệ & Phòng ngừa",
    description:
      "Các biện pháp tránh thai. STIs. Xử lý sự cố — rách bao, quên thuốc.",
  },
  {
    number: "07",
    title: "PHẦN 7: SAU ĐÓ",
    subtitle: "Chăm sóc & Tiếp tục",
    description:
      "Vệ sinh sau quan hệ. Cảm xúc sau lần đầu. Nếu không như mong đợi — cách đối diện.",
  },
];

const NUM_SLIDE_X = 64;
const CONTENT_SLIDE_X = 64;
const ROW_STAGGER = 0.1;
const DURATION = 0.5;
const CONTENT_DELAY_AFTER_NUM = 0.06;

export default function Journey() {
  const boardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(boardRef, { once: true, amount: 0.12 });
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative w-full bg-secondary">
      {/* paper decor */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%]">
        <img src="images/decor/paper-top.svg" alt="paper-top" className="w-full h-auto object-contain" />
      </div>

      <div className="xl:gap-[68px] md:gap-[48px] gap-[18px] relative z-10 flex flex-col pt-[10px]">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-lamoric text-beige xl:text-[64px] text-[48px]">
            HÀNH TRÌNH 7 PHẦN
          </h1>
          <img
            src="src\assets\icons\line-white.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>

        {/* board layout */}
        <div
          ref={boardRef}
          className="lg:w-[908px] w-full lg:border border-0 border-white mx-auto xl:pl-[55px] md:pl-[42px] pl-[18px] lg:py-[62px] md:py-[25px] py-[18px] pr-[18px] overflow-x-hidden"
        >
          {lessonList.map((lesson, index) => {
            const base = index * ROW_STAGGER;
            return (
              <div className="flex md:gap-[100px] gap-[18px]" key={lesson.number}>
                {/* Number — slide left → right; vertical rule shows after this row’s slide ends */}
                <motion.div
                  className="md:w-[180px] w-[80px] flex-shrink-0 flex items-center leading-none relative"
                  initial={{ opacity: 0, x: -NUM_SLIDE_X }}
                  animate={
                    inView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -NUM_SLIDE_X }
                  }
                  transition={{ duration: DURATION, delay: base, ease }}
                >
                  <p className="xl:text-[128px] md:text-[110px] text-[68px] font-onebold text-beige">
                    {lesson.number}
                  </p>
                  <motion.div
                    className="pointer-events-none absolute right-0 top-0 bottom-0 w-px bg-white"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.28,
                      delay: base + DURATION,
                      ease,
                    }}
                    aria-hidden
                  />
                </motion.div>
                {/* Content — slide right → left */}
                <motion.div
                  className="md:gap-[15px] gap-[8px] flex flex-col xl:pb-[48px] pb-[36px] min-w-0 flex-1"
                  initial={{ opacity: 0, x: CONTENT_SLIDE_X }}
                  animate={
                    inView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: CONTENT_SLIDE_X }
                  }
                  transition={{
                    duration: DURATION,
                    delay: base + CONTENT_DELAY_AFTER_NUM,
                    ease,
                  }}
                >
                  <h3 className="xl:text-[36px] md:text-[32px] text-[24px] font-lamoric leading-none text-beige uppercase">
                    {lesson.title}
                  </h3>
                  <p className="xl:text-[32px] md:text-[28px] text-[20px] font-bladeRush leading-none text-beige">
                    {lesson.subtitle}
                  </p>
                  <p className="xl:text-[20px] md:text-[18px] text-[16px] font-gilroy text-beige">
                    {lesson.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
        <img src="images/decor/paper-bottom-light.svg" alt="paper-bottom" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
}
