import { Roboto } from "next/font/google";

import { Header } from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className={`pt-[80px] ${roboto.className}`}>
        <TooltipProvider>{children}</TooltipProvider>
      </div>
    </>
  );
}
