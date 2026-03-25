const items = [
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "VIDEO", desc: "Toàn bộ 7 phần học với video chia nhỏ, dễ theo dõi" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Tài liệu", desc: "Tài liệu bổ trợ (PDF, slide)" },

  { type: "text", title: "Bài tập", desc: "Bài tập thực hành áp dụng ngay" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Nhóm hỗ trợ", desc: "Nhóm hỗ trợ học tập riêng (có thể dùng nickname)" },
  { type: "image", img: "/images/demo-imgs.svg" },

  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Workshop", desc: "Workshop Zoom hàng tháng với Trang" },
  { type: "image", img: "/images/demo-imgs.svg" },
  { type: "text", title: "Q&A", desc: "Hỏi đáp & phản hồi trong thời gian học" },
];



// % size width screen
export default function Pricing() {
  return (
    <section className="w-full bg-beige relative translate-y-[-1px]">
      <div className="flex flex-col items-center pb-[4vw]">
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[64px] text-[48px] font-lamoric text-primaryText">
            QUYỀN LỢI & BẢNG GIÁ
          </h1>
          <img
            src="src\assets\icons\line-red.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>
        {/* board / 4  ele */}
        <div className="w-[71.5dvw] mt-[2.2dvw]">
          <div className="grid grid-cols-4">
            {items.map((item, i) => (
              <div key={i} className="border border-red-900 aspect-square">
                {item.type === "image" ? (
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt="image item"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50" />
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-[1.2dvw] text-center">
                    <h3 className="font-gilroy font-bold  text-[1.4dvw] text-secondary">{item.title}</h3>
                    <p className="font-gilroy font-normal text-[1.4dvw] text-secondary pt-[0.4dvw]">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* big voucher ele */}
        <div className="relative w-[76.5dvw] translate-x-[2.5%] mt-[5.2dvw]">
          <img src="images/pricing/ticket.png" className="w-full h-auto  object-contain" />
          <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[2.3%] pl-[2.2%] pr-[16.5%] gap-[1dvw]">
            <div className="font-morgan font-normal text-[3.3dvw] text-primaryText leading-none  text-center">
              <h3 >FOUNDING CIRCLE </h3>
              <h3>CHỈ 50 HỌC VIÊN ĐẦU</h3>
            </div>
            <p className="font-gilroy font-medium text-[2dvw] text-secondary leading-none ">Only for you</p>
            <p className="font-gilroy font-normal text-[2dvw] text-[#C18989] leading-none ">+Tặng 1 Love Box tri ân (chỉ dành cho founding members)</p>
            {/* <h2 className="font-lamoric text-[5.3dvw] text-[#767676] font-normal leading-none ">2.199.000đ</h2> */}
            <div className="relative inline-block">
              <h2 className="font-lamoric text-[5.3vw] text-[#767676] font-normal leading-none ">
                2.199.000đ
              </h2>
              <div className="absolute left-0 top-1/2 w-full h-[2%] bg-black rotate-[7deg]" />
            </div>
            <h1 className=" font-lamoric text-[6.67dvw] text-secondary font-normal leading-none ">1.299.000đ</h1>
          </div>
        </div>

        {/* 2 ticket small */}
        <div className="w-full flex justify-center translate-x-[2%] gap-[7.4dvw] mt-[3dvw]">
          <div className="relative w-[30.8dvw]">
            <img src="/images/pricing/ticket-small.png" className="w-full h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[5.5%] pl-[4.4%] pr-[21.5%] gap-[1.6dvw]">
              <h3 className="font-morgan font-normal text-[2.3dvw] text-primaryText leading-none">CORE VERSION</h3>
              <p className="font-gilroy font-normal text-[1.15dvw] text-secondary leading-none">HỌC ĐỦ, DÙNG NGAY</p>
              <h2 className="font-lamoric text-[2.3vw] text-secondary font-normal leading-none translate-y-[-10%]">
                1.399.000đ
              </h2>
            </div>
          </div>

          <div className="relative w-[38.8dvw]">
            <img src="/images/pricing/ticket-small.png" className="w-full  h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[8%] pl-[5%] pr-[25%] gap-[1dvw]">
              <h3 className="font-morgan font-normal text-[1.8dvw] text-primaryText leading-none ">LIFETIME PEACE-OF-MIND</h3>
              <p className="font-gilroy font-normal text-[1.15dvw] text-secondary leading-none ">ĐƯỢC CHỌN NHIỀU NHẤT</p>
              <p className="font-gilroy font-normal text-[1.15dvw] text-[#C18989] leading-none ">Cập nhật trọn đời</p>
              <h2 className="font-lamoric text-[2.3vw] text-secondary font-normal leading-none ">
                1.699.000đ
              </h2>
            </div>
          </div>
        </div>
      </div>
      <img src="images/decor/paper-top.svg" alt="paper" className="w-full h-auto translate-y-[1px]" />
    </section>
  );
}