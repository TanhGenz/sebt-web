export default function HeroHeadline() {
    return (
        <section className="w-full">
            <div className="relative w-full">
                <img src="images/decor/paper.png" alt="" className="w-full h-auto translate-y-[4px] object-contain" />
                <div className="bg-secondary flex flex-col items-center py-[7.4dvw]">
                    <div className="flex gap-[1.4dvw] text-[4.4dvw] text-beige items-center">
                        <h1 className="font-lamoric translate-y-[-20px]">SỰ NỞ RỘ</h1>
                        <h1 className="font-cinzel">&</h1>
                        <h1 className="font-lamoric translate-y-[20px]">KHÁM PHÁ</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}