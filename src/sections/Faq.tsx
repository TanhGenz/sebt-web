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
        <section className="w-full bg-secondary">
            <div className="w-full flex flex-col items-center gap-[82px] pb-[279px]">
                <h1 className="font-lamoric text-beige text-[4.4dvw]">
                    CÂU HỎI THƯỜNG GẶP
                </h1>
                
                {/* faq content layouts [fixed px]*/}
                <div className="w-[683px] flex mx-auto items-start">


                    {/* images layouts left*/}
                    <div className="w-[223px] flex pt-[80px] ">
                        <img src="images/faq.png" alt="faq section" className="w-full h-full object-contain "/>
                    </div>
                    
                    {/* content layouts right */}
                    <div className="flex flex-col">
                        {faqList.map((item, index) => {
                            
                            // first elements
                            const isFirst = index === 0;
                            
                            // last elements
                            const isLast = index === faqList.length - 1;
                            
                            // foruth elements
                            const isNextLast = index === faqList.length - 2;
                        
                            // third elements 
                            const isThird = index === faqList.length - 3;

                            return (
                                <div key = {index} className="relative flex gap-[18px]">
                                    {/* LINE */}
                                    <div className={cn("absolute bottom-0 left-[25px] w-[1px] -translate-x-1/2 bg-beige", isFirst ? "top-[16px]" : "top-0", isLast && "h-[30px]")} />
                                    <div className={cn("absolute top-0 left-[25px] w-[1px] h-[10px] -translate-x-1/2 bg-beige", isLast ? "block" : "hidden")} />

                                    {/*Star*/}
                                    <div className={cn("flex-shrink-0 flex items-start", 
                                        isFirst && "pt-[16px]", 
                                        isLast && "pt-[25px]", 
                                        isNextLast && "pt-[15px]",
                                        isThird && "pt-[15px]"
                                        )}>
                                        <img src="src/assets/icons/star.svg"
                                            alt="star"
                                            className="w-[50px] h-[70px] object-contain" 
                                        />
                                    </div>

                                    {/* contents TEXT */}
                                    <div className=" max-w-[359px] flex flex-col flex-end pt-[21px] gap-2">
                                        <h3 className="font-gilroy font-medium text-warmBeige text-[24px] leading-none tracking-[0.05em] 
                                            inline-block border-b border-warmBeige pb-2">
                                                {item.title}
                                        </h3>
                                        <p className="pt-[8px] font-gilroy font-normal text-[18px] tracking-[0.05em] leading-none text-warmBeige">
                                                {item.desc}
                                        </p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>


            </div>
        </section>
    )
}