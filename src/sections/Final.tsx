export default function Final() {
    return (
        <section className="w-full bg-beige">
            <div className="w-full h-full gap-[62px] flex flex-col items-center  py-[60px]">
                <h1 className="font-lamoric text-primaryText text-[4.4dvw]">
                    BẠN ĐÃ SẴN SÀNG ?
                </h1>
                <div className="w-[63.8dvw] p-[2dvw] border border-secondary
                    flex flex-col items-center 
                    font-gilroy font-normal text-secondary leading-none tracking-[0.05em] text-[1.25dvw]">
                    <p>Bạn không cần phải "thử vận may" nữa.</p>
                    <br/>
                    <p>Bạn không cần phải sợ hãi những gì chưa biết.</p>
                    <br/>
                    <p>Bạn xứng đáng được chuẩn bị — để lần đầu trở thành trải nghiệm kết nối, không phải ám ảnh.</p>    
                </div>

                <div className="relative w-[48.5dvw] z-10">
                    <img src="/images/final.png" alt="end journey" className="w-full"/>
                    <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <p className="font-lamoric font-normal text-[2.2dvw] text-secondary leading-none ">
                            BẮT ĐẦU HÀNH TRÌNH
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}