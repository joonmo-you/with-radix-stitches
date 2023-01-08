"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@radix-ui/react-separator";
import { styled, css, Flex } from "../styles";

const NavigationItem = styled("span", {
  fontWeight: "500",
  fontSize: "$6",
  color: "$gray600",
  "&:hover": {
    color: "$primary",
  },
});

const linkClass = css({
  textDecoration: "none",
});

const separatorClass = css({
  width: "1px",
  height: "14px",
  mx: "$4",
  backgroundColor: "$gray500",
});

export default function SiteNaviation() {
  const pathname = usePathname();
  const isBeautyKurly = pathname?.includes("beauty");

  return (
    <Flex align="center">
      <Link className={linkClass()} href="/">
        <NavigationItem css={{ color: isBeautyKurly ? undefined : "$primary" }}>마켓컬리</NavigationItem>
      </Link>
      <Separator className={separatorClass()} />
      <Link className={linkClass()} href="/beauty">
        <NavigationItem css={{ color: isBeautyKurly ? "$primary" : undefined }}>뷰티컬리</NavigationItem>
      </Link>
    </Flex>
  );
}
