export default function Final() {
    return (
        <section className="w-full bg-beige">
            <div className="w-full h-full gap-[6dvw] flex flex-col items-center">
                <h1 className="font-lamoric text-primaryText text-[4.4dvw]">
                    BẠN ĐÃ SẴN SÀNG ?
                </h1>
                <div className="w-[63.8dvw] p-[2.3dvw] border border-secondary
                    flex flex-col items-center 
                    font-gilroy font-normal text-secondary leading-none tracking-[0.05em] text-[18px]">
                    <p>Bạn không cần phải "thử vận may" nữa.</p>
                    <br/>
                    <p>Bạn không cần phải sợ hãi những gì chưa biết.</p>
                    <br/>
                    <p>Bạn xứng đáng được chuẩn bị — để lần đầu trở thành trải nghiệm kết nối, không phải ám ảnh.</p>    
                </div>

                <div className="relative 47.5dvw">
                    <img src="/images/final.png" alt="end journey" className="w-full"/>
                </div>
            </div>
        </section>
    )
}