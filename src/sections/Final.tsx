export default function Final() {
    return (
        <section className="relative w-full md:bg-none bg-beige">
            <img src="images/decor/finalDecor/paper.png" alt="paper" className="relative w-full object-contain bottom-0 right-0 left-0 z-10" />
            <div className="absolute inset-0 hidden md:block">
                <img
                src="/images/decor/finalDecor/background-final.png"
                alt="background final"
                className="w-full h-full object-cover"
                />
            </div>
             
            
            
            {/* content layout section */} 
            <div className="relative inset-0 z-10 flex flex-col items-center md:gap-[6dvw] gap-[22px] md:py-[6.25dvw] py-[26px]">
                {/* TITLE */}
                <div className="flex flex-col items-center">
                    <h1 className="md:text-[4.4dvw] text-[34px] font-lamoric text-primaryText">
                        BẠN ĐÃ SẴN SÀNG ?
                    </h1>
                    <img
                        src="src\assets\icons\line-red.svg"
                        alt="content-section-line"
                        className="w-[28.6dvw] h-auto object-contain hidden md:block"
                    />
                </div>
                {/* Box text */}
                <div className="md:w-[63.8dvw] w-[335px] md:px-[2.3dvw] px-[16px] md:py-[2.7dvw] py-[8px] md:gap-[1.7dvw] gap-[23px] flex flex-col items-center text-center border border-secondary bg-beige shadow-[8px_8px_20px_rgba(0,0,0,0.2)] font-gilroy font-normal text-secondary leading-none md:text-[1.25dvw] text-[16px]">
                    <p>Bạn không cần phải "thử vận may" nữa.</p>
                    <p>Bạn không cần phải sợ hãi những gì chưa biết.</p>
                    <p>Bạn xứng đáng được chuẩn bị — để lần đầu trở thành trải nghiệm kết nối, không phải ám ảnh.</p>
                </div>

                {/* image text Desktop*/}
                <div className="md:block hidden w-[47.5dvw] shadow-[8px_8px_20px_rgba(0,0,0,0.2)]">
                    <img 
                        src="/images/decor/finalDecor/final.png" 
                        alt="end journey" 
                        className="w-full h-auto object-contain" 
                    />   
                    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
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

                 {/* image text Mobile*/}
                 <div className="md:hidden block w-[375px]  shadow-[8px_8px_20px_rgba(0,0,0,0.2)] ">
                    <img 
                        src="/images/decor/finalDecor/final-mobile.png" 
                        alt="end journey" 
                        className="w-full h-full object-contain" 
                    />
                    <div className="absolute top-[55%] left-1/2 -translate-x-1/2 ">
                        <p className="font-lamoric font-normal text-[17.3px] text-primaryText leading-none ">
                            BẮT ĐẦU HÀNH TRÌNH
                        </p>
                    </div>     

                </div>
            </div>
        </section>
    )
}