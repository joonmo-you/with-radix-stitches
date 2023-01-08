"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { styled, css, Flex } from "../src/styles";

const linkClass = css({
  textDecoration: "none",
});

const MenuItem = styled("span", {
  fontSize: "$1",
  color: "$gray900",
});

const seperatorClass = css({
  width: "1px",
  height: "13px",
  margin: "0 $4",
  backgroundColor: "$gray500",
});

export default function TopMenu() {
  return (
    <Flex row justify="end" align="center">
      <Link className={linkClass()} href="https://www.kurly.com/member/signup">
        <MenuItem css={{ color: "$primary" }}>회원가입</MenuItem>
      </Link>
      <Separator className={seperatorClass()} />
      <Link className={linkClass()} href="https://www.kurly.com/member/login">
        <MenuItem>로그인</MenuItem>
      </Link>
      <Separator className={seperatorClass()} />
      <Link className={linkClass()} href="https://www.kurly.com/board/notice">
        <Flex>
          <MenuItem>고객센터</MenuItem>
          <TriangleDownIcon />
        </Flex>
      </Link>
    </Flex>
  );
}
