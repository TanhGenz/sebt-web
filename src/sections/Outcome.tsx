const titleList = [
  "Hiểu cơ thể mình",
  "Biết cách chuẩn bị",
  "Biết cách chuẩn bị",
  "Bảo vệ bản thân đúng cách",
  "Tự tin giao tiếp",
  "Có lần đầu kết nối",
];

const contentList = [
  'Không còn mơ hồ về "chuyện ấy". Bạn sẽ biết cơ thể mình hoạt động như thế nào, và tại sao điều đó quan trọng.',
  'Từ tâm lý đến thể chất, từ không gian đến "dụng cụ" — bạn sẽ có checklist cụ thể.',
  'Đây là tình huống phổ biến nhất, và khóa học có hướng dẫn từng bước để giải quyết.',
  'Tránh thai ngoài ý muốn, phòng ngừa STIs — với kiến thức thực tế, không lý thuyết suông.',
  'Có script để mở lời về những điều "khó nói", để cả hai đều thoải mái.',
  'Không phải lần đầu hoảng loạn. Mà là lần đầu trọn vẹn — dù nó có hoàn hảo hay không.',

]


export default function Outcome() {
  return (
    <section className="relative w-full bg-beige">
      <div className="w-full h-full">
        <div className="flex flex-col items-center gap-5 pt-8 pb-[225px]">
          <div className="flex flex-col items-center">
            <h1 className="font-lamoric text-[4.4dvw] text-primaryText">
              SAU KHÓA HỌC BẠN SẼ
            </h1>
            <img
              src="src\assets\icons\line-red.svg"
              alt="content-section-line"
              className="w-[28.6dvw] h-auto object-contain"
            />
          </div>



          <div className="flex w-[60.2dvw] flex-col gap-3 pl-[45px]">
            {titleList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col pb-3"
              >
                <div className="relative w-max">
                  <h3 className="font-gilroy text-[24px] leading-none text-primaryText">
                    {item}
                  </h3>
                  <div className="absolute bottom-[-1px] left-[-6px] right-0 h-[2px] bg-primaryText rounded-full" />
                  <div className="absolute top-[5px] left-[-45px] w-[40px] aspect-square border-[2px] border-primaryText rounded-full" />
                </div>
                <p className="text-[20px]">{contentList[index]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[1.4dvw] w-max left-1/2 pb-[39px]">
          <img src="images/decor/lip-stick.png" alt="lip-stick" className="w-[16.3dvw] rotate-[24.69deg]" />
        </div>
      </div>
    </section>
  );
}