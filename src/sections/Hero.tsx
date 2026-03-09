import Header from "../components/Header";

export default function Hero() {
  return (
    <section id="top" className="relative w-full">
      <div className="w-full h-dvh">
        <img
          src="/images/test/test-1.png"
          alt="banner-hero-section"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-lamoric text-[6.5dvw] leading-none">
            LẦN ĐẦU
          </h1>
          <p className="font-qalogre text-[2.5dvw] leading-none">
            KHÔNG CẦN PHẢI ĐÁNG SỢ
          </p>

          <p className="font-gilroy mt-8 rounded-full border border-white/60 px-6 py-3 text-sm">
            Khóa học bởi SexEdu by Trang
          </p>
        </div>
      </div>
      <Header />
    </section>
  );
}
