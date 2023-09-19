"use client";

import { useRouter } from "next/navigation";
import { showMoreProps } from "@/types/index";
import { updateSearchParams } from "@/utils/index";
import CustomButton from "./CustomButton";

const ShowMore = ({pageNamber, isNext}: showMoreProps) => {
  const router = useRouter();
  const handleNavigation = ()=>{
    const newLimit = (pageNamber + 1) * 10;
    const newPathName = updateSearchParams("limit",`${newLimit}`);
    router.push(newPathName);
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
    {!isNext && (
      <CustomButton
        btnType="button"
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    )}
  </div>
  )
};

export default ShowMore