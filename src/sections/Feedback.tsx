type Testimonial = {
    name: string
    age: number
    quote: string
    align: "left" | "right"
  }
  
  const testimonials: Testimonial[] = [
    {
      name: "Hoa",
      age: 23,
      align: "left",
      quote:
        "Mình từng rất sợ. Không biết lần đầu sẽ như thế nào. Nhưng sau khi học xong, mình cảm thấy như được ai đó cầm tay dẫn đi. Lần đầu của mình gần như không đau.",
    },
    {
      name: "Lan",
      age: 24,
      align: "right",
      quote:
        "Mình từng rất sợ. Không biết lần đầu sẽ như thế nào. Nhưng sau khi học xong, mình cảm thấy như được ai đó cầm tay dẫn đi. Lần đầu của mình gần như không đau.",
    },
    {
      name: "Hồng",
      age: 25,
      align: "left",
      quote:
        "Mình từng rất sợ. Không biết lần đầu sẽ như thế nào. Nhưng sau khi học xong, mình cảm thấy như được ai đó cầm tay dẫn đi. Lần đầu của mình gần như không đau.",
    },
    {
      name: "Sen",
      age: 26,
      align: "right",
      quote:
        "Mình từng rất sợ. Không biết lần đầu sẽ như thế nào. Nhưng sau khi học xong, mình cảm thấy như được ai đó cầm tay dẫn đi. Lần đầu của mình gần như không đau.",
    },
  ]
  
  type TestimonialItemProps = Testimonial
  
  function TestimonialItem({
    name,
    age,
    quote,
    align,
  }: TestimonialItemProps) {
    const isLeft = align === "left"
  
    return (
      <div
        className={[
          "relative w-full",
          "w-[860px] ",
          !isLeft ? "ml-auto" : "",
        ].join(" ")}
      >
        {/* BOX */}
        <div
          className={[
            " border-beige",
            "py-[26px] sm:py-[30px] md:py-[34px]",
            isLeft
              ? [
                  "ml-[69px]  border-t border-b border-r",
                  "pl-[40px] pr-[18px] sm:pl-[52px] sm:pr-[28px] md:pl-[68px] md:pr-[36px] lg:pl-[82px] lg:pr-[44px]",
                ].join(" ")
              : [
                  "mr-[69px]   border-t  border-l border-b",
                  "pl-[44px] pr-[82px]",
                ].join(" "),
          ].join(" ")}
        >
          <p className="font-gilroy text-beige italic leading-[1.08] tracking-[0.01em] text-[24px]">
            “ {quote} ”
          </p>
        </div>
  
        {/* CIRCLE */}
        <div
          className={[
            "absolute z-10 rounded-full border border-beige",
            "flex items-center justify-center text-center",
            "size-[138px]",
            "top-1/2 -translate-y-1/2",
            isLeft ? "left-0" : "right-0",
          ].join(" ")}
        >
          <p className="px-2 font-gilroy text-beige font-semibold leading-tight text-[15px]">
            {name} - {age} tuổi
          </p>
        </div>
      </div>
    )
  }
  
  export default function Pricing() {
    return (
      <section className="w-full bg-secondary">
        <div className="flex flex-col items-center pb-[12vw] pt-[6vw]">
          <h1 className="font-lamoric text-beige text-[9vw] leading-none ">
            HỌC VIÊN NÓI GÌ
          </h1>
  
          <div className="mt-[8vw] flex w-full flex-col gap-[10vw] px-[4vw] sm:mt-[6vw] sm:gap-[7vw] sm:px-[6vw] md:mt-[5vw] md:gap-[5vw] md:px-[7vw] lg:mt-[4vw] lg:gap-[4vw] lg:px-[8vw]">
            {testimonials.map((item, index) => (
              <TestimonialItem
                key={`${item.name}-${index}`}
                name={item.name}
                age={item.age}
                quote={item.quote}
                align={item.align}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }