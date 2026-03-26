import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../ultils/string";

const faqList = [
    {
        title: "Mình chưa có kinh nghiệm gì, có học được không?",
        desc:
            "Hoàn toàn được! Thực ra khóa học được thiết kế đặc biệt cho những bạn như bạn. Mình sẽ đi từ những điều cơ bản nhất. Bạn không cần biết trước bất cứ điều gì.",
    },
    {
        title: "Có thể học ẩn danh không?",
        desc: "Hoàn toàn có thể! Nhóm hỗ trợ cho phép dùng nickname. Mình tôn trọng sự riêng tư của bạn",
    },
    {
        title: "Đây là lý thuyết hay kỹ năng thực tế?",
        desc: 'Kỹ năng thực tế 100%. Không chỉ "tại sao" mà còn "làm thế nào" — với hướng dẫn từng bước và bài tập áp dụng ngay',
    },
    {
        title: "Khóa học có dành cho nam không?",
        desc: "Có! Dù bạn là nam hay nữ, nội dung đều phù hợp. Vì để lần đầu suôn sẻ, cả hai đều cần được chuẩn bị.",
    },
    {
        title: "Đã thử mấy lần nhưng không vào được, khóa học có giúp được không?",
        desc: "Đây là một trong những tình huống phổ biến nhất mình gặp. Khóa học có một phần riêng hướng dẫn xử lý — từ nguyên nhân đến giải pháp từng bước.",
    }
];

const IMG_DURATION = 0.8;
const GAP_AFTER_IMAGE = 0.1;
const ITEM_STAGGER = 0.25;
const ITEM_DURATION = 0.8;
const ease = [0.22, 1, 0.36, 1] as const;

export default function Faq() {
    const blockRef = useRef<HTMLDivElement>(null);
    const inView = useInView(blockRef, { once: true, amount: 0.15 });
    const [isMd, setIsMd] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        setIsMd(mq.matches);
        const onChange = () => setIsMd(mq.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    const firstItemDelay = isMd ? IMG_DURATION + GAP_AFTER_IMAGE : 0.08;

    return (
        <section className="relative translate-y-[-1px] w-full bg-secondary flex flex-col">
            {/* images layout in mobiles */}
            <div className="relative w-full flex flex-col items-center xl:gap-[82px] md:gap-[50px] gap-[24px] md:pb-[260px] pb-[110px] md:pt-[34px] pt-[10px]">
                <img src="images/faq-mobile.png" alt="faq mobile"
                    className="w-auto h-[90%] absolute top-[5%] left-1/2 -translate-x-1/2 object-contain md:hidden"
                />
                {/* title */}
                <div className="flex flex-col items-center">
                    <h1 className="xl:text-[64px] md:text-[48px] text-[36px] font-lamoric text-beige">
                        CÂU HỎI THƯỜNG GẶP
                    </h1>
                    <img
                        src="src\assets\icons\line-white.svg"
                        alt="content-section-line"
                        className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
                    />
                </div>
                {/* faq content layouts [fixed px]*/}
                <div ref={blockRef} className="md:w-[683px] w-[350px] flex mx-auto items-start md:gap-7 gap-0">
                    {/* images layouts left — desktop: animates in first */}
                    <motion.div
                        className="w-[223px] md:flex hidden pt-[55px]"
                        initial={{ opacity: 0, y: 28 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                        transition={{ duration: IMG_DURATION, ease }}
                    >
                        <img src="images/faq.png" alt="faq section" className="w-full h-full object-contain" />
                    </motion.div>
                    {/* content layouts right */}
                    <div className="flex flex-col">
                        {faqList.map((item, index) => {
                            const isFirst = index === 0;
                            const isLast = index === faqList.length - 1;
                            const isThird = index === faqList.length - 3;

                            return (
                                <motion.div
                                    key={index}
                                    className="md:gap-[18px] gap-[8px] relative flex"
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                                    transition={{
                                        duration: ITEM_DURATION,
                                        delay: firstItemDelay + index * ITEM_STAGGER,
                                        ease,
                                    }}
                                >
                                    {/* LINE */}
                                    <div className={cn("absolute bottom-0 left-[25px] w-[1px] -translate-x-1/2 bg-beige hidden md:block", isFirst ? "top-[16px]" : "top-0", isLast && "h-[30px]")} />
                                    <div className={cn("absolute top-0 left-[25px] w-[1px] h-[10px] -translate-x-1/2 bg-beige hidden md:block", isLast ? "block" : "hidden")} />

                                    {/*Star*/}
                                    <div className={cn("flex-shrink-0 flex items-start",
                                        isLast && "pt-[2px]",
                                        isThird && "pb-[15px]"
                                    )}>
                                        <img src="src/assets/icons/star.svg"
                                            alt="star"
                                            className="md:w-[50px] w-[14px] md:h-[70px] h-[19.5px] object-contain"
                                        />
                                    </div>

                                    {/* contents TEXT */}
                                    <div className=" 
                                    md:max-w-[359px] w-full
                                    md:pb-[21px] pb-[12px] 
                                    flex flex-col flex-end gap-2">
                                        <h3 className="md:text-[24px] text-[16px] font-gilroy font-medium text-warmBeige  leading-none  
                                            inline-block border-b border-warmBeige pb-2">
                                            {item.title}
                                        </h3>
                                        <p className="md:text-[18px] text-[16px] pt-[8px] font-gilroy font-normal leading-none text-warmBeige">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
