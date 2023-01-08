"use client";

import * as React from "react";
import { Label } from "@radix-ui/react-label";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { styled, css } from "../src/styles";

const labelClass = css({
  display: "flex",
  width: "fit-content",
  border: "1px solid $purple900",
  borderRadius: "$3;",
});

const Input = styled("input", {
  width: "370px",
  height: "$9",
  p: "$4",
  pr: "0",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
});

const Button = styled("button", {
  height: "$9",
  p: "$4",
  border: "none",
  backgroundColor: "inherit",
  "&:hover": {
    cursor: "pointer",
  },
});

export default function SearchBox() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <Label className={labelClass()}>
          <Input type="text" id="search" name="search" placeholder="검색어를 입력해주세요" />
          <Button type="submit">
            <MagnifyingGlassIcon width={24} height={24} color="#5f0080" />
          </Button>
        </Label>
      </p>
    </form>
  );
}
