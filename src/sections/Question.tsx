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
      <div className="relative z-10 mx-auto">
        <div className="absolute top-[-11.9dvw] right-0">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" className="w-[39dvw] rotate-[-152.2deg]" />
        </div>
        <div className="absolute bottom-[-65.9dvw] left-[7dvw]">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" className="w-[39dvw] rotate-[-35deg]" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-10 pt-5 pb-5">
        <h1 className="font-lamoric text-[4.4dvw] text-beige leading-none">
          CÓ PHẢI BẠN...
        </h1>
        <div className="w-[35dvw]   bg-beige relative z-10 mx-auto">
          <div className="absolute top-0 left-0 size-8 -translate-y-1/2 -translate-x-1/2 bg-secondary rounded-full"></div>
          <div className="absolute bottom-0 left-0 size-8 translate-y-1/2 -translate-x-1/2 bg-secondary rounded-full"></div>
          <div className="absolute top-0 right-0 size-8 -translate-y-1/2 translate-x-1/2 bg-secondary rounded-full"></div>
          <div className="absolute bottom-0 right-0 size-8 translate-y-1/2 translate-x-1/2 bg-secondary rounded-full"></div>
          <div className=" py-[28px] pl-[48px] pr-[60px] flex flex-col gap-[14px]">
            {questionItems.map((item, index) => (
              <div
                key={index}
                className="border-t-2 border-dashed border-primaryText/60 py-3"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 aspect-square bg-secondary rounded-full translate-y-[16px]" />
                  <h1 className="font-gilroy font-medium text-[28px] text-secondary ">
                    {item}
                  </h1>
                </div>
              </div>

            ))}

          </div>
          <div className="pt-[14px] pb-[41px]  px-[27px]">
            <p className=" font-gilroy text-[28px] font-bold leading-none text-secondary tracking-[0.05em]">
              Nếu bạn thấy mình trong ít nhất 1 dòng trên
            </p>
            <br />
            <p className=" px-[37px] font-gilroy text-[28px] font-bold leading-none text-secondary tracking-[0.05em]">
              Khóa học này được thiết kế cho bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
