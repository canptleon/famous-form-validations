import React, { useState } from "react";
import { Contents } from "@/components/Tabs";
import FormikYupForm from "@/components/Desktop/FormikYupForm";
import FormikZodForm from "@/components/Desktop/FormikZodForm";
import ReactHookForm from "@/components/Desktop/ReactHookForm";
import ReactFinalForm from "@/components/Desktop/ReactFinalForm";
import menuData from "@/data/static/menu.json";

const backgroundStyles = [
  "linear-gradient(to right, #d16ba5, #ca74b5, #c17dc2, #b686ce, #aa8fd8, #9b9ce7, #89a9f2, #76b5fa, #54c9ff, #37dbff, #3aecfe, #5ffbf1)",
  "linear-gradient(to right, #5ffbf1, #00e8ff, #00d2ff, #2cb8ff, #7b9aff, #8991f9, #9687f2, #a27de9, #868ceb, #7197e7, #679fde, #6ba5d1)",
  "linear-gradient(to right, #6ba5d1, #71a1dc, #829be3, #9a92e5, #b587e0, #b779d7, #ba69cd, #bd58c1, #a644b8, #8e30b0, #731ba8, #5503a1)",
  "linear-gradient(to right, #5503a1, #0056ce, #007ed6, #009fc6, #00bab3, #3ac3a3, #64cb8f, #8cd07a, #9cc86a, #abc05c, #b8b751, #c4ae4a)",
];

function DesktopHomepageLayout() {
  const [activeSlug, setActiveSlug] = useState<number>(0);

  return (
    <div>
      <div className="fixed inset-0 transition-opacity duration-500">
        {backgroundStyles.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              activeSlug === index ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            style={{ backgroundImage: bg }}></div>
        ))}
      </div>
      <div className="flex items-center justify-center relative z-10 mb-5">
        {menuData && (
          <div className="flex mb-[12px]">
            {menuData.map((item, index) => (
              <button
                key={item.id}
                className={`${
                  activeSlug === index
                    ? "border-b-[2px] border-[#cf6ca7] [filter:drop-shadow(2px_4px_2px_gray)] text-[#4f46e5]"
                    : "text-white border-b-[2px] border-white [filter:drop-shadow(0px_0px_0px_transparent)]"
                } border-b-[2px] px-[16px] py-[10px] text-base not-italic leading-[22px] transition-all`}
                onClick={() => setActiveSlug(index)}>
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center relative z-10">
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
