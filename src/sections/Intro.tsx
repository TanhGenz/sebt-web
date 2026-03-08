// export default function Intro() {
//     return (
//         <section className="relative w-full bg-beige">
//         <div className="container relative">
//             <div className="pt-20 flex  justify-center">
//                 <img src="public\images\introduction.svg" alt="introduction" />
//             </div>
//         </div>
//     </section>
//     )
// }


export default function Intro() {
    return (
      <section className="relative w-full bg-beige">
        <div className="container flex justify-center pt-20">
  
          <div className="relative ">
  
            {/* frame image */}
            <img
              src="public\images\introduction.svg"
              alt="introduction"
              className="w-[100dvw]"
            />

            {/* text content */}
            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-start p-30">
  
              <h2 className="font-kamilla text-[96px] text-secondary">
                Gửi bạn,
              </h2>
  
              <p className="font-gilroy mt-6 text-[16px] leading-relaxed text-primaryText">
                Nếu bạn đang đọc những dòng này, có thể bạn đang chuẩn bị
                cho một điều gì đó rất quan trọng – lần đầu tiên bạn bước
                vào một trải nghiệm mới.
              </p>
  
              <p className="font-gilroy mt-4 text-[16px] leading-relaxed text-primaryText">
                Và Trang hiểu. Vì Trang cũng từng ở đó.
              </p>
  
              <p className=" mt-8 font-kamilla text-[98px]">
                Trang
              </p>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }