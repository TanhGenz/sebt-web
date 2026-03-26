import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CHAR_STAGGER = 0.045;

function CharSpan({
    char,
    index,
    inView,
}: {
    char: string;
    index: number;
    inView: boolean;
}) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
                duration: 2,
                delay: index * CHAR_STAGGER,
                ease: [0.22, 1, 0.36, 1] as const,
            }}
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
}

const segments = [
    {
        text: "SỰ NỞ RỘ",
        h1Class: "font-lamoric md:translate-y-[-20px] flex",
    },
    {
        text: "&",
        h1Class: "font-cinzel md:text-[8.8dvw] text-[68px] flex",
    },
    {
        text: "KHÁM PHÁ",
        h1Class: "font-lamoric self-center max-md:pl-[10px] flex",
    },
] as const;

export default function HeroHeadline() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    let charOffset = 0;
    const rows = segments.map((seg) => {
        const chars = Array.from(seg.text);
        const start = charOffset;
        charOffset += chars.length;
        return (
            <h1 key={seg.text} className={seg.h1Class}>
                {chars.map((char, i) => (
                    <CharSpan key={`${start}-${i}`} char={char} index={start + i} inView={inView} />
                ))}
            </h1>
        );
    });

    return (
        <section className="w-full bg-beige translate-y-[-1px]">
            <img src="images/decor/paper-top.svg" alt="paper-top" className="w-full h-auto translate-y-[1px] object-contain" />
            <div className="bg-secondary flex flex-col items-center md:pt-[7.4dvw] pt-[12px]">
                <div
                    ref={ref}
                    className="flex md:gap-[1.4dvw] gap-[8px] md:text-[4.4dvw] text-[32px] text-beige items-start"
                >
                    {rows}
                </div>
            </div>
            <img src="images/decor/paper-bottom.svg" alt="paper-bottom" className="md:block hidden w-full h-auto translate-y-[-1px] object-contain bg-secondary" />
            <img src="images/decor/paper-bottom-dark.svg" alt="paper-bottom" className="md:hidden block w-full h-auto translate-y-[-1px] object-contain bg-secondary" />
        </section>
    );
}
