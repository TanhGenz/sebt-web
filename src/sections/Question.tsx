const questionItems = [
  "Bạn đang chuẩn bị cho lần đầu và muốn được trang bị đúng cách",
  "Bạn đã thử nhưng chưa thành công - đau quá, không vào được, hoặc kết thúc trong thất vọng",
  'Bạn muốn hiểu cơ thể mình thay vì chỉ "tự mò"',
  "Bạn tin rằng có một cách tốt hơn để trải nghiệm lần đầu (spoiler: có đấy!)",
  'Bạn muốn tự tin giao tiếp với người ấy về những điều "khó nói"',
  "Bạn là ba mẹ, anh chị muốn trang bị kiến thức đúng đắn cho người thân",
];

export default function Question() {
  return (
    <section className=" w-full bg-secondary">
      {/* decor */}
      <div className="relative z-10 mx-auto hidden md:block">
        <div className="absolute top-[-172px] right-[min(calc(-1440px+100dvw),0px)]">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" className="w-[560px] h-auto rotate-[-152.2deg]" />
        </div>
        <div className="absolute bottom-[-948px] left-[min(calc(-1440px+100dvw),0px)]">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" className="w-[560px] rotate-[-35deg]" />
        </div>
      </div>

      {/* full layout */}
      <div className="xl:gap-[68px] gap-[48px] flex flex-col items-center md:pt-[22px] pt-[7.6px] md:pb-[11.1dvw] pb-[80px]">
        {/* title */}
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[64px] text-[54px] font-lamoric text-beige leading-none">
            CÓ PHẢI BẠN...
          </h1>
          <img
            src="src\assets\icons\line-white.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>

        {/* layout question */}
        <div className="md:w-[500px] w-[343px] relative mx-auto z-10 bg-beige">
          {/* dots 4  */}
          <div className="absolute top-0 left-0 size-8 -translate-y-1/2 -translate-x-1/2 bg-secondary rounded-full" />
          <div className="absolute bottom-0 left-0 size-8 translate-y-1/2 -translate-x-1/2 bg-secondary rounded-full" />
          <div className="absolute top-0 right-0 size-8 -translate-y-1/2 translate-x-1/2 bg-secondary rounded-full" />
          <div className="absolute bottom-0 right-0 size-8 translate-y-1/2 translate-x-1/2 bg-secondary rounded-full" />
          {/* contents layout */}
          <div className="md:px-[65px] px-[18.69px] md:py-[28px] py-[28px] flex flex-col md:gap-[14px] gap-[9px]">
            {questionItems.map((item, index) => (
              <div key={index} className=" pt-[14px] border-t-2 border-dashed border-secondary">
                <div className="flex items-start gap-[14px]">
                  {/* dots and content */}
                  <div className="flex-shrink-0 w-1 aspect-square bg-secondary rounded-full translate-y-[16px]" />
                  <p className="md:text-[20px] text-[14px] font-gilroy font-medium text-secondary ">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* box */}
        <div className="relative mx-auto hidden md:block">
          <img
            src="/images/decor/box-quest.png"
            alt="box question"
            className="block w-[74.2dvw] max-w-[1068px]"
          />
          <div className="absolute inset-0 flex items-center justify-center px-[37px] py-[13px]">
            <p className="font-lamoric text-center text-[min(3.3dvw,48px)] leading-[1.35] text-[#D8C6AF]">
              NẾU BẠN THẤY MÌNH ÍT NHẤT MỘT DÒNG TRÊN
              KHOÁ HỌC NÀY DÀNH CHO BẠN
            </p>
          </div>
        </div>
      </div>

      {/* decor paper */}
      <div className="relative z-10">
        <div className="absolute bottom-[-1dvw] right-0 left-0">
          <img src="images/decor/questionDecor/paper-bottom.png" alt="paper-bottom" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
