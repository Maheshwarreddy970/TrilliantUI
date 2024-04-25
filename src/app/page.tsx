import { SideNavbar } from "@/components/navbar/SideNavbar";
import { Individualaccordion } from "@/uicomponents/Individualaccordion";


export default function Home() {
  return (
    <div className="flex mr-12">
      <div className="  fixed h-full w-3/12 px-12 mt-20 flex justify-center">
        <SideNavbar ></SideNavbar>
      </div>
      <div className="w-full mt-20 ml-80  block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className=" p-5">
          <Individualaccordion></Individualaccordion>
        </div>
      </div>
    </div>
  );
}
