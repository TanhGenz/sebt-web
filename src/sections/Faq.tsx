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
]

export default function Faq() {
    return (
        <section className="relative w-full bg-secondary">
            <div className="-translate-y-[90%] top-0 right-0 left-0 ">
                <img src="images/decor/paper.png" alt="paper" className="w-full h-full" />
            </div>
            {/* images layout in mobiles */}
            <div className="relative">
                <img src="images/faq-mobile.png" alt="faq mobile"
                    className="absolute translate-x-5  object-contain md:hidden"
                />
            </div>
            <div className="w-full flex flex-col items-center md:gap-[82px] gap-[50px] md:pb-[279px] pb-[110px] md:pt-[50px] pt-[10px]">
                {/*  */}
                <div className="flex flex-col items-center">
                    <h1 className="md:text-[4.4dvw] text-[34px] font-lamoric text-beige">
                        CÂU HỎI THƯỜNG GẶP
                    </h1>
                    <img
                        src="src\assets\icons\line-white.svg"
                        alt="content-section-line"
                        className="w-[28.6dvw] h-auto object-contain hidden md:block"
                    />
                </div>
                {/* faq content layouts [fixed px]*/}
                <div className=" md:w-[683px] w-[350px] flex mx-auto items-start md:gap-7 gap-0 ">
                    {/* images layouts left*/}
                    <div className="w-[223px] md:flex hidden pt-[55px]">
                        <img src="images/faq.png" alt="faq section" className="w-full h-full object-contain" />
                    </div>
                    {/* content layouts right */}
                    <div className="flex flex-col">
                        {faqList.map((item, index) => {
                            // first elements
                            const isFirst = index === 0;
                            // last elements
                            const isLast = index === faqList.length - 1;
                            // third elements 
                            const isThird = index === faqList.length - 3;

                            return (
                                <div key={index} className="md:gap-[18px] gap-[8px] relative flex">
                                    {/* LINE */}
                                    {/* hidden md:block => only displaye when > md */}
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
                                    <div className="md:max-w-[359px] w-full md:pb-[21px] pb-[12px] flex flex-col flex-end gap-2">
                                        <h3 className="md:text-[24px] text-[16px] font-gilroy font-medium text-warmBeige  leading-none  
                                            inline-block border-b border-warmBeige pb-2">
                                            {item.title}
                                        </h3>
                                        <p className="md:text-[18px] text-[16px] pt-[8px] font-gilroy font-normal leading-none text-warmBeige">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            {/*  */}
            {/* <div className="relative z-10 translate-y-[100%] bottom-1 right-0 left-0">
                    <img src="images/decor/finalDecor/paper.png" alt="paper" className="w-full object-contain" />
            </div> */}
        </section>
    )
}