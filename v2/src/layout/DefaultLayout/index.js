import React, { useEffect, useState } from "react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function DefaultLayout({
  headerShowOffset,
  children,
  ...props
}) {
  const [showHeader, setShowHeader] = useState(!headerShowOffset);

  const onPageScroll = (e) => {
    if (e.target.documentElement.scrollTop > headerShowOffset) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    if (headerShowOffset) {
      window.addEventListener("scroll", onPageScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <SiteHeader
        className={`${
          headerShowOffset ? "fixed top-0 w-full z-10 duration-500" : ""
        } ${headerShowOffset && showHeader ? "" : "-top-full"}`}
      />
      <main className="flex-grow">{children}</main>
      <SiteFooter />
    </div>
  );
}
