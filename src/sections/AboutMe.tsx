export default function AboutMe() {
  return (
    <section className="w-full bg-beige">
      <div className="w-full h-full  flex flex-col items-center">
        <h1 className="font-lamoric text-primaryText text-[4.4dvw] ">
          VỀ MINH TRANG
        </h1>

        <div className="relative mt-[25dvh] w-[36.8dvw] h-[120dvh] bg-secondary rounded-b-full px-[2.1dvw] py-[1.5dvh]">
          {/* AVATAR */}
          <div className="absolute left-1/2 top-[-12dvw] z-20 h-[17dvw] w-[17dvw] -translate-x-1/2 overflow-hidden rounded-full border-[0.5dvw] border-white bg-white">
            <img
              src="images/avt.png"
              alt="Minh Trang"
              className="h-full w-full object-cover"
            />
          </div>


          {/*card content */}
          <div className="pt-[18.7%] px-[10%] border border-white rounded-b-full flex flex-col ">
            <p className=" font-gilroy text-creamBeige text-[1.1dvw] font-normal tracking-[0.05em]">
              Minh Trang là nhà hoạt động giới tính và khoái cảm, người sáng lập
              SexEdu by Trang (SEBT) từ năm 2019.
            </p>
            <br />
            <p className=" font-gilroy text-creamBeige text-[1dvw] font-normal tracking-[0.05em]">
              Trang không phải bác sĩ. Không phải chuyên gia tâm lý. Trang là
              một người từng không có ai để hỏi về những điều "khó nói" — và đã
              dành nhiều năm tự học, nghiên cứu, để bây giờ có thể chia sẻ lại.
            </p>
            <br />
            <p className=" px-[15%] text-center font-gilroy text-[#FFFFFF]/50 text-[1dvw] font-semibold italic tracking-[0.05em]">
              "Nhiều bạn nói với mình: Em không biết hỏi ai, em chỉ tin chị
              thôi."
            </p>
            <br />
            <p className="font-gilroy text-creamBeige text-[1.1dvw] font-normal tracking-[0.05em]">
              Cách tiếp cận của Trang kết hợp:
            </p>
            <br />
            <p className=" px-[20%] text-start font-gilroy text-[#FFFFFF]/50 text-[1dvw] font-semibold italic tracking-[0.05em]">
              Khoa học tình dục học
              <br />
              Giải phẫu – sinh lý Tâm lý học
              <br />
              Thực hành kết nối cơ thể
            </p>
            <br />
            <p className="font-gilroy text-creamBeige text-[1.1dvw] font-normal tracking-[0.05em]">
              Tất cả được truyền đạt bằng ngôn ngữ dễ hiểu, không phán xét, và
              có thể áp dụng ngay.
            </p>
            <br />
            <p className=" text-center font-gilroy text-creamBeige text-[1.4dvw] font-normal tracking-[0.05em]">
              Triết lý
            </p>
            <br />
            <div className=" items-center  border border-white ">
              <p className="text-center  font-gilroy text-[1.25dvw] font-medium leading-none text-creamBeige">
                Hiểu → Làm được → Kết nối → Tận hưởng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
