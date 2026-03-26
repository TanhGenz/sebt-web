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
    transition: { duration: 0.6, delay: t.i * 0.25 },
  }),
};

const slideFromRight = {
  hidden: { opacity: 0, x: 72 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.2 },
  }),
};

const slideFromBottom = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
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


const ContentGridImages = ({ images }: { images: string[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="w-[70.28dvw] flex flex-wrap justify-center gap-[1.2dvw] mx-auto"
    >
      {images.map((image, index) => (
        <motion.div
          key={`${image}-${index}`}
          className="w-[16.67dvw] overflow-hidden"
          variants={slideFromRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={index}
        >
          <img src={image} alt="peter" className="w-full h-auto object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

const MobilePolaroidCard = ({
  card,
}: {
  card: (typeof cards)[number];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-[362px] px-[24px] pt-[24px] pb-[17px] flex flex-col items-center gap-[26px] bg-white rounded-[6px] shadow-[4px_4px_4px_0px_#00000040]"
      variants={slideFromBottom}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <img src={card.image} alt="peter" className="w-full h-auto object-contain" />
      <p className="text-center font-gilroy text-[26px] font-semibold uppercase text-primaryText">
        {card.title}
      </p>
    </motion.div>
  );
};

const MobilePolaroidCards = () => (
  <div className="w-full max-w-[400px] mx-auto md:hidden flex flex-col items-center gap-[24px] pt-[24px] px-[18px]">
    {cards.map((card) => (
      <MobilePolaroidCard key={card.title} card={card} />
    ))}
  </div>
);

const PhotoCardsRow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 1 });

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
    <section className="relative w-full bg-beige md:pb-[2.6dvw] pb-[24px] md:pt-0 pt-[30px]">
      <div className="relative">
        {/* Main heading */}
        <div className="text-center md:pt-[5.76dvw] pt-[14px] md:pb-0 pb-[6px] md:border-none border-t border-b border-primaryText">
          <h1 className="font-qalogre xl:text-[64px] md:text-[48px] text-[32px] md:leading-[1.4] leading-[1.2] text-center text-primaryText">
            LẦN ĐẦU CHUẨN BỊ
            <br />
            KHÔNG CẦN LO TOAN
          </h1>
        </div>

        {/* Polaroid cards for desktop */}
        <div className="w-full md:block hidden">
          <img
            src="/images/decor/curved-string.png"
            alt="curved-string"
            className="w-full h-auto object-contain"
          />
          <PhotoCardsRow />
        </div>
        {/* Polaroid cards for mobile */}
        <MobilePolaroidCards />

        {/* Sub heading */}
        <div className="mt-[2dvw] text-center md:flex hidden flex-col items-center">
          <h3 className="font-qalogre text-[3.9dvw] leading-none text-primaryText">
            NỘI DUNG CÁC PHẦN
          </h3>
          <img
            src="/icons/line-red.svg"
            alt="content-section-line"
            className="w-[28.6dvw] h-auto object-contain"
          />
        </div>

        {/* Content grid */}
        <div className="w-full mt-[2dvw] md:block hidden">
          <ContentGridImages images={imagesDemo} />
        </div>
      </div>
    </section>
  );
}
