import React, { ReactElement, ReactNode, memo } from "react";
import MobileHeader from "./GeneralLayouts/Mobile/Header";
import DesktopHeader from "./GeneralLayouts/Desktop/Header";
import MobileFooter from "./GeneralLayouts/Mobile/Footer";
import DesktopFooter from "./GeneralLayouts/Desktop/Footer";

interface LayoutProps {
  children: ReactElement | ReactElement[] | ReactNode;
  activeIndex?: number;
  isMobile?: boolean;
}

function Layout(props: LayoutProps) {

  return (
    <>
      {props.isMobile ? (
        <>
          <MobileHeader />
          {props.children}
          <MobileFooter/>
        </>
      ) : (
        <div className="max-h-screen">
          <DesktopHeader />
          {props.children}
          <DesktopFooter/>
        </div>
      )}
    </>
  );
}

export default memo(Layout);