const DesktopItems = [
  { type: "image", img: "/images/pricing/avt-pricing/avt-1.png" },
  { type: "text", title: "VIDEO", desc: "Toàn bộ 7 phần học với video chia nhỏ, dễ theo dõi" },
  { type: "image", img: "/images/pricing/avt-pricing/avt-2.png" },
  { type: "text", title: "Tài liệu", desc: "Tài liệu bổ trợ (PDF, slide)" },

  { type: "text", title: "Bài tập", desc: "Bài tập thực hành áp dụng ngay" },
  { type: "image", img: "/images/pricing/avt-pricing/avt-3.png" },
  { type: "text", title: "Nhóm hỗ trợ", desc: "Nhóm hỗ trợ học tập riêng (có thể dùng nickname)" },
  { type: "image", img: "/images/pricing/avt-pricing/avt-4.png" },

  { type: "image", img: "/images/pricing/avt-pricing/avt-5.png" },
  { type: "text", title: "Workshop", desc: "Workshop Zoom hàng tháng với Trang" },
  { type: "image", img: "/images/pricing/avt-pricing/avt-6.png" },
  { type: "text", title: "Q&A", desc: "Hỏi đáp & phản hồi trong thời gian học" },
];

const MobileItems = [
  { type: "image", img: "/images/pricing/avt-pricing/avt-1.png" },
  { type: "text", title: "Bài tập", desc: "Bài tập thực hành áp dụng ngay" },
  { type: "image", img: "/images/pricing/avt-pricing/avt-2.png" },
  
  { type: "text", title: "Workshop", desc: "Workshop Zoom hàng tháng với Trang" },
  { type: "image", img: "/images/pricing/avt-pricing/avt-3.png" },
  { type: "text", title: "VIDEO", desc: "Toàn bộ 7 phần học với video chia nhỏ, dễ theo dõi" },
  
  { type: "image", img: "/images/pricing/avt-pricing/avt-5.png" },
  { type: "text", title: "Nhóm hỗ trợ", desc: "Nhóm hỗ trợ học tập riêng (có thể dùng nickname)" },
  { type: "image", img: "/images/pricing/avt-pricing/avt-4.png" },
  
  { type: "text", title: "Q&A", desc: "Hỏi đáp & phản hồi trong thời gian học" },
  { type: "image", img: "/images/pricing/avt-pricing/avt-6.png" },
  { type: "text", title: "Tài liệu", desc: "Tài liệu bổ trợ (PDF, slide)" },
];

