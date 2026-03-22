export default function Final() {
    return (
        <section className="relative w-full">
            <div className="w-full h-full">
                <div className=" - top-0 right-0 left-0 bg-beige">
                    <img src="images/decor/finalDecor/paper.png" alt="paper" className="w-full object-caontain" />
                </div>
                <img
                    src="/images/decor/finalDecor/background-final.png"
                    alt="backgorund final"
                    className="w-full h-full object-cover object-center"
                />

               




                <div className="absolute inset-0 z-10 flex flex-col items-center md:gap-[6dvw] gap-[1.7dvw] md:py-[6.25dvw] py-[5dvw]">
                    {/*  */}
                    <div className="flex flex-col items-center">
                        <h1 className="lg:text-[4.4dvw] text-[8.4dvw] font-lamoric text-primaryText">
                            BẠN ĐÃ SẴN SÀNG ?
                        </h1>
                        <img
                            src="src\assets\icons\line-red.svg"
                            alt="content-section-line"
                            className="w-[28.6dvw] h-auto object-contain hidden md:block"
                        />
                    </div>

                    {/*  */}
                    <div className="w-[63.8dvw] p-[2dvw] border border-secondary bg-beige
                        shadow-[8px_8px_20px_rgba(0,0,0,0.2)]
                        flex flex-col items-center 
                        font-gilroy font-normal text-secondary leading-none  text-[1.25dvw]">
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
                                    className="w-[15.6dvw] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative w-[50.5dvw] md:hidden">
                        <img src="/images/decor/finalDecor/final-mobile.png" alt="end journey" className="w-full" />
                        <div className="flex flex-col items-center gap-[0.5dvw] absolute top-[12dvw] left-1/2 -translate-x-1/2 ">
                            <p className="font-lamoric font-normal text-[2.2dvw] text-primaryText leading-none ">
                                BẮT ĐẦU HÀNH TRÌNH
                            </p>

                        </div>
                    </div>
                </ div>
            </div>
        </section>
    )
}