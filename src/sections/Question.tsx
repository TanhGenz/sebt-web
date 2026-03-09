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
            <div className="container ">
                <div className="flex items-center flex-col pt-8">
                    <div className="mb-10 text-center">
                        <p className="font-lamoric text-[64px] leading-none text-beige">
                            CÓ PHẢI BẠN...
                        </p>
                    </div>

                    <div className="w-full max-w-[760px] overflow-hidden rounded-[20px] bg-beige px-8 py-6">
                        <div className="border-t border-dotted border-primaryText/60">
                            {questionItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-b border-dotted border-primaryText/60 py-5"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="mt-[6px] text-[14px] leading-none text-primaryText">
                                            •
                                        </span>
                                        <p className="font-gilroy text-[20px] leading-[1.45] text-primaryText">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-b border-dotted border-primaryText/60 py-6">
                            <p className="text-center font-gilroy text-[28px] font-bold leading-[1.4] text-primaryText">
                                Nếu bạn thấy mình trong ít nhất 1 dòng trên
                            </p>
                            <p className="mt-3 text-center font-gilroy text-[28px] font-bold leading-[1.4] text-primaryText">
                                Khóa học này được thiết kế cho bạn.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 w-full rounded-[14px] border-[3px] border-lightBeige py-6 px-6 text-center">
                        <p className="font-lamoric text-[36px] leading-[1.2] text-lightBeige">
                            NẾU BẠN THẤY MÌNH ÍT NHẤT MỘT DÒNG TRÊN
                        </p>

                        <p className="mt-2 font-lamoric text-[36px] leading-[1.2] text-lightBeige">
                            KHÓA HỌC NÀY DÀNH CHO BẠN
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}