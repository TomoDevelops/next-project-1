import Link from "next/link";
import { Montserrat, Source_Sans_Pro } from "next/font/google";
import { UilSearch, UilPlus } from "@iconscout/react-unicons";
import Image from "next/image";

// import "./globals.css";
import Button from "@/app/components/button/Button";
import SuggestedAccContainer from "@/app/components/suggestedAccContainer/SuggestedAccContainer";
import SidebarNavs from "@/app/components/sidebarNavs/SidebarNavs";

export const metadata = {
  title: "TikTok - Make Your Day",
  description:
    "TikTok - trends start here. On a device or on the web, viewers can watch and discover millions of personalized short videos. Download the app to get started.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-montserrat",
});

const source = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-source",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${source.variable} custom-scrollbar flex min-h-screen flex-col justify-start bg-neutral-900 font-montserrat text-base`}
      >
        <header className="fixed z-50 flex h-[60px] w-full items-center justify-around bg-main shadow-header">
          <nav className="flex h-full w-full items-center justify-between px-4 lg:px-5">
            <div className="min-w-[100px]">
              <Link href="/">
                <Image src="/images/logo.svg" height={42} width={118} />
              </Link>
            </div>
            <div className="min-w-[200px] py-2">
              <form className="flex items-center overflow-hidden rounded-[92px] bg-grayTransparent px-4 py-2">
                <input
                  className="w-[252px] border-none bg-transparent text-sm leading-[22px] caret-mainRed outline-none"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search accounts and videos"
                />
                <span className="-mx-1 h-[28px] w-px bg-grayTransparent"></span>
                <button
                  className="-my-3 -mr-4 ml-0 cursor-pointer border-none bg-transparent py-4 pr-4 pl-3 outline-none hover:bg-neutral-700"
                  type="submit"
                >
                  <UilSearch size="20" color="rgba(255, 255, 255, 0.34)" />
                </button>
              </form>
            </div>
            <div className="flex justify-around gap-4">
              <Button bgColor={"transparent"} width={113} height={36}>
                <UilPlus size="20" color="#ffffffe6" />
                Upload
              </Button>
              <Button bgColor={"red"} width={100} height={36}>
                Login
              </Button>
            </div>
          </nav>
        </header>
        <main className="mt-[60px] flex w-screen justify-between self-center">
          <aside className="relative min-w-[356px]">
            <div className="custom-scrollbar fixed top-[60px] bottom-0 z-40 w-[356px] overflow-y-auto overflow-x-hidden overscroll-y-contain pt-5 pr-0 pb-6 pl-2">
              <SidebarNavs />
              <div className="relative py-6 px-2 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-grayTransparent after:content-['']">
                <p className="leading-[22px] text-white text-opacity-50">
                  Log in to follow creators, like videos, and view comments.
                </p>
                <div className="mt-5 w-full">
                  <Button
                    className="h-12 w-[325px] text-lg"
                    bgColor={"outline"}
                  >
                    Log in
                  </Button>
                </div>
              </div>
              <SuggestedAccContainer />
            </div>
          </aside>
          <div className="min-h-screen min-w-[692px] py-6 px-0">{children}</div>
        </main>
      </body>
    </html>
  );
}
