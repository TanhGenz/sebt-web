export default function AboutMe() {
  return (
    <section className="w-full bg-beige">
      <div className="w-full h-full  flex flex-col items-center">
        <h1 className="font-lamoric text-primaryText text-[4.4dvw]">
          VỀ MINH TRANG
        </h1>

        <div className="relative mt-[25dvh] 2xl:w-[30dvw] w-[40dvw] bg-secondary rounded-b-full p-[12px]">
          {/* AVATAR */}
          <div className="absolute left-1/2 top-0 2xl:h-[12vw] 2xl:w-[12vw] z-20 h-[17dvw] w-[17dvw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[0.5dvw] border-white bg-white">
            <img
              src="images/avt.png"
              alt="Minh Trang"
              className="h-full w-full object-cover"
            />
          </div>
          {/*card content */}
          <div className="border border-white rounded-b-full flex flex-col px-[60px] pt-[134px] pb-[108px]">
            <p className=" font-gilroy text-creamBeige text-[16px] font-normal tracking-[0.05em]">
              Minh Trang là nhà hoạt động giới tính và khoái cảm, người sáng lập
              SexEdu by Trang (SEBT) từ năm 2019.
            </p>
            <br />
            <p className=" font-gilroy text-creamBeige text-[16px] font-normal tracking-[0.05em]">
              Trang không phải bác sĩ. Không phải chuyên gia tâm lý. Trang là
              một người từng không có ai để hỏi về những điều "khó nói" — và đã
              dành nhiều năm tự học, nghiên cứu, để bây giờ có thể chia sẻ lại.
            </p>
            <br />
            <p className=" px-[15%] text-center font-gilroy text-[#FFFFFF]/50 text-[16px] font-semibold italic tracking-[0.05em]">
              "Nhiều bạn nói với mình: Em không biết hỏi ai, em chỉ tin chị
              thôi."
            </p>
            <br />
            <p className="font-gilroy text-creamBeige text-[16px] font-normal tracking-[0.05em]">
              Cách tiếp cận của Trang kết hợp:
            </p>
            <br />
            <p className=" px-[20%] text-start font-gilroy text-[#FFFFFF]/50 text-[16px] font-semibold italic tracking-[0.05em]">
              Khoa học tình dục học
              <br />
              Giải phẫu – sinh lý Tâm lý học
              <br />
              Thực hành kết nối cơ thể
            </p>
            <br />
            <p className="font-gilroy text-creamBeige text-[16px] font-normal tracking-[0.05em]">
              Tất cả được truyền đạt bằng ngôn ngữ dễ hiểu, không phán xét, và
              có thể áp dụng ngay.
            </p>
            <br />
            <p className=" text-center font-gilroy text-creamBeige text-[20px] font-normal tracking-[0.05em]">
              Triết lý
            </p>
            <br />
            <div className=" max-w-[360px] mx-[75px] items-center border border-white ">
              <p className=" px-[10px] py-[11px] text-center font-gilroy text-[15px] font-medium leading-none text-creamBeige">
                Hiểu → Làm được → Kết nối → Tận hưởng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
