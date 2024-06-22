import WhatsAppLogo from "@/components/WaLogo";
import { MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid"
import Image from "next/image";

export default function Header() {
  return (
    // className="flex flex-col gap-16 items-center"
    <div >
      <div className=" bg-[#112769] py-2 hidden md:block">
        <div className=" flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex  space-x-5">
            <div className="flex items-center text-xs space-x-2">
              <MapPinIcon className="size-5 text-[#9FB9F0]" />
              <p className="text-[#EDF2FF]">
                Jl. Jend. Sudirman No.210, Sindangrasa, Kec. Ciamis, Kabupaten
                Ciamis, Jawa Barat 46215
              </p>
            </div>
            <div className="flex items-center text-xs space-x-2">
              <PhoneIcon className="size-5 text-[#9FB9F0]" />
              <p className="text-[#EDF2FF]">6281902794798</p>
            </div>
            <div className="flex items-center text-xs space-x-2">
              <WhatsAppLogo/>
              <p className="text-[#EDF2FF]">6281902794798</p>
            </div>
          </div>
          <div className="flex space-x-2 items-center text-xs">
            <p className="text-[#EDF2FF] font-medium ">08:00 - 17:00</p>
            <div className="px-3 py-1  bg-[#95DC6F] rounded-full">
              BUKA
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white after:top-0 shadow-sm ">
        <div className="max-w-6xl mx-auto ">
          <header className="flex items-center justify-between  py-6 mx-4 md:mx-0">
            <a href="/">
              <Image
                src="/bahana-logo.png"
                alt="Bahana Logo"
                className="w-28 md:w-[125px] md:h-[50px]"
                priority={true}
                decoding="async"
               
                width={112}
                height={50}
              />
            </a>
            {/* <Menu className="md:hidden mr-4" /> */}
            <ul className="hidden  md:flex flex-1 justify-evenly font-bold text-[#08154B]">
              <a href="/#produk-category">
                <li>PRODUK</li>
              </a>
              <li>HARGA CASH & BROSUR CREDIT</li>
              <li>SYARAT CASH / CREDIT</li>
              <li>INFO UNDIAN BULANAN</li>
            </ul>
          </header>
        </div>
      </section>
      {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
    </div>
  );
}
