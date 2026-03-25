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
        "relative w-full h-[160px] flex items-center",
        isLeft ? "xl:pr-[230px] pr-[180px]" : "xl:pl-[230px] pl-[180px]",
      ].join(" ")}
    >
      {/* CIRCLE */}
      <div
        className={[
          "absolute z-10 bg-secondary rounded-full border border-beige",
          "flex items-center justify-center text-center",
          "size-[160px]",
          "top-1/2 -translate-y-1/2",
          isLeft ? "left-0" : "right-0",
        ].join(" ")}
      >
        <p className="px-2 font-gilroy text-beige font-semibold leading-tight text-[15px]">
          {name} - {age} tuổi
        </p>
      </div>
      {/* BOX */}
      <div
        className={[
          "border-beige",
          "py-[26px]",
          isLeft
            ? [
              "ml-[80px] border-t border-b border-r",
              "pr-[14px] pl-[102px]",
            ].join(" ")
            : [
              "mr-[80px] border-t border-l border-b",
              "pr-[102px] pl-[14px]",
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
      {/* paper decor */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%]">
        <img src="images/decor/paper-top.svg" alt="paper-top" className="w-full h-auto object-contain" />
      </div>
      <div className="flex flex-col items-center py-[12px]">
        {/* title */}
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[64px] text-[48px] font-lamoric text-beige leading-none">
            HỌC VIÊN NÓI GÌ
          </h1>
          <img
            src="src\assets\icons\line-white.svg"
            alt="content-section-line"
            className="xl:w-[412px] w-[342px] h-auto object-contain hidden md:block"
          />
        </div>
        <div className="w-full flex flex-col gap-[18px] xl:px-[225px] px-[160px]">
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
      <img src="images/decor/paper-bottom-light.svg" alt="paper-bottom" className="w-full h-auto object-contain" />
    </section>
  )
}