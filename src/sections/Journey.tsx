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
    <section className="relative w-full bg-secondary">
      {/* paper decor */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%]">
        <img src="images/decor/paper-top.svg" alt="paper-top" className="w-full h-auto object-contain" />
      </div>

      <div className="xl:gap-[68px] gap-[48px] relative z-10 flex flex-col pt-[10px]">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-lamoric text-beige xl:text-[64px] text-[48px]">
            HÀNH TRÌNH 7 PHẦN
          </h1>
          <img
            src="src\assets\icons\line-white.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>

        {/* board layout */}
        <div className="lg:w-[908px] w-full lg:border border-0 border-white mx-auto xl:pl-[55px] pl-[42px] lg:py-[62px] py-[25px] pr-[15px]">
          {lessonList.map((lesson) => (
            <div className="md:gap-[100px] gap-[14.5px] flex" key={lesson.number}>
              {/* Number in left layout */}
              <div className="md:w-[180px] w-[70px] flex-shrink-0 flex items-center leading-none border-r boder-solid">
                <p className="xl:text-[128px] text-[110px] font-onebold text-beige">{lesson.number}</p>
              </div>
              {/* content text layouts */}
              <div className="md:gap-[15px] gap-[8px] flex flex-col xl:pb-[48px] pb-[36px]">
                <h3 className="xl:text-[36px] text-[32px] font-lamoric leading-none text-beige uppercase">
                  {lesson.title}
                </h3>
                <p className="xl:text-[32px] text-[28px] font-bladeRush leading-none text-beige">
                  {lesson.subtitle}
                </p>
                <p className="xl:text-[20px] text-[18px] font-gilroy text-beige">
                  {lesson.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img src="images/decor/paper-bottom-light.svg" alt="paper-bottom" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
}
