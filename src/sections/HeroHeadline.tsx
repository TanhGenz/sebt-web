export default function HeroHeadline() {
    return (
        <section className="w-full bg-beige translate-y-[-1px]">
            <img src="images/decor/paper-top.svg" alt="paper-top" className="w-full h-auto translate-y-[1px] object-contain" />
            <div className="bg-secondary flex flex-col items-center md:pt-[7.4dvw] pt-[12px]">
                <div className="flex md:gap-[1.4dvw] gap-[8px] md:text-[4.4dvw] text-[32px] text-beige items-start">
                    <h1 className="font-lamoric md:translate-y-[-20px]">SỰ NỞ RỘ</h1>
                    <h1 className="font-cinzel md:text-[8.8dvw] text-[68px]">&</h1>
                    <h1 className="font-lamoric self-center max-md:pl-[10px]">KHÁM PHÁ</h1>
                </div>
            </div>
            <img src="images/decor/paper-bottom.svg" alt="paper-bottom" className="md:block hidden w-full h-auto translate-y-[-1px] object-contain bg-secondary" />
            <img src="images/decor/paper-bottom-dark.svg" alt="paper-bottom" className="md:hidden block w-full h-auto translate-y-[-1px] object-contain bg-secondary" />
        </section>
    );
}