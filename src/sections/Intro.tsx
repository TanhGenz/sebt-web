import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Intro() {
  const letterRef = useRef<HTMLDivElement>(null);
  const inView = useInView(letterRef, { once: true, amount: 0.5 });
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMd(mq.matches);
    const onChange = () => setIsMd(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const contentDelay = isMd ? 1 : 0;

  const contentFade = {
    initial: { opacity: 0 },
    animate: inView ? { opacity: 1 } : { opacity: 0 },
    transition: {
      duration: 2,
      delay: contentDelay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center translate-y-[-3px]">
      {/* Background */}
      <img
        src="/images/decor/introDecor/background-intro.png"
        alt="background-intro"
        className="md:block hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Letter content */}
      <div
        ref={letterRef}
        className="relative md:w-max w-full max-md:bg-darkBeige flex items-center justify-center mx-auto md:pb-[20px]"
      >
        {/* Paper — desktop: slide up from bottom first */}
        <motion.img
          src="/images/intro.svg"
          alt="banner-hero-section"
          className="md:block hidden w-[710px] h-auto object-contain"
          initial={{ y: 96, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 96, opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
        />
        {/* Content — fade in after 0.5s (desktop); mobile: fade when in view */}
        <motion.div
          className="relative max-md:w-full max-md:max-w-[400px] md:absolute md:inset-0 font-gilroy text-secondary flex flex-col md:pt-[4%] pt-[15px] md:pl-[13.8%] pl-[18px] md:pr-[9.5%] pr-[18px]"
          {...contentFade}
        >
          <h1 className="font-kamilla md:text-[96px] text-[64px] leading-none text-end md:pb-[3.3%] pb-[32px]">Gửi Bạn,</h1>
          <p className="md:text-[16px] text-[15px] leading-none font-medium text-justify">
            Nếu bạn đang đọc những dòng này, có thể bạn đang chuẩn bị cho một điều gì đó rất quan trọng — lần đầu tiên trong đời bạn bước vào một trải nghiệm thân mật.
            <br />
            <br />
            Và Trang hiểu. Vì Trang cũng từng ở đó.
            <br />
            <br />
            Mình từng là người không biết hỏi ai. Mình từng lo lắng đến mất ngủ. Mình từng nghĩ rằng đau là chuyện bình thường, là "phải chịu" hay mình không chảy máu sau lần đầu là mình bị hỏng chăng? Mình từng tin vào những lời đồn mà sau này mình mới biết — hoàn toàn sai.
            <br />
            <br />
            Và mình ước, giá như ngày đó có ai đó nói cho mình biết:
          </p>
          <br />
          <p className="md:text-[16px] text-[15px] leading-none text-center italic">
            "Lần đầu không nhất thiết phải đau, phải ra máu. Bạn có
            <br />
            quyền được chuẩn bị. Bạn có quyền hiểu cơ thể mình."
          </p>
          <br />
          <p className="md:text-[16px] text-[15px] leading-none font-medium text-justify">
            Đó là lý do Trang tạo ra khóa học này.
            <br />
            <br />
            Không phải để chỉ dạy bạn "kỹ thuật". Mà để giúp bạn hiểu — hiểu cơ thể mình, hiểu tâm lý mình, hiểu cách để lần đầu trở thành một trải nghiệm kết nối thay vì ám ảnh.
            <br />
            <br />
            Khóa học này không dài. Không phức tạp. Chỉ 7 phần, mỗi phần vài video ngắn. Bạn có thể học theo tốc độ của mình, ở nơi riêng tư, với nickname nếu muốn.
            <br />
            <br />
            Mình không hứa nó sẽ hoàn hảo. Nhưng mình hứa — bạn sẽ không còn phải "thử vận may" nữa.
            <br />
            <br />
            Nếu bạn sẵn sàng, mình ở đây.
            <br />
            <br />
            Cùng nhau cố gắng nhé,
          </p>
          <h1 className="font-kamilla text-[96px] leading-none md:pt-[4%] pt-[12px] md:pl-[12.1%] pl-[16px] max-md:pb-[82px]">Trang</h1>
          {/* Decor */}
          <img
            src="/images/decor/letter-decor.png"
            alt="letter-decor"
            className="md:hidden block absolute bottom-[24px] right-[42px] w-[132px] rotate-[16.3deg] h-auto object-contain"
          />
        </motion.div>
        {/* Decor — same fade as letter text */}
        <motion.img
          src="/images/decor/letter-decor.png"
          alt="letter-decor"
          className="md:block hidden absolute top-[45.4%] right-[14%] w-[27.7%] rotate-[13.3deg] h-auto object-contain"
          {...contentFade}
        />
      </div>

      {/* bottom line */}
      <div className="absolute bottom-[-4px] left-0 right-0 h-[4px] bg-secondary" />
    </section>
  );
}
