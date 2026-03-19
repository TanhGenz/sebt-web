export default function AboutMe() {
  return (
    <section className="w-full bg-beige">

      {/* decor paper */}
      <div className="relative z-1">
        <div className="absolute top-0 right-0 left-0">
          <img src="images/decor/aboutDecor/about-paper-top.png" alt="top decor" className="w-full " />
        </div>
        <div className="absolute translate-x-[10%] translate-y-[20%]  right-0 ">
          <img src="images/decor/aboutDecor/about-line-right.png" alt="right decor" className="w-full " />
        </div>
      </div>



      <div className="relative z-10 w-full h-full  flex flex-col items-center pt-[100px] gap-[150px]">
        <div className="flex flex-col items-center">
          <h1 className="font-lamoric text-primaryText text-[4.4dvw]">
            VỀ MINH TRANG
          </h1>
          <img
            src="src\assets\icons\line-red.svg"
            alt="content-section-line"
            className="w-[28.6dvw] h-auto object-contain"
          />
        </div>

        {/* about Layout */}
        <div className="relative mx-auto mb-[100px] w-[531px] h-auto bg-secondary rounded-b-full p-[11px]">

          {/* AVATAR */}
          <div className="absolute left-1/2 top-0 z-10 h-[253px] w-[253px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[0.5dvw] border-white bg-white">
            <img
              src="images/avt.png"
              alt="Minh Trang"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="border border-white rounded-b-full">
            <div className="flex flex-col px-[50px] pt-[139px] pb-[109px] gap-[16px]">
              <p className="font-gilroy text-creamBeige text-[16px] font-normal leading-none ">
                Minh Trang là nhà hoạt động giới tính và khoái cảm, người sáng lập
                SexEdu by Trang (SEBT) từ năm 2019.
              </p>

              <p className="font-gilroy text-creamBeige text-[16px] font-normal ">
                Trang không phải bác sĩ. Không phải chuyên gia tâm lý. Trang là
                một người từng không có ai để hỏi về những điều "khó nói" — và đã
                dành nhiều năm tự học, nghiên cứu, để bây giờ có thể chia sẻ lại.
              </p>

              <p className=" px-[63px] text-center font-gilroy text-[#FFFFFF]/50 text-[16px] font-semibold italic ">
                "Nhiều bạn nói với mình: Em không biết hỏi ai, em chỉ tin chị
                thôi."
              </p>

              <p className="font-gilroy text-creamBeige text-[16px] font-normal ">
                Cách tiếp cận của Trang kết hợp:
              </p>

              <p className=" px-[88px] text-start font-gilroy text-[#FFFFFF]/50 text-[16px] font-semibold italic ">
                Khoa học tình dục học
                <br />
                Giải phẫu – sinh lý
                <br />
                Tâm lý học
                <br />
                Thực hành kết nối cơ thể
              </p>

              <p className="font-gilroy text-creamBeige text-[16px] font-normal ">
                Tất cả được truyền đạt bằng ngôn ngữ dễ hiểu, không phán xét, và
                có thể áp dụng ngay.
              </p>

              <p className=" text-center font-gilroy text-creamBeige text-[20px] font-normal ">
                Triết lý
              </p>

              <div className=" px-[24px] items-center  ">
                <div className=" border border-white">
                  <p className="px[10px] py-[13px] text-center font-gilroy text-[16px] font-medium leading-none text-creamBeige">
                    Hiểu → Làm được → Kết nối → Tận hưởng
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* left decor */}
      <div className="relative z-1">
        <div className="absolute bottom-0 left-0 ">
          <img src="images/decor/aboutDecor/about-line-left.png" alt="left decor" className="w-full " />
        </div>
      </div>
    </section>
  )
}