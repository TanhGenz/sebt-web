export default function Intro() {
  return (
    <section className="w-full">
      <div className="relative w-max flex items-center justify-center mx-auto">
        {/* Paper */}
        <img
          src="/images/intro.svg"
          alt="banner-hero-section"
          className="w-[49.4dvw] h-auto object-contain"
        />

        {/* Content */}
        <div className="absolute inset-0 font-gilroy text-secondary flex flex-col pt-[4%] pl-[13.8%] pr-[9.5%]">
          <h1 className="font-kamilla text-[6.7dvw] leading-none text-end pb-[3.3%]">Gửi Bạn,</h1>
          <p className="text-[1.2dvw] leading-none font-medium text-justify">
            Nếu bạn đang đọc những dòng này, có thể bạn đang chuẩn bị cho một điều gì đó rất quan trọng — lần đầu tiên trong đời bạn bước vào một trải nghiệm thân mật.
            <br />
            <br />
            Và Trang hiểu. Vì Trang cũng từng ở đó.
            <br />
            <br />
            Mình từng là người không biết hỏi ai. Mình từng lo lắng đến mất ngủ. Mình từng nghĩ rằng đau là chuyện bình thường, là "phải chịu" hay mình không chảy máu sau lần đầu là mình bị hỏng chăng? Mình từng tin vào những lời đồn mà sau này mình mới biết — hoàn toàn sai.
            <br />
            <br />
            Và mình ước, giá như ngày đó có ai đó nói cho mình biết:
          </p>
          <br />
          <p className="text-[1.1dvw] leading-none text-center italic">
            "Lần đầu không nhất thiết phải đau, phải ra máu. Bạn có
            <br />
            quyền được chuẩn bị. Bạn có quyền hiểu cơ thể mình."
          </p>
          <br />
          <p className="text-[1.1dvw] leading-none font-medium text-justify">
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
          <h1 className="font-kamilla text-[6.7dvw] leading-none pt-[4%] pl-[12.1%]">Trang</h1>
        </div>

        {/* Decor */}
        <img
          src="/images/decor/letter-decor.png"
          alt="letter-decor"
          className="absolute top-[45.4%] right-[14%] w-[27.7%] rotate-[13.3deg] h-auto object-contain"
        />
      </div>
    </section>
  );
}