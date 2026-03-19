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

      <div className="relative z-10 flex flex-col pb-[53px] gap-[68px]">

          <div className="flex flex-col items-center">
            <h1 className="text-center font-lamoric text-beige text-[4.4dvw]">
              HÀNH TRÌNH 7 PHẦN
            </h1>
          <img
            src="src\assets\icons\line-white.svg"
            alt="content-section-line"
            className="w-[28.6dvw] h-auto object-contain"
          />
        </div>

        {/* board layout */}
        <div className="w-[908px] border border-white mx-auto  py-[62px] pl-[55px] pr-[15px]">
          {lessonList.map((lesson) => (
            <div className="flex gap-[100px]" key={lesson.number}>

              {/* Number in left layout */}
              <div className="w-[180px] flex-shrink-0 flex items-center  leading-none  border-r  boder-solid">
                <p  className="font-onebold text-[120px] text-beige ">{lesson.number}</p>

              </div>

              {/* content text layouts */}
              <div className="flex flex-col gap-[15px] pb-[23px]">
                <h3 className="font-lamoric text-[36px] leading-none text-beige uppercase">
                  {lesson.title}
                </h3>
                <p className="font-bladeRush text-[32px] leading-none text-beige">
                  {lesson.subtitle}
                </p>
                <p className="font-gilroy text-[20px]  text-beige">
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
