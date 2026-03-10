const questionItems = [
    "Bạn đang chuẩn bị cho lần đầu và muốn được trang bị đúng cách",
    "Bạn đã thử nhưng chưa thành công — đau quá, không vào được, hoặc kết thúc trong thất vọng",
    'Bạn muốn hiểu cơ thể mình thay vì chỉ "tự mò"',
    "Bạn tin rằng có một cách tốt hơn để trải nghiệm lần đầu (spoiler: có đấy!)",
    'Bạn muốn tự tin giao tiếp với người ấy về những điều "khó nói"',
    "Bạn là ba mẹ, anh chị muốn trang bị kiến thức đúng đắn cho người thân",
];

export default function Question() {
    return (
        <section className=" w-full  bg-secondary">
            <div className="w-full h-auto flex flex-col items-center gap-5 pt-5">
                <h2 className="font-lamoric text-[4.4dvw] text-beige leading-none"> CÓ PHẢI BẠN... </h2>

                <div className="w-full ">
                    <div className="w-[46dvw] h-auto  bg-beige relative z-10 mx-auto ">
                        <div className="absolute top-0 left-0 size-4 bg-secondary rounded-full"></div>
                        <div className="absolute bottom-0 left-0 size-4 bg-secondary rounded-full"></div>
                        <div className="absolute top-0 right-0 size-4 bg-secondary rounded-full"></div>
                        <div className="absolute  bottom-0 right-0 size-4 bg-secondary rounded-full"></div>

                        <div className="p-[1dvw]">
                            <div className="border-t border-dotted border-primaryText/60">
                                {questionItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-dotted border-primaryText/60 py-5"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-[1.4dvw] leading-none text-primaryText">
                                                •
                                            </span>
                                            <p className="font-gilroy text-[1.4dvw] leading-none text-primaryText">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div className="border-b border-dotted border-primaryText/60 py-6">
                                    <p className="text-center font-gilroy text-[2dvw] font-bold leading-none text-primaryText">
                                        Nếu bạn thấy mình trong ít nhất 1 dòng trên
                                    </p>
                                    <p className="mt-3 text-center font-gilroy text-[2dvw] font-bold leading-none text-primaryText">
                                        Khóa học này được thiết kế cho bạn.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className=" w-[74.1dvw] rounded-[14px] border-[3px] border-lightBeige py-6 px-6 text-center">
                    <p className="font-lamoric text-[3.3dvw] leading-[1.2] text-lightBeige">
                        NẾU BẠN THẤY MÌNH ÍT NHẤT MỘT DÒNG TRÊN
                    </p>

                    <p className="mt-2 font-lamoric text-[3.3dvw] leading-none text-lightBeige">
                        KHÓA HỌC NÀY DÀNH CHO BẠN
                    </p>
                </div>
                <div className="w-full h-[100px] bg-secondary relative z-10"></div>
            </div>
        </section>
    )
}