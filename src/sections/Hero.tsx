/**
 * Hero.tsx - Section hero (banner chính) đầu trang
 *
 * - Import component Header để dùng bên trong
 * - style={{ backgroundImage: "..." }}: object inline style; TypeScript
 *   kiểm tra đúng kiểu CSSProperties
 * - Ảnh nền lấy từ public: /images/...
 */

import Header from "../components/Header";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[145dvh] w-full">
      {/* Background image - lớp nền full màn hình */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url(/images/banner-hero-section.svg)",
        }}
      />
      {/* Overlay tối để chữ trắng nổi bật */}
      <div className="absolute inset-0 " />

      <Header />

      {/* Nội dung chính - z-10 để nằm trên overlay và background */}
      <div className="relative z-10 flex min-h-[100dvh] items-center justify-center text-center text-white">
        <div className="px-6">
          <h1 className="font-lamoric text-[93.48px] leading-[100%]">
            LẦN ĐẦU
          </h1>
          <p className="font-qalogre mt-4 text-[36px]">
            KHÔNG CẦN PHẢI ĐÁNG SỢ
          </p>

          <p className="font-gilroy mt-8 rounded-full border border-white/60 px-6 py-3 text-sm">
            Khóa học bởi SexEdu by Trang
          </p>
        </div>
      </div>
    </section>
  );
}
