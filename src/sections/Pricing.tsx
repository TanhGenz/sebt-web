const items = [
    { type: "image", img: "/images/demo-imgs.svg" },
    { type: "text", title: "VIDEO", desc: "Toàn bộ 7 phần..." },
    { type: "image", img: "/images/demo-imgs.svg" },
    { type: "text", title: "Tài liệu", desc: "PDF slide" },

    { type: "text", title: "Bài tập", desc: "Bài tập thực hành" },
    { type: "image", img: "/images/demo-imgs.svg" },
    { type: "text", title: "Nhóm hỗ trợ", desc: "Group riêng" },
    { type: "image", img: "/images/demo-imgs.svg" },

    { type: "image", img: "/images/demo-imgs.svg" },
    { type: "text", title: "Workshop", desc: "Zoom hàng tháng" },
    { type: "image", img: "/images/demo-imgs.svg" },
    { type: "text", title: "Q&A", desc: "Hỏi đáp trong khóa học" },
]
export default function Pricing() {

    return (
        <section className="w-full bg-beige">
            <div className="flex flex-col items-center">
                <h1 className="font-lamoric text-primaryText text-[4.4dvw] gap">
                    QUYỀN LỢI & BẢNG GIÁ
                </h1>
                <div className="w-[71.5dvw] ">
                    <div className="grid grid-cols-4">

                        {items.map((item, i) => (

                            <div key={i} className="border border-red-900 h-[240px]">

                                {item.type === "image" ? (
                                    <img
                                        src={item.img}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                )}

                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}