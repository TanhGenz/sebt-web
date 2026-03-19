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
    <section className=" w-full  bg-secondary">

      {/* decor */}
      <div className="relative z-10 mx-auto">
        <div className="absolute top-[-11.9dvw] right-0">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" className="w-[39dvw] rotate-[-152.2deg]" />
        </div>

        <div className="absolute bottom-[-65.9dvw] left-0">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" className="w-[39dvw] rotate-[-35deg]" />
        </div>

      </div>



      {/* full layout */}
      <div className="flex flex-col items-center gap-[68px] pt-[22px] pb-[167px]">
        {/* title */}
        <div className="flex flex-col items-center">
          <h1 className="font-lamoric text-[4.4dvw] text-beige leading-none">
            CÓ PHẢI BẠN...
          </h1>
          <img
            src="src\assets\icons\line-white.svg"
            alt="content-section-line"
            className="w-[28.6dvw] h-auto object-contain"
          />
        </div>

        {/* layout question */}
        <div className="relative mx-auto w-[500px] z-10 bg-beige">

          {/* dots 4  */}
          <div className="absolute top-0 left-0 size-8 -translate-y-1/2 -translate-x-1/2 bg-secondary rounded-full"></div>
          <div className="absolute bottom-0 left-0 size-8 translate-y-1/2 -translate-x-1/2 bg-secondary rounded-full"></div>
          <div className="absolute top-0 right-0 size-8 -translate-y-1/2 translate-x-1/2 bg-secondary rounded-full"></div>
          <div className="absolute bottom-0 right-0 size-8 translate-y-1/2 translate-x-1/2 bg-secondary rounded-full"></div>


          {/* contents layout */}
          <div className="px-[65px] py-[28px] flex flex-col gap-[14px]">
            {questionItems.map((item, index) => (
              <div key={index} className="border-t-2 border-dashed border-primaryText/60">
                <br />
                <div className="flex items-start gap-[14px]">
                  {/* dots and content */}
                  <div className="flex-shrink-0 w-1 aspect-square bg-secondary rounded-full translate-y-[16px]" />
                  <p className="font-gilroy font-medium text-[20px] text-secondary ">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* box */}
        <div className="relative mx-auto">
          <img
            src="/images/decor/box-quest.png"
            alt="box question"
            className="block w-[74.2dvw]"
          />

          <div className="absolute inset-0 flex items-center justify-center px-[37px] py-[13px]">
            <p className="font-lamoric text-center text-[3.3dvw] leading-[1.35] text-[#D8C6AF]">
              NẾU BẠN THẤY MÌNH ÍT NHẤT MỘT DÒNG TRÊN
              KHOÁ HỌC NÀY DÀNH CHO BẠN
            </p>
          </div>
        </div>
      </div>
      
      {/* decor paper */}
      <div className="relative z-10">
        <div className="absolute bottom-[-1dvw] right-0 left-0">
          <img src="images/decor/questionDecor/paper-bottom.png" alt="paper-bottom" className="w-full "/>
        </div> 
      </div>

    </section>
  );
}
