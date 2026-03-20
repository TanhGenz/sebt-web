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
        <div className="flex flex-col items-center gap-5 
        md:pt-8 pt-0 
        md:pb-[225px] pb-[55px]">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[4.4dvw] text-[8.4dvw] font-lamoric  text-primaryText">
              SAU KHÓA HỌC BẠN SẼ
            </h1>
            <img
              src="src\assets\icons\line-red.svg"
              alt="content-section-line"
              className="w-[28.6dvw] h-auto object-contain hidden md:block"
            />
          </div>

          <div className="flex 
          md:w-[60.2dvw] w-[367px]
          md:pl-[45px] pl-[30px]
          flex-col gap-3 ">
            {titleList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col pb-3"
              >
                <div className="relative w-max">
                  <h3 className="md:text-[24px] text-[20px] pb-[5px] font-gilroy font-bold leading-none text-primaryText">
                    {item}
                  </h3>
                  <div className="absolute bottom-[-1px] left-[-6px] right-0 h-[2px] bg-primaryText rounded-full" />
                  <div className="absolute 
                  md:top-[5px] top-[13px] md:left-[-45px] left-[-28px] 
                  md:w-[40px] w-[22.26px] md:aspect-square aspect-square  
                  border-[1px] border-primaryText rounded-full" />
                </div>
                <p className="md:text-[20px] text-[16px]">{contentList[index]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[1.4dvw] w-max left-1/2 pb-[39px] hidden md:block">
          <img src="images/decor/lip-stick.png" alt="lip-stick" className="w-[16.3dvw] rotate-[24.69deg]" />
        </div>
      </div>
    </section>
  );
}