/**
 * MainContent.tsx - Section nội dung chính giữa trang
 *
 * Component placeholder "COMING SOON".
 * bg-frame3, text-primaryText: custom theme từ tailwind.config.
 */

export default function CourseOverview() {
  return (
    <section className="relative w-full bg-beige">
      <div className="container relative">
        {/* Main heading */}
        <div className="pt-24 text-center">
          <h2 className="font-qalogre text-[64px] leading-[1.2] tracking-widest text-primaryText">
            LẦN ĐẦU CHUẨN BỊ
            <br />
            KHÔNG CẦN LO TOAN
          </h2>
        </div>

        {/* Curved line */}
        <div className="mt-10">
          <div className="h-[2px] w-full rounded-full bg-primaryText" />
        </div>

        {/* Polaroid cards */}
        <div className="mt-[-8px] flex items-start justify-center gap-8">
          <div className="w-[20dvw] rounded-[6px] bg-white p-4 shadow-lg">
            <div className=" w-full ">
              <img src="public\images\demo-imgs.svg" alt="peter" />
            </div>
            <p className="pt-4 text-center font-gilroy text-[18px] font-semibold uppercase text-primaryText">
              ĐAU ? KHÔNG PHẢI SỢ
            </p>
          </div>

          <div className="w-[20dvw] rounded-[6px] bg-white p-4 shadow-lg">
            <div className=" w-full">
              <img src="public\images\demo-imgs.svg" alt="peter" />
            </div>
            <p className="pt-4 text-center font-gilroy text-[18px] font-semibold uppercase text-primaryText">
              PETER CHỐNG ĐỐI ?
            </p>
          </div>

          <div className="w-[20dvw] rounded-[6px] bg-white p-4 shadow-lg">
            <div className=" w-full ">
              <img src="public\images\demo-imgs.svg" alt="peter" />
            </div>
            <p className="pt-4 text-center font-gilroy text-[18px] font-semibold uppercase text-primaryText">
              CHỈ TRONG 7 PHẦN HỌC
            </p>
          </div>
        </div>

        {/* Sub heading */}
        <div className="mt-20 text-center">
          <h3 className="font-qalogre text-[56px] leading-none tracking-wide text-primaryText">
            NỘI DUNG CÁC PHẦN
          </h3>

          <div className="mt-3 flex justify-center ">
            <img src="src\assets\icons\lines.svg" alt="content-section-line" />
          </div>
        </div>

        {/* Content grid */}
        <div className="pb-24 pt-12">
          <div className="grid grid-cols-4 gap-4">
            <div className="h-[320px]" >
              <img src="public\images\demo-imgs.svg" alt="peter" />
            </div>
            <div className="h-[320px]" >
              <img src="public\images\demo-imgs.svg" alt="peter" />
            </div>
            <div className="h-[320px]" >
              <img src="public\images\demo-imgs.svg" alt="peter" />
            </div>
            <div className="h-[320px]" >
              <img src="public\images\demo-imgs.svg" alt="peter" />
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <div className="h-[320px] w-[calc((100%-32px)/4)] max-w-[290px] bg-[#9B5A5A]" />
            <div className="h-[320px] w-[calc((100%-32px)/4)] max-w-[290px] bg-[#9B5A5A]" />
            <div className="h-[320px] w-[calc((100%-32px)/4)] max-w-[290px] bg-[#9B5A5A]" />
          </div>
        </div>
      </div>
    </section>
  );
}
