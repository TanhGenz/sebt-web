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
    <section className="w-full bg-beige">
      <div className="flex flex-col items-center pb-[4vw]">
        <h1 className="font-lamoric text-primaryText text-[4.4vw]">
          QUYỀN LỢI & BẢNG GIÁ
        </h1>


        {/* board / 4  ele */}
        <div className="w-[71.5dvw] mt-[2.2dvw]">
          <div className="grid grid-cols-4">
            {items.map((item, i) => (
              <div key={i} className="border border-red-900 aspect-square">
                {item.type === "image" ? (
                  <div className="relative h-full w-full overflow-hidden">
                    {/* 71.5 / 4 = 17.875dvw = 1 square   */}
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50" />
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-[1.2dvw] text-center">
                    <h3 className="font-gilroy font-bold  text-[1.4dvw] text-secondary  tracking-[0.05em]">{item.title}</h3>
                    <p className="font-gilroy font-normal text-[1.4dvw] text-secondary tracking-[0.05em] pt-[0.4dvw] ">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* big voucher ele */}
        <div className="relative w-[80dvw]  mt-[7.6dvw]"> 
       {/* calc w-[71.5dvw] => not wrap all contentscontents , up to 80dvw*/}
          <img src="/images/ticket.png" className="w-full  h-auto object-contain" />
          <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[4%] pl-[2%] pr-[15%] gap-[1.5dvw]">
            <h3 className="font-qalogre font-normal text-[3.3dvw] text-primaryText leading-none tracking-[0.05em]">FOUNDING CIRCLE </h3>
            <h3 className="font-qalogre font-normal text-[3.3dvw] text-primaryText leading-none tracking-[0.05em]">CHỈ 50 HỌC VIÊN ĐẦU</h3>
            <p className="font-gilroy font-medium text-[2dvw] text-secondary leading-none tracking-[0.05em]">Only for you</p>
            <p className="font-gilroy font-normal text-[2dvw] text-[#C18989] leading-none tracking-[0.05em]">+Tặng 1 Love Box tri ân (chỉ dành cho founding members)</p>
            {/* <h2 className="font-lamoric text-[5.3dvw] text-[#767676] font-normal leading-none tracking-[0.05em]">2.199.000đ</h2> */}
            <div className="relative inline-block">
              <h2 className="font-lamoric text-[5.3vw] text-[#767676] font-normal leading-none tracking-[0.05em]">
                2.199.000đ
              </h2>
              <div className="absolute left-0 top-1/2 w-full h-[2%] bg-black rotate-[7deg]" />
            </div>
            <h1 className=" font-lamoric text-[6.67dvw] text-secondary font-normal leading-none tracking-[0.05em]">1.299.000đ</h1>
          </div>
        </div>

        {/* 2 ticket small */}
        <div className="w-[71.5dvw] flex flex-row gap-[11dvw]  mt-[7.6dvw]">
          <div className="relative w-[32.5dvw]">
            <img src="/images/ticket-small.png" className="w-full  h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[4%] pl-[2%] pr-[15%] gap-[1.5dvw]">
              <h3 className="font-qalogre font-normal text-[2.3dvw] text-primaryText leading-none tracking-[0.05em]">CORE VERSION</h3>
              <p className="font-gilroy font-normal text-[1.15dvw] text-secondary leading-none tracking-[0.05em]">HỌC ĐỦ, DÙNG NGAY</p>
              <h2 className="font-lamoric text-[2.3vw] text-secondary font-normal leading-none tracking-[0.05em]">
                1.399.000đ
              </h2>
            </div>
          </div>

          <div className="relative w-[40dvw]">
            <img src="/images/ticket-small.png" className="w-full  h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[4%] pl-[2%] pr-[15%] gap-[1.5dvw]">
              <h3 className="font-qalogre font-normal text-[1.8dvw] text-primaryText leading-none tracking-[0.05em]">LIFETIME PEACE-OF-MIND</h3>
              <p className="font-gilroy font-normal text-[1.15dvw] text-secondary leading-none tracking-[0.05em]">ĐƯỢC CHỌN NHIỀU NHẤT</p>
              <p className="font-gilroy font-normal text-[1.15dvw] text-[#C18989] leading-none tracking-[0.05em]">Cập nhật trọn đời</p>
              <h2 className="font-lamoric text-[2.3vw] text-secondary font-normal leading-none tracking-[0.05em]">
                1.699.000đ
              </h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}