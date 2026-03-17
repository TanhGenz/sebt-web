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
            <div className="w-full h-full flex flex-col items-center">
                <h1 className="font-lamoric text-beige text-[4.4dvw]">
                    CÂU HỎI THƯỜNG GẶP
                </h1>

                {/* layout faq */}
<<<<<<< HEAD
                <div className="w-full grid grid-cols-[500px_1fr] gap-6 pl-[350px] pr-[200px] ">
=======
                <div className="w-max flex gap-6 pt-[120px] pb-[279px] mx-auto">
>>>>>>> 6c8e5a2c534b34a06eec3d761bb44c1a05cedaee

                    {/* FAQ IMAGE */}
                    <div className="flex items-start justify-start pt-[76px]">
                        <img
                            src="/images/faq.png"
                            alt="faq"
                            className="h-auto w-217px object-contain"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col">
                        {faqList.map((item, index) => {
                            const isFirst = index === 0;
                            const isLast = index === faqList.length - 1;
                            const isNextLast = index === faqList.length - 2;

                            return (
                                <div key={index} className="relative flex gap-[18px]">
                                    {/* LINE */}
                                    <div className={cn("absolute bottom-0 left-[25px] w-[1px] -translate-x-1/2 bg-beige", isFirst ? "top-[16px]" : "top-0", isLast && "hidden")} />
                                    <div className={cn("absolute top-0 left-[25px] w-[1px] h-[10px] -translate-x-1/2 bg-beige", isLast ? "block" : "hidden")} />

                                    {/* STAR */}
                                    <div className={cn("flex-shrink-0 flex items-start", isFirst && "pt-[16px]")}>
                                        <img
                                            src="src/assets/icons/star.svg"
                                            alt="star"
                                            className="w-[50px] h-[70px] object-contain"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div className={cn("max-w-[359px]", (isFirst || isLast) ? "pt-0" : "pt-[20px]", isNextLast ? "pb-[48px]" : "pb-[28px]")}>
                                        <h3 className="font-gilroy font-medium text-beige text-[24px] leading-none tracking-[0.05em] inline-block border-b border-beige pb-2">
                                            {item.title}
                                        </h3>
                                        <p className="pt-[10px] font-gilroy text-[18px] leading-none text-beige/85">
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