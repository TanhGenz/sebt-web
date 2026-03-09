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
    <section className="w-full bg-beige py-16 ">
      <div className="container flex justify-center">
        <div className="relative w-full max-w-[860px]">
          <img
            src="/images/introduction.svg"
            alt="Introduction frame"
            className="block h-auto w-full"
          />

          <div className="absolute inset-0">
            <div className="mx-auto flex h-full w-full flex-col px-[7%] pt-[8%] pb-[10%]">
              <h2 className="text-center font-karmila text-[40px] leading-none text-primaryText sm:text-[52px] md:text-[72px]">
                Gửi bạn,
              </h2>

              <div className="mx-auto mt-[10%] w-full max-w-[78%] text-left font-gilroy text-[14px] leading-[1.45] text-primaryText sm:text-[15px] md:text-[16px] md:leading-[1.55]">
                <div className="space-y-4 md:space-y-5">
                  <p>
                    Nếu bạn đang đọc những dòng này, có thể bạn đang chuẩn bị cho
                    một điều gì đó rất quan trọng – lần đầu tiên trong đời bạn bước
                    vào một trải nghiệm mới.
                  </p>

                  <p>Và Trang hiểu. Vì Trang cũng từng ở đó.</p>

                  <p>
                    Mình từng là người không biết hỏi ai. Mình từng lo lắng đến mất
                    ngủ. Mình từng nghĩ rằng đâu là chuyện bình thường, là “phải
                    chịu” hay mình không chảy máu sau lần đầu là mình bị hỏng chăng?
                  </p>

                  <p>
                    Và mình ước, giá như ngày đó có ai đó nói cho mình biết:
                  </p>
                </div>

                <p className="mt-10 font-karmila text-[34px] leading-none sm:text-[42px] md:text-[56px]">
                  Trang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}