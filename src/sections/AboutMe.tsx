export default function AboutMe() {
  return (
    <section className="relative translate-y-[-1px] w-full bg-beige">
      {/* decor paper */}
      <div className="relative z-1">
        <div className="absolute top-0 right-0 hidden md:block">
          <img src="images/decor/aboutDecor/about-line-right.png" alt="right decor" className="w-full h-auto object-contain" />
        </div>
      </div>

      <div className="relative z-10 w-full h-full  flex flex-col items-center  sm:gap-[150px] gap-[100px]">
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[64px] sm:text-[48px] text-[38px] font-lamoric text-primaryText">
            VỀ MINH TRANG
          </h1>
          <img
            src="src\assets\icons\line-red.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>

        {/* about Layout */}
        <div className="relative mx-auto sm:mb-[100px] mb-[23px] sm:w-[531px] w-[390px] sm:p-[11px] p-[8px] h-auto bg-secondary rounded-b-full shadow-[8px_8px_20px_rgba(0,0,0,0.2)]">
          {/* AVATAR */}
          <div className="absolute left-1/2 top-0 z-10 sm:w-[253px] w-[178px] sm:h-[253px] h-[178px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[0.5dvw] border-white bg-white">
            <img
              src="images/avt.png"
              alt="Minh Trang"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="border border-white rounded-b-full">
            <div className="text-[16px] leading-[1.2] text-creamBeige font-gilroy flex flex-col sm:px-[50px] px-[10px] sm:pt-[139px] pt-[100px] pb-[109px] gap-[12px]">
              <p>
                Minh Trang là nhà hoạt động giới tính và khoái cảm, người sáng lập
                SexEdu by Trang (SEBT) từ năm 2019.
              </p>
              <p>
                Trang không phải bác sĩ. Không phải chuyên gia tâm lý. Trang là
                một người từng không có ai để hỏi về những điều "khó nói" — và đã
                dành nhiều năm tự học, nghiên cứu, để bây giờ có thể chia sẻ lại.
              </p>
              <p className="text-center text-[#FFFFFF]/50 font-semibold italic mx-auto">
                "Nhiều bạn nói với mình: Em không
                <br />
                biết hỏi ai, em chỉ tin chị thôi."
              </p>
              <br />
              <p className="font-gilroy text-creamBeige text-[16px] font-normal ">
                Cách tiếp cận của Trang kết hợp:
              </p>
              <ul className="list-disc list-inside text-[#FFFFFF]/50 font-semibold italic mx-auto">
                <li>Khoa học tình dục học</li>
                <li>Giải phẫu - sinh lý</li>
                <li>Tâm lý học</li>
                <li>Thực hành kết nối cơ thể</li>
              </ul>
              <br />
              <p className="font-gilroy text-creamBeige text-[16px] font-normal ">
                Tất cả được truyền đạt bằng ngôn ngữ dễ hiểu, không phán xét, và
                có thể áp dụng ngay.
              </p>
              <p className="text-center font-gilroy text-creamBeige text-[20px] font-normal ">
                Triết lý
              </p>
              <div className="w-max mx-auto">
                <div className="border border-white px-[12px] py-[12px]">
                  <p className="font-medium leading-none">
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
        <div className="absolute bottom-0 left-0 hidden md:block">
          <img src="images/decor/aboutDecor/about-line-left.png" alt="left decor" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}