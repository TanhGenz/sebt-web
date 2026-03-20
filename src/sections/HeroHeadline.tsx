export default function HeroHeadline() {
    return (
        <section className="w-full">
            <div className="relative w-full bg-beige">
                <div className=" top-0 w-full left-0 right-0 ">
                    <img src="images/decor/heroHeadline.png" alt="" className="w-full object-contain" />
                </div>


                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-[1.4dvw] text-[4.4dvw] text-beige ">
                        <h1 className="font-lamoric">SỰ NỞ RỘ</h1>
                        <h1 className="font-cinzel">&</h1>
                        <h1 className="font-lamoric">KHÁM PHÁ</h1>
                    </div>
                </div>
            </div>


        </section>
    );
}