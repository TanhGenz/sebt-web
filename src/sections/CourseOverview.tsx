import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../ultils/string";

type CardTransform = {
  i: number;
  x: string | number;
  y: string | number;
  rotate: number;
};

const fadeInUp = {
  hidden: (t: CardTransform) => ({
    opacity: 0,
    y: 60,
    x: t.x,
    rotate: t.rotate,
  }),
  visible: (t: CardTransform) => ({
    opacity: 1,
    y: t.y,
    x: t.x,
    rotate: t.rotate,
    transition: { duration: 0.5, delay: t.i * 0.15 },
  }),
};

type PhotoCardProps = {
  image: string;
  title: string;
  className?: string;
  variants?: typeof fadeInUp;
  initial?: string;
  animate?: string;
  custom?: CardTransform;
};

const PhotoCard = ({
  image,
  title,
  className,
  variants,
  initial,
  animate,
  custom,
}: PhotoCardProps) => {
  const baseClass = cn(
    "w-[22.5%] flex flex-col items-center bg-white rounded-[6px] shadow-[4px_4px_4px_0px_#00000040]",
    className,
  );
  const content = (
    <>
      <div className="w-[85%] my-[7.5%]">
        <img src={image} alt="peter" />
      </div>
      <p className="text-center font-gilroy text-[1.67dvw] font-semibold uppercase text-primaryText mb-[2.5%]">
        {title}
      </p>
    </>
  );
  if (variants != null && initial != null && animate != null) {
    return (
      <motion.div
        className={baseClass}
        variants={variants}
        initial={initial}
        animate={animate}
        custom={custom}
      >
        {content}
      </motion.div>
    );
  }
  return <div className={baseClass}>{content}</div>;
};

const PhotoCardsRow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const cards: {
    image: string;
    title: string;
    className?: string;
    transform: CardTransform;
  }[] = [
      {
        image: "/images/demo-imgs.svg",
        title: "ĐAU ? KHÔNG PHẢI SỢ",
        className: "relative",
        transform: { i: 0, x: "-15%", y: "-5%", rotate: 5.5 },
      },
      {
        image: "/images/demo-imgs.svg",
        title: "PETER CHỐNG ĐỐI ?",
        transform: { i: 1, x: 0, y: 0, rotate: 0 },
      },
      {
        image: "/images/demo-imgs.svg",
        title: "CHỈ TRONG 7 PHẦN HỌC",
        className: "relative",
        transform: { i: 2, x: "15%", y: "-5%", rotate: -5.5 },
      },
    ];

  return (
    <div
      ref={ref}
      className="w-full relative translate-y-[-5%] flex justify-center"
    >
      {cards.map((card) => (
        <PhotoCard
          key={card.title}
          image={card.image}
          title={card.title}
          className={card.className}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={card.transform}
        />
      ))}
    </div>
  );
};

export default function CourseOverview() {
  const imagesDemo = [
    "/images/demo-imgs.svg",
    "/images/demo-imgs.svg",
    "/images/demo-imgs.svg",
    "/images/demo-imgs.svg",
    "/images/demo-imgs.svg",
    "/images/demo-imgs.svg",
    "/images/demo-imgs.svg",
  ];

  return (
    <section className="relative w-full bg-beige pb-[2.6dvw]">
      <div className="relative">
        {/* Main heading */}
        <div className="text-center pt-[5.76dvw]">
          <h1 className="font-qalogre text-[4.45dvw] leading-[1.4] text-primaryText">
            LẦN ĐẦU CHUẨN BỊ
            <br />
            KHÔNG CẦN LO TOAN
          </h1>
        </div>

        {/* Polaroid cards */}
        <div className="w-full">
          <img
            src="/images/decor/curved-string.png"
            alt="curved-string"
            className="w-full h-auto object-contain"
          />
          <PhotoCardsRow />
        </div>

        {/* Sub heading */}
        <div className="mt-[2dvw] text-center flex flex-col items-center">
          <h3 className="font-qalogre text-[3.9dvw] leading-none text-primaryText">
            NỘI DUNG CÁC PHẦN
          </h3>
          <img
            src="src\assets\icons\line-red.svg"
            alt="content-section-line"
            className="w-[28.6dvw] h-auto object-contain"
          />
        </div>

        {/* Content grid */}
        <div className="w-full mt-[2dvw]">
          <div className="w-[70.28dvw] flex flex-wrap justify-center gap-[1.2dvw] mx-auto">
            {imagesDemo.map((image) => (
              <div className="w-[16.67dvw] h-auto object-cover">
                <img src={image} alt="peter" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