export default function Pricing() {
  return (
    <section className="relative w-full bg-beige">
      <img src="images/pricing/pricing-background.png" alt="background-pricing" className="w-full h-auto hidden md:block"/>
      <div className="md:absolute static inset-0 top-1 flex flex-col items-center md:pb-0 pb-[50px] md:pt-[5dvw] pt-[40px]">
        <div className="flex flex-col items-center">
          <h1 className="font-lamoric text-primaryText md:text-[4.4dvw] text-[34px]">
            QUYỀN LỢI & BẢNG GIÁ
          </h1>
          <img
            src="src\assets\icons\line-red.svg"
            alt="content-section-line"
            className="w-[28.6dvw] h-auto object-contain hidden md:block"
          />
        </div>


        {/* board / 4  ele DESKTOP */}
        <div className="w-[71.5dvw] mt-[2.2dvw] md:block hidden">
          <div className="grid md:grid-cols-4 grid-cols-3">
            {DesktopItems.map((item, i) => (
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
                    <h3 className="font-gilroy font-bold  text-[1.4dvw] text-secondary  ">{item.title}</h3>
                    <p className="font-gilroy font-normal text-[1.4dvw] text-secondary  pt-[0.4dvw] ">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* board / 4 ele  MOBILES */}
        <div className="w-[365px] mt-[20.61px] md:hidden block">
          <div className="grid grid-cols-3">
            {MobileItems.map((item, i) => (
              <div key={i} className="border border-red-900 aspect-square">
                {item.type === "image" ? (
                  <div className="relative h-full w-[120px] overflow-hidden">
                    {/* 71.5 / 4 = 17.875dvw = 1 square   */}
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50" />
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-[25px] text-center">
                    <h3 className="font-gilroy font-bold  text-[9.21px] text-secondary  ">{item.title}</h3>
                    <p className="font-gilroy font-normal text-[9.21px] text-secondary  pt-[0.4dvw] ">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* big voucher ele */}
        <div className="relative md:w-[71.5dvw] w-[364px] md:mt-[7.6dvw] mt-[20.61px] md:mb-[4.7dvw] mb-[33.27px]"> 
       {/* calc w-[71.5dvw] => not wrap all content , up to 80dvw*/}
          <img src="images/pricing/ticket.png" className="w-full h-auto  object-contain" />
          <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center md:pt-[2.3%] pt-[8.5px] md:pl-[2.2%] pl-[24.8px] md:pr-[16.5%] pr-[72px] md:gap-[1dvw] gap-[7px]">
            <div className="font-morgan font-normal md:text-[3.3dvw] text-[21px] text-primaryText leading-none  text-center">
              <h3 >FOUNDING CIRCLE </h3>
              <h3>CHỈ 50 HỌC VIÊN ĐẦU</h3>
            </div>
           
            <p className="font-gilroy font-medium md:text-[2dvw] text-[10.13px] text-secondary leading-none ">Only for you</p>
            <p className="font-gilroy font-normal md:text-[2dvw] text-[10.13px] text-[#C18989] leading-none ">+Tặng 1 Love Box tri ân (chỉ dành cho founding members)</p>
            {/* <h2 className="font-lamoric text-[5.3dvw] text-[#767676] font-normal leading-none ">2.199.000đ</h2> */}
            <div className="relative inline-block">
              <h2 className="font-lamoric md:text-[5.3vw] text-[20.27px] text-[#767676] font-normal leading-none ">
                2.199.000đ
              </h2>
              <div className="absolute left-0 top-1/2 w-full h-[2%] bg-black rotate-[7deg]" />
            </div>
            <h1 className=" font-lamoric md:text-[6.67dvw] text-[20.27px] text-secondary font-normal leading-none ">1.299.000đ</h1>
          </div>
        </div>
        
        {/* 2 ticket small */}
        {/* CORE VERSION 13900 */}
        <div className="md:w-[71.5dvw] flex md:flex-row flex-col md:gap-[7.4dvw] gap-[33.27px]  md:my-[7.6dvw] my-0 ">
          <div className="relative md:w-[42.5dvw] w-[364px] h-auto">
            <img src="/images/pricing/ticket-small.png" className="w-full h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center md:pt-[3.5%] pt-[12.2px] md:pl-[4.4%] pl-[16px] md:pr-[21.5%] pr-[77.35px] md:gap-[1.7dvw] gap-[12px]">
              <h3 className="font-morgan font-normal md:text-[2.3dvw] text-[27.36px] text-primaryText leading-none ">CORE VERSION</h3>
              <p className="font-gilroy font-normal md:text-[1.15dvw] text-[14px] text-secondary leading-none ">HỌC ĐỦ, DÙNG NGAY</p>
              <h2 className="font-lamoric md:text-[2.3vw] text-[27.36px] text-secondary font-normal leading-none ">
                1.399.000đ
              </h2>
            </div>
          </div>
    
          {/*  LIFETIME PEACE-OF-MIND 16900 */}
          <div className="relative md:w-[46.4dvw] w-[364px] ">
            <img src="/images/pricing/ticket-small.png" className="w-full  h-auto object-contain" />
            <div className="absolute inset-0 font-gilroy text-secondary flex flex-col items-center pt-[6%] pl-[5%] pr-[25%] gap-[1dvw]">
              <h3 className="font-morgan font-normal md:text-[1.8dvw] text-[23.12px] text-primaryText leading-none ">LIFETIME PEACE-OF-MIND</h3>
              <p className="font-gilroy font-normal md:text-[1.15dvw] text-[11.56px] text-secondary leading-none ">ĐƯỢC CHỌN NHIỀU NHẤT</p>
              <p className="font-gilroy font-normal md:text-[1.15dvw] text-[11.56px] text-[#C18989] leading-none ">Cập nhật trọn đời</p>
              <h2 className="font-lamoric md:text-[2.3vw] text-[23.12px] text-secondary font-normal leading-none ">
                1.699.000đ
              </h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}