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
        <div className="absolute top-0 right-0">
          <img src="images/decor/flower-decor.png" alt="flower-right-top" />
        </div>
      </div>

      <div className="w-full h-[200dvh] flex flex-col items-center gap-10 pt-5">
        <h1 className="font-lamoric text-[4.4dvw] text-beige leading-none">
          CÓ PHẢI BẠN...
        </h1>
        <div className="w-[48.9dvw] h-auto  bg-beige relative z-10 mx-auto">
          <div className="absolute top-0 left-0 size-4  bg-secondary rounded-full"></div>
          <div className="absolute bottom-0 left-0 size-4 bg-secondary rounded-full"></div>
          <div className="absolute top-0 right-0 size-4 bg-secondary rounded-full"></div>
          <div className="absolute bottom-0 right-0 size-4 bg-secondary rounded-full"></div>
          <div className="pt-[8.5%] pl-[7.2%] pr-[15%] flex flex-col gap-5">
            {questionItems.map((item, index) => (
              <div
                key={index}
                className="border-b-2 border-dotted border-primaryText/60 py-5"
              >
                <div className="flex flex-row items-start gap-5">
                  <span className="text-[2dvw] mt-[0.4em]  leading-none text-primaryText">
                    •
                  </span>
                  <h1 className="font-gilroy font-medium text-[2dvw] text-secondary ">
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="pb-[8.2%] pl-[0.4%] pt-[14px]">
            <p className="text-center font-gilroy text-[2dvw] font-bold leading-none text-primaryText">
              Nếu bạn thấy mình trong ít nhất 1 dòng trên
            </p>
            <p className=" text-center font-gilroy text-[2dvw] font-bold leading-none text-primaryText">
              Khóa học này được thiết kế cho bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
