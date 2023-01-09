import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../../src/components";
import { styled, css, Flex } from "../../src/styles";

const NavigationItem = styled("span", {
  fontWeight: "500",
  fontSize: "$6",
  color: "$gray600",
  "&.active-link": {
    color: "$primary",
  },
  "&:hover": {
    color: "$primary",
  },
});

const StyledSeparator = styled(Separator, {
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
      <Link href="/">
        <NavigationItem className={isBeautyKurly ? undefined : "active-link"}>마켓컬리</NavigationItem>
      </Link>
      <StyledSeparator />
      <Link href="/beauty">
        <NavigationItem className={isBeautyKurly ? "active-link" : undefined}>뷰티컬리</NavigationItem>
      </Link>
    </Flex>
  );
}
