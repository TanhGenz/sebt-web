export default function HeroHeadline() {
    return (
        <section className="w-full bg-beige translate-y-[-1px]">
            <img src="images/decor/paper-top.svg" alt="paper-top" className="w-full h-auto translate-y-[1px] object-contain" />
            <div className="bg-secondary flex flex-col items-center pt-[7.4dvw]">
                <div className="flex gap-[1.4dvw] text-[4.4dvw] text-beige items-start">
                    <h1 className="font-lamoric translate-y-[-20px]">SỰ NỞ RỘ</h1>
                    <h1 className="font-cinzel text-[8.8dvw]">&</h1>
                    <h1 className="font-lamoric self-center">KHÁM PHÁ</h1>
                </div>
            </div>
            <img src="images/decor/paper-bottom.svg" alt="paper-bottom" className="w-full h-auto translate-y-[-1px] object-contain bg-secondary" />
        </section>
    );
}