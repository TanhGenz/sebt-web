import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Floating() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="fixed z-10 left-0 bottom-0 -translate-y-1/2 drop-shadow-2xl"
      >
        <img
          src="/icons/floating-button.png"
          className="w-[70px] aspect-auto cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </motion.div>
      {/* Modal */}
      <AnimatePresence>
        {open && (
          <div
            className="fixed z-10 inset-0 bg-black/50 flex items-center justify-center "
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }} // mở: từ trên xuống
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }} // đóng: trượt lên trên ✅
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative sm:w-auto w-[330px] sm:h-[92dvh] h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/letter-floating.png"
                alt="letter float"
                className="w-full h-full absolute inset-0 object-fill sm:static"
              />

              {/* X button */}
              <motion.div
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute sm:-top-[3dvh] -top-[15px] sm:-right-[3dvh] -right-[15px] cursor-pointer sm:w-[8dvh] w-[38px] aspect-square sm:p-[0.5dvh] p-[2.5px] rounded-full bg-secondary z-20"
              >
                <div className="flex items-center justify-center rounded-full aspect-square bg-[#D8CCBF]">
                  <p className="font-lamoric sm:text-[3dvh] text-[23px] text-secondary">
                    X
                  </p>
                </div>
              </motion.div>

              {/* text-letter */}
              <div className="sm:absolute relative inset-0 w-full z-10 top-0 px-[5dvh] ">
                <div className="font-lamoric sm:text-[4.4dvh] text-[18px] font-bold text-secondary tex-start">
                  <h1>"Học cho mình,</h1>
                  <h1>trao cho em."</h1>
                </div>
                <h1 className="font-kamilla sm:text-[11.6dvh] text-[48px] font-bold text-secondary text-end">
                  Gửi bạn,
                </h1>
                <div className="flex flex-col sm:gap-[1dvh] gap-1 font-gilroy sm:text-[1.5dvh] text-[8px] text-secondary text-start">
                  <p>
                    Ở nhiều nhà tình thương, trại mồ côi và vùng sâu vùng xa,
                    các em nhỏ lớn lên mà chưa từng được ai nói cho nghe: "Cơ
                    thể con là của con. Con có quyền nói không." Có em chưa biết
                    tên gọi đúng của các bộ phận trên cơ thể mình. Có em không
                    biết rằng sự đụng chạm khiến mình khó chịu — là không bình
                    thường, và em hoàn toàn có quyền từ chối.
                  </p>
                  <p>
                    Tụi mình muốn thay đổi điều đó. Và tụi mình tin rằng kiến
                    thức về cơ thể, về sự đồng thuận, về quyền được an toàn —
                    không phải đặc quyền của riêng ai.
                  </p>
                  <p>
                    Tụi mình sẽ trích một phần doanh thu từ mỗi khoá học để tổ
                    chức các buổi giáo dục giới tính miễn phí cho trẻ em tại nhà
                    tình thương, trại mồ côi và vùng sâu vùng xa — nơi các em ít
                    có cơ hội tiếp cận kiến thức để bảo vệ chính mình.
                  </p>
                  <p>
                    Mỗi khoá học bạn đăng ký không chỉ là kiến thức cho bạn — mà
                    còn là một phần buổi học miễn phí cho một em nhỏ ở nơi mà
                    "giáo dục giới tính" vẫn là ba từ khiến người lớn đỏ mặt
                    quay đi.
                  </p>
                  <p>
                    Bạn không cần làm gì thêm. Chỉ cần bạn chọn học cùng SEBT,
                    bạn đã đồng hành cùng tụi mình rồi.
                  </p>
                  <p>Bạn học để hiểu mình — Các em học để được an toàn.</p>
                  <p>Cảm ơn bạn đã tin tưởng và đồng hành cùng chúng mình.</p>
                </div>
                <div className="sm:pt-[2dvh] pt-[5px] font-gilroy sm:text-[1.5dvh] text-[8px] text-secondary text-start">
                  <p>Thương mến,</p>
                  <p>Trang — SexEdu by Trang</p>
                </div>
                <h1 className="font-kamilla sm:text-[8dvh] text-[48px] text-secondary text-end ">
                  Trang
                </h1>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
