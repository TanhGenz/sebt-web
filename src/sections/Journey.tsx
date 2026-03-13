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
    <section className="w-full bg-secondary">
      <div className="w-full h-full pb-[6.7dvh]">
        <div className="flex flex-col items-center gap-5 pt-8">
          <h1 className="font-lamoric text-beige text-[4.4dvw]">
            HÀNH TRÌNH 7 PHẦN
          </h1>

          <div className="w-[63dvw] border border-beige px-[6%] py-[4.5%]">
            {lessonList.map((lesson) => (
              <div className="w-full flex" key={lesson.number}>
                <div className="w-[200px] aspect-square border-r boder-solid border-beige flex items-center justify-center font-lamoric text-beige text-[4.6dvw] leading-none italic">{lesson.number}</div>
                <div className="flex flex-col pl-[100px]">
                  <h3 className="font-lamoric text-[2.05dvw] leading-none text-beige uppercase">
                    {lesson.title}
                  </h3>
                  <p className="mt-[0.8dvw] font-lamoric text-[2dvw] leading-none text-beige">
                    {lesson.subtitle}
                  </p>
                  <p className="mt-[1dvw] max-w-[31dvw] font-gilroy text-[1.18dvw] leading-[1.25] text-beige">
                    {lesson.description}
                  </p>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </section>
  );
}
