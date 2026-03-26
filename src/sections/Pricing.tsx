const itemsDesktop = [
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "VIDEO", desc: "Toàn bộ 7 phần học với video chia nhỏ, dễ theo dõi" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Tài liệu", desc: "Tài liệu bổ trợ (PDF, slide)" },
  { type: "text", title: "Bài tập", desc: "Bài tập thực hành áp dụng ngay" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Nhóm hỗ trợ", desc: "Nhóm hỗ trợ học tập riêng (có thể dùng nickname)" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Workshop", desc: "Workshop Zoom hàng tháng với Trang" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Q&A", desc: "Hỏi đáp & phản hồi trong thời gian học" },
];

const itemsMobile = [
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Bài tập", desc: "Bài tập thực hành áp dụng ngay" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Workshop", desc: "Workshop Zoom hàng tháng với Trang" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "VIDEO", desc: "Toàn bộ 7 phần học với video chia nhỏ, dễ theo dõi" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Nhóm hỗ trợ", desc: "Nhóm hỗ trợ học tập riêng (có thể dùng nickname)" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Q&A", desc: "Hỏi đáp & phản hồi trong thời gian học" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Tài liệu", desc: "Tài liệu bổ trợ (PDF, slide)" },
];

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const MOBILE_VOUCHER_EASE = [0.22, 1, 0.36, 1] as const;

/** Each mobile ticket slides up when that card scrolls into view */
function MobileVoucherInView({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.28 });
  return (
    <motion.div
      ref={ref}
      className="w-full"
      initial={{ opacity: 0, y: 72 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 72 }}
      transition={{ duration: 1.5, ease: MOBILE_VOUCHER_EASE }}
    >
      {children}
    </motion.div>
  );
}

