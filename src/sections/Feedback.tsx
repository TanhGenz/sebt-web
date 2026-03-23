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
        "relative w-full md:h-[160px] h-[128px] flex items-center",
        isLeft ? "xl:pr-[230px] pr-[15px]" : "xl:pl-[230px] pl-[15px]",
      ].join(" ")}
    >
      {/* CIRCLE */}
      <div
        className={[
          "absolute z-10 bg-secondary rounded-full border border-beige",
          "flex items-center justify-center text-center",
          "md:size-[160px] size-[68px]",
          "md:top-1/2 top-0  md:-translate-y-1/2 translate-y-[5%]",
          isLeft ? "md:left-0 left-5" : "md:right-0 right-5",
        ].join(" ")}
      >
        <p className="px-2 font-gilroy text-beige font-semibold leading-tight md:text-[15px] text-[7.8px]">
          {name} - {age} tuổi
        </p>
      </div>
      {/* BOX */}
      <div
        className={[
          "border-beige",
          "md:py-[26px] py-[13.1px]",
          isLeft
            ? [
              "md:ml-[80px] ml-[60px] md:border-l-none border-l border-t border-b border-r",
              "md:pr-[14px] pr-[7.25px] md:pl-[102px] pl-[49.3px]",
            ].join(" ")
            : [
              "md:mr-[80px] mr-[60px] md:border-r-none border-r border-t border-l border-b",
              "md:pr-[102px] pr-[49.3px] md:pl-[14px] pl-[7.25px]",
            ].join(" "),
        ].join(" ")}
      >
        <p className="font-gilroy text-beige italic text-[16px] leading-none">
          “ {quote} ”
        </p>
      </div>
    </div> 
  )
}

export default function Pricing() {
  return (
    <section className="relative w-full bg-secondary">
      <div className="-translate-y-[90%] top-0 right-0 left-0 ">
          <img src="images/decor/paper.png" alt="paper" className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center md:pb-[12vw] pb-[20px]">
        {/*  */}
        <div className="flex flex-col items-center">
          <h1 className="font-lamoric text-beige md:text-[4.4dvw] text-[34px] leading-none ">
            HỌC VIÊN NÓI GÌ
          </h1>
          <img
            src="src\assets\icons\line-white.svg"
            alt="content-section-line"
            className="w-[28.6dvw] h-auto object-contain md:block hidden"
          />
        </div>

        <div className="flex w-full flex-col gap-18px md:px-[15.6dvw] px-[15px]">
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
      <div className="relative z-10 translate-y-[100%] bottom-1 right-0 left-0">
        <img src="images/decor/finalDecor/paper.png" alt="paper" className="w-full object-contain" />
      </div>
    </section>
  )
}