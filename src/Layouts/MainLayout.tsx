/** all section contents in folder sectionnsectionn **/

import type { ReactNode } from "react";
import Footer from "../components/Footer";
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-0 overflow-x-hidden w-full max-w-full">
      <main className="min-w-0 w-full max-w-full">{children}</main>
      <Footer />
    </div>
  );
}