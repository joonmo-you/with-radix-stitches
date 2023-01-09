import React from "react";
import Link from "next/link";
import { Separator } from "../../src/components";
import { styled, css, Flex } from "../../src/styles";

const MenuItem = styled("span", {
  fontSize: "$1",
  color: "$gray900",
  "&.primary": {
    color: "$primary",
  },
});

const StyledSeparator = styled(Separator, {
  width: "1px",
  height: "13px",
  margin: "0 $4",
  backgroundColor: "$gray500",
});

export default function TopMenu() {
  return (
    <Flex css={{ height: "35px" }} row justify="end" align="center">
      <Link href="https://www.kurly.com/member/signup">
        <MenuItem className="primary">회원가입</MenuItem>
      </Link>
      <StyledSeparator />
      <Link href="https://www.kurly.com/member/login">
        <MenuItem>회원가입</MenuItem>
      </Link>
      <StyledSeparator />
      <Link href="https://www.kurly.com/board/notice">
        <MenuItem>고객센터</MenuItem>
      </Link>
    </Flex>
  );
}