// % size width screen
export default function Pricing() {
  const boardRef = useRef<HTMLDivElement>(null);
  const boardInView = useInView(boardRef, { once: true, amount: 0.4 });
  const ticketRef = useRef<HTMLDivElement>(null);
  const ticketInView = useInView(ticketRef, { once: true, amount: 0.8 });
  const smallTicketsRef = useRef<HTMLDivElement>(null);
  const smallTicketsInView = useInView(smallTicketsRef, { once: true, amount: 0.8 });
  const ease = [0.22, 1, 0.36, 1] as const;
  const smallTicketSlide = 64;

  return (
    <section className="w-full bg-beige relative translate-y-[-1px]">
      <div className="flex flex-col items-center pb-[4vw]">
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[64px] sm:text-[48px] text-[36px] font-lamoric text-primaryText">
            QUYỀN LỢI & BẢNG GIÁ
          </h1>
          <img
            src="src\assets\icons\line-red.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>
        {/* board / 4  ele — slide up from bottom when in view */}
        <motion.div
          ref={boardRef}
          className="lg:w-[71.5dvw] w-full lg:pt-[2.2dvw] pt-[18px] lg:px-0 px-[18px] overflow-x-hidden"
          initial={{ opacity: 0, y: 72 }}
          animate={
            boardInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 72 }
          }
          transition={{ duration: 1.5, ease }}
        >
          {/* desktop */}
          <div className="lg:grid hidden grid-cols-4">
            {itemsDesktop.map((item, i) => (
              <div key={i} className="border border-red-900 aspect-square">
                {item.type === "image" ? (
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt="image item"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50" />
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-[1.2dvw] text-center">
                    <h3 className="font-gilroy font-bold  text-[1.4dvw] text-secondary">{item.title}</h3>
                    <p className="font-gilroy font-normal text-[1.4dvw] text-secondary pt-[0.4dvw]">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* mobile */}
          <div className="lg:hidden grid grid-cols-3">
            {itemsMobile.map((item, i) => (
              <div key={i} className="border border-red-900 aspect-square">
                {item.type === "image" ? (
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt="image item"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50" />
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-[1.2dvw] text-center">
                    <h3 className="font-gilroy font-bold text-[16px] text-secondary">{item.title}</h3>
                    <p className="font-gilroy font-normal text-[14px] text-secondary pt-[8px]">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        {/* Desktop */}
        {/* big voucher ele — slide up from bottom (outer keeps translate-x) */}
        <div className="lg:block hidden w-[76.5dvw] translate-x-[2.5%] mt-[5.2dvw]">
          <motion.div
            ref={ticketRef}
            className="relative w-full overflow-x-hidden"
            initial={{ opacity: 0, y: 72 }}
            animate={
              ticketInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 72 }
            }
            transition={{ duration: 1.5, ease }}
          >
            <img src="images/pricing/ticket.png" className="w-full h-auto  object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[2.3%] pl-[2.2%] pr-[16.5%] gap-[1dvw]">
              <div className="font-morgan font-normal text-[3.3dvw] text-primaryText leading-none  text-center">
                <h3 >FOUNDING CIRCLE </h3>
                <h3>CHỈ 50 HỌC VIÊN ĐẦU</h3>
              </div>
              <p className="font-gilroy font-medium text-[2dvw] text-secondary leading-none ">Only for you</p>
              <p className="font-gilroy font-normal text-[2dvw] text-[#C18989] leading-none ">+Tặng 1 Love Box tri ân (chỉ dành cho founding members)</p>
              <div className="relative inline-block">
                <h2 className="font-lamoric text-[5.3vw] text-[#767676] font-normal leading-none ">
                  2.199.000đ
                </h2>
                <div className="absolute left-0 top-1/2 w-full h-[2%] bg-black rotate-[7deg]" />
              </div>
              <h1 className=" font-lamoric text-[6.67dvw] text-secondary font-normal leading-none ">1.299.000đ</h1>
            </div>
          </motion.div>
        </div>

        {/* 2 ticket small — first L→R, second R→L */}
        <div
          ref={smallTicketsRef}
          className="w-full lg:flex hidden justify-center translate-x-[2%] gap-[7.4dvw] mt-[3dvw] overflow-x-hidden"
        >
          <motion.div
            className="relative w-[30.8dvw]"
            initial={{ opacity: 0, x: -smallTicketSlide }}
            animate={
              smallTicketsInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -smallTicketSlide }
            }
            transition={{ duration: 1.5, ease }}
          >
            <img src="/images/pricing/ticket-small.png" className="w-full h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[5.5%] pl-[4.4%] pr-[21.5%] gap-[1.6dvw]">
              <h3 className="font-morgan font-normal text-[2.3dvw] text-primaryText leading-none">CORE VERSION</h3>
              <p className="font-gilroy font-normal text-[1.15dvw] text-secondary leading-none">HỌC ĐỦ, DÙNG NGAY</p>
              <h2 className="font-lamoric text-[2.3vw] text-secondary font-normal leading-none translate-y-[-10%]">
                1.399.000đ
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="relative w-[38.8dvw]"
            initial={{ opacity: 0, x: smallTicketSlide }}
            animate={
              smallTicketsInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: smallTicketSlide }
            }
            transition={{ duration: 1.5, delay: 0.06, ease }}
          >
            <img src="/images/pricing/ticket-small.png" className="w-full  h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[8%] pl-[5%] pr-[25%] gap-[1dvw]">
              <h3 className="font-morgan font-normal text-[1.8dvw] text-primaryText leading-none ">LIFETIME PEACE-OF-MIND</h3>
              <p className="font-gilroy font-normal text-[1.15dvw] text-secondary leading-none ">ĐƯỢC CHỌN NHIỀU NHẤT</p>
              <p className="font-gilroy font-normal text-[1.15dvw] text-[#C18989] leading-none ">Cập nhật trọn đời</p>
              <h2 className="font-lamoric text-[2.3vw] text-secondary font-normal leading-none ">
                1.699.000đ
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Mobile — each voucher slides up when it enters the viewport */}
      <div className="w-full lg:hidden flex flex-col items-center gap-[8px] overflow-hidden">
        {/* First voucher */}
        <MobileVoucherInView>
          <div className="relative w-[101%] translate-x-[2.5%]">
            <img src="images/pricing/ticket.png" className="w-full h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[2.3%] pl-[2.2%] pr-[16.5%] gap-[1dvw]">
              <div className="font-morgan font-normal text-[5dvw] leading-[1.2] text-primaryText text-center">
                <h3 >FOUNDING CIRCLE </h3>
                <h3>CHỈ 50 HỌC VIÊN ĐẦU</h3>
              </div>
              <p className="font-gilroy font-medium text-[2.6dvw] text-secondary leading-none mt-[.5dvw]">Only for you</p>
              <p className="font-gilroy font-normal text-[2.6dvw] text-[#C18989] leading-none mt-[.5dvw]">+Tặng 1 Love Box tri ân (chỉ dành cho founding members)</p>
              <div className="relative inline-block">
                <h2 className="font-lamoric text-[6dvw] text-[#767676] font-normal leading-none ">
                  2.199.000đ
                </h2>
                <div className="absolute left-0 top-1/2 w-full h-[2%] bg-black rotate-[7deg]" />
              </div>
              <h1 className=" font-lamoric text-[8dvw] text-secondary font-normal leading-none ">1.299.000đ</h1>
            </div>
          </div>
        </MobileVoucherInView>
        {/* Second voucher */}
        <MobileVoucherInView>
          <div className="relative w-[101%] translate-x-[2.5%]">
            <img src="images/pricing/ticket.png" className="w-full h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[8%] pl-[4.4%] pr-[21.5%] gap-[1.6dvw]">
              <h3 className="font-morgan font-normal text-[7dvw] text-primaryText leading-none">CORE VERSION</h3>
              <p className="font-gilroy font-normal text-[3.5dvw] text-secondary leading-none mt-[3dvw]">HỌC ĐỦ, DÙNG NGAY</p>
              <h2 className="font-lamoric text-[7vw] text-secondary font-normal leading-none translate-y-[-10%] mt-[3dvw]">
                1.399.000đ
              </h2>
            </div>
          </div>
        </MobileVoucherInView>
        {/* Third voucher */}
        <MobileVoucherInView>
          <div className="relative w-[101%] translate-x-[2.5%]">
            <img src="images/pricing/ticket.png" className="w-full h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[7%] pl-[4.4%] pr-[21.5%] gap-[1.6dvw]">
              <h3 className="font-morgan font-normal text-[7dvw] text-primaryText leading-none">LIFETIME PEACE-OF-MIND</h3>
              <p className="font-gilroy font-normal text-[3.5dvw] text-secondary leading-none mt-[3dvw]">ĐƯỢC CHỌN NHIỀU NHẤT</p>
              <p className="font-gilroy font-normal text-[3vw] text-[#C18989] leading-none mt-[1dvw]">Cập nhật trọn đời</p>
              <h2 className="font-lamoric text-[7vw] text-secondary font-normal leading-none translate-y-[-10%] mt-[1dvw]">
                1.699.000đ
              </h2>
            </div>
          </div>
        </MobileVoucherInView>
      </div>
      <img src="images/decor/paper-top.svg" alt="paper" className="w-full h-auto translate-y-[1px]" />
    </section>
  );
}