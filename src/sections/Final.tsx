export default function Final() {
    return (
        <section className="relative w-full translate-y-[-1px]">
            <img
                src="/images/decor/finalDecor/background-final.png"
                alt="backgorund final"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="relative z-10 flex flex-col items-center md:gap-[6dvw] gap-[1.7dvw] md:py-[6.25dvw] py-[5dvw]">
                {/* title */}
                <div className="flex flex-col items-center">
                    <h1 className="xl:text-[64px] text-[48px] font-lamoric text-primaryText">
                        BẠN ĐÃ SẴN SÀNG ?
                    </h1>
                    <img
                        src="src\assets\icons\line-red.svg"
                        alt="content-section-line"
                        className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
                    />
                </div>
                {/* content */}
                <div className="xl:w-[918px] w-[840px] p-[28px] bg-beige border border-secondary shadow-[8px_8px_20px_rgba(0,0,0,0.2)] flex flex-col items-center font-gilroy font-normal text-secondary leading-none text-[18px]">
                    <p>Bạn không cần phải "thử vận may" nữa.</p>
                    <br />
                    <p>Bạn không cần phải sợ hãi những gì chưa biết.</p>
                    <br />
                    <p>Bạn xứng đáng được chuẩn bị — để lần đầu trở thành trải nghiệm kết nối, không phải ám ảnh.</p>
                </div>

                {/*  */}
                <div className="hidden md:block relative w-[48.5dvw] z-10 shadow-[8px_8px_20px_rgba(0,0,0,0.2)] ">
                    <img src="/images/decor/finalDecor/final.png" alt="end journey" className="w-full" />
                    <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <div className="flex flex-col items-center gap-[0.5dvw]">
                            <p className="font-lamoric font-normal text-[2.2dvw] text-primaryText leading-none ">
                                BẮT ĐẦU HÀNH TRÌNH
                            </p>
                            <img
                                src="src\assets\icons\line-red.svg"
                                alt="content-section-line"
                                className="w-[234px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative w-[720px] md:hidden">
                    <img src="/images/decor/finalDecor/final-mobile.png" alt="end journey" className="w-full" />
                    <div className="flex flex-col items-center gap-[0.5dvw] absolute top-[12dvw] left-1/2 -translate-x-1/2 ">
                        <p className="font-lamoric font-normal text-[2.2dvw] text-primaryText leading-none ">
                            BẮT ĐẦU HÀNH TRÌNH
                        </p>
                    </div>
                </div>
            </ div>
        </section>
    )
}