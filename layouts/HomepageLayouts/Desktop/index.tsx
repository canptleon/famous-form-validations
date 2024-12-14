import React, { useState } from "react";
import { Contents } from "@/components/Tabs";
import FormikYupForm from "@/components/Desktop/FormikYupForm";
import FormikZodForm from "@/components/Desktop/FormikZodForm";
import ReactHookForm from "@/components/Desktop/ReactHookForm";
import ReactFinalForm from "@/components/Desktop/ReactFinalForm";
import menuData from "@/data/static/menu.json";

function DesktopHomepageLayout() {

  const [activeSlug, setActiveSlug] = useState<number>(0);
  
  return (
    <div>
      <div className="flex items-center justify-center">
        {menuData && (
          <div className="flex mb-[12px] px-[12px] border-b-[1px] border-mainGray75">
            {menuData.map((item, index) => (
              <button
                key={item.id}
                className={`${
                  activeSlug === index
                    ? "border-b-[2px] border-mainBlue500 text-darkGreen"
                    : "text-mainGray100 border-mainGray100"
                } border-b-[1px] px-[16px] py-[10px] text-base not-italic font-OSSemiBold leading-[22px]`}
                onClick={() => setActiveSlug(index)}>
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex min-h-[800px] items-center justify-center">
        <Contents activeIndex={activeSlug}>
          <FormikYupForm id={0} />
          <FormikZodForm id={1} />
          <ReactHookForm id={2} />
          <ReactFinalForm id={3} />
        </Contents>
      </div>
    </div>
  );
}

export default DesktopHomepageLayout;
