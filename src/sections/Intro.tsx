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
    <section className="relative w-full">
      <div className=" flex items-center justify-center pt-7">
        <img
          src="/images/intro.svg"
          alt="banner-hero-section"
          className=" w-[45dvw] h-auto object-cover object-center"
        />

        <div className="absolute  w-[45dvw] h-full flex flex-col  px-10">
          <div className = " w-full flex flex-end">
            <h1 className="font-kamilla text-[6.7dvw] text-primaryText leading-none"> Gửi Bạn, </h1>
          </div>
          <p className="font-gilroy text-[1.1dvw] text-primaryText leading-none">
            Nếu bạn đang đọc những dòng này, có thể bạn đang chuẩn bị cho một điều gì đó rất quan trọng — lần đầu tiên trong đời bạn bước vào một trải nghiệm thân mật.
            <br />
            <br />
            Và Trang hiểu. Vì Trang  cũng từng ở đó.
            <br />
            <br />
            Mình từng là người không biết hỏi ai. Mình từng lo lắng đến mất ngủ. Mình từng nghĩ rằng đau là chuyện bình thường, là "phải chịu" hay mình không chảy máu sau lần đầu là mình bị hỏng chăng? Mình từng tin vào những lời đồn mà sau này mình mới biết — hoàn toàn sai.
            <br />
            <br />
            Và mình ước, giá như ngày đó có ai đó nói cho mình biết:
          </p>
          <br />

          <p className="font-gilroy text-[1.1dvw] text-secondary leading-none">
            "Lần đầu không nhất thiết phải đau, phải ra máu. Bạn có
            <br />
            quyền được chuẩn bị. Bạn có quyền hiểu cơ thể mình."
          </p>
          <p className="font-gilroy text-[1.1dvw] text-primaryText leading-none">
            Đó là lý do Trang tạo ra khóa học này.
            <br />
            <br />
            Không phải để chỉ dạy bạn "kỹ thuật". Mà để giúp bạn hiểu — hiểu cơ thể mình, hiểu tâm lý mình, hiểu cách để lần đầu trở thành một trải nghiệm kết nối thay vì ám ảnh.
            <br />
            <br />
            Khóa học này không dài. Không phức tạp. Chỉ 7 phần, mỗi phần vài video ngắn. Bạn có thể học theo tốc độ của mình, ở nơi riêng tư, với nickname nếu muốn.
            <br />
            <br />
            Mình không hứa nó sẽ hoàn hảo. Nhưng mình hứa — bạn sẽ không còn phải "thử vận may" nữa.
            <br />
            <br />
            Nếu bạn sẵn sàng, mình ở đây.
            <br />
            <br />
            Cùng nhau cố gắng nhé,
          </p>

        </div>
      </div>




    </section>
  );
}