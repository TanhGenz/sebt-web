const lessonList = [
  {
    number: "01",
    title: "PHẦN 1: HIỂU MÌNH",
    subtitle: "Tâm lý & Sự sẵn sàng",
    description:
      'Không còn mơ hồ về "chuyện ấy". Bạn sẽ biết cơ thể mình hoạt động như thế nào, và tại sao điều đó quan trọng.',
  },
  {
    number: "02",
    title: "PHẦN 2: BIẾT CƠ THỂ",
    subtitle: "Sinh lý & Giải phẫu",
    description:
      "Bản đồ cơ thể nam và nữ. Sự thật về màng trinh. Tại sao đau — và cách để không đau.",
  },
  {
    number: "03",
    title: "PHẦN 3: KẾT NỐI",
    subtitle: "Giao tiếp & Đồng thuận",
    description:
      "Mở lời về intimacy. Thể hiện nhu cầu. Mô hình FRIES để cả hai đều thoải mái.",
  },
  {
    number: "04",
    title: "PHẦN 4: CHUẨN BỊ",
    subtitle: "Checklist thực tế",
    description:
      "Từ vệ sinh đến không gian. Bao cao su 101. Gel bôi trơn — loại nào, dùng thế nào.",
  },
  {
    number: "05",
    title: "PHẦN 5: BƯỚC VÀO",
    subtitle: "Lần đầu từng bước",
    description:
      'Dạo đầu → Thâm nhập → Kết nối. Tư thế phù hợp. Xử lý "không vào được".',
  },
  {
    number: "06",
    title: "PHẦN 6: AN TOÀN",
    subtitle: "Bảo vệ & Phòng ngừa",
    description:
      "Các biện pháp tránh thai. STIs. Xử lý sự cố — rách bao, quên thuốc.",
  },
  {
    number: "07",
    title: "PHẦN 7: SAU ĐÓ",
    subtitle: "Chăm sóc & Tiếp tục",
    description:
      "Vệ sinh sau quan hệ. Cảm xúc sau lần đầu. Nếu không như mong đợi — cách đối diện.",
  },
];

export default function Journey() {
  return (
    <section className="relative  w-full bg-secondary">

      {/* paper decor */}
      <div className="absolute top-0 left-0 w-full -translate-y-[90%]">
          <img src="images/decor/paper.png" alt="paper-decor" className="w-full h-full object-contain" />
      </div>

      <div className="md:gap-[68px] gap-[20px] relative z-10 flex flex-col pb-[53px] ">

          <div className="flex flex-col items-center">
            <h1 className="lg:text-[4.4dvw] text-[8.4dvw] text-center font-lamoric text-beige">
              HÀNH TRÌNH 7 PHẦN
            </h1>
          <img
            src="src\assets\icons\line-white.svg"
            alt="content-section-line"
            className="w-[28.6dvw] h-auto object-contain hidden md:block"
          />
        </div>

        {/* board layout */}
        <div className="
        lg:w-[908px] w-full 
        lg:border border-0 border-white mx-auto 
        lg:pl-[55px] pl-[16.4px] lg:py-[62px] py-[25px]
        pr-[15px]">
          
          {lessonList.map((lesson) => (
            <div className="md:gap-[100px] gap-[14.5px] flex " key={lesson.number}>

              {/* Number in left layout */}
              <div className="md:w-[180px] w-[70px] flex-shrink-0 flex items-center  leading-none  border-r  boder-solid">
                <p  className="md:text-[120px] text-[58.72px] font-onebold text-beige ">{lesson.number}</p>

              </div>

              {/* content text layouts */}
              <div className="md:gap-[15px] gap-[8.4px]  flex flex-col pb-[23px]">
                <h3 className=" md:text-[36px] text-[19.11px] font-lamoric leading-none text-beige uppercase">
                  {lesson.title}
                </h3>
                <p className=" md:text-[32px] font-bladeRush leading-none text-beige">
                  {lesson.subtitle}
                </p>
                <p className="md:text-[20px] text-[12.74px] font-gilroy text-beige">
                  {lesson.description}
                </p>
              </div>
            </div>


          ))}
        </div>
      </div>
    </section>
  );
}
