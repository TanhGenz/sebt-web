/**
 * Footer.tsx - Phần chân trang
 *
 * Component đơn giản, không props.
 * className "bg-frame2" thường là custom color trong tailwind.config.
 */

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white">
      <div className="container">
        <div className="flex h-24 items-center justify-center">
          <p className="font-gilroy text-sm tracking-widest">COMING SOON</p>
        </div>
      </div>
    </footer>
  );
}
