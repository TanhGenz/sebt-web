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
    <section className="w-full bg-secondary">
      <div className="flex flex-col items-center pb-[12vw] pt-[6vw]">
        <h1 className="font-lamoric text-beige text-[9vw] leading-none ">
          HỌC VIÊN NÓI GÌ
        </h1>

        <div className="mt-[8vw] flex w-full flex-col gap-[18px] xl:px-[15.6dvw] px-[12dvw]">
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