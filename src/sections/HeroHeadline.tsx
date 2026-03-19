export default function HeroHeadline() {
    return (
        <section className="w-full bg-secondary">
            <div className="relative w-full">
                <div className="absolute -translate-y-[80%] w-full">
                    <img src="images/decor/paper.png" alt="" className="w-full"/>
                </div>
            

                <div className="flex flex-col items-center py-[7.4dvw]">
                    <div className="flex gap-[1.4dvw] text-[4.4dvw] text-beige items-center">
                        <h1 className="font-lamoric "> SỰ NỞ RỘ</h1>
                        <h1 className="font-cinzel">&</h1>
                        <h1 className="font-lamoric ">KHÁM PHÁ</h1>
                    </div>
                </div>
            </div>

            
        </section>
    );
}