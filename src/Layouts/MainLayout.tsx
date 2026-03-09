/** all section contents in folder sectionnsectionn **/

import type { ReactNode } from "react";
import Footer from "../components/Footer";
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}