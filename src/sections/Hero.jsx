import Header from "../components/Header";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto w-full max-w min-h-[1550px] overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-center"
        style={{
          backgroundImage: "url(src/assets/images/banner-hero-section.svg)",
        }}
      />
      {/* overlay để chữ nổi */}
      <div className="absolute inset-0 bg-black/20" />

      <Header />

      {/* Content */}
      <div className="relative z-10 flex min-h-[1121px] items-start justify-center pt-40 text-center text-white">
        <div className="px-6">
          <h1 className="font-lamoric text-6xl">LẦN ĐẦU</h1>
          <p className="font-qalogre mt-4 text-2xl">KHÔNG CẦN PHẢI ĐÁNG SỢ</p>

          <button className="font-gilroy mt-8 rounded-full border border-white/60 px-6 py-3 text-sm hover:bg-white/10 transition">
            Khóa học bởi SexEdu by Trang
          </button>
        </div>
      </div>
    </section>
  );
}
