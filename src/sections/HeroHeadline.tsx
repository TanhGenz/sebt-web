export default function HeroHeadline() {
    return (
        <section className="w-full">
            <div className="relative w-full bg-beige">
                <img src="images/decor/headline-paper.png" alt="hero headline" className="w-full h-auto top-0 object-contain" />
                <div className="absolute top-[35%] translate-x-1/2 z-10  flex gap-[1.4dvw]  text-beige">
                    <div className="">
                        <h1 className="font-lamoric text-[4.4dvw]">SỰ NỞ RỘ</h1>
                    </div>
                    <div>
                        <h1 className="font-cinzel text-[8.8dvw]">&</h1>
                    </div>
                    <div className="pt-[3.3dvw]">
                        <h1 className="font-lamoric text-[4.4dvw]">KHÁM PHÁ</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}