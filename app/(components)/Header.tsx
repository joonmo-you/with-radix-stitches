import * as React from "react";
import TopMenu from "./TopMenu";
import SearchBox from "./SearchBox";
import { styled, Flex } from "../../src/styles";
import SiteNaviation from "./SiteNaviation";

const Header = styled("header", {
  maxWidth: "1100px",
  margin: "auto",
});

export default function GlobalHeader() {
  return (
    <Header>
      <TopMenu />
      <Flex justify="between" align="center">
        <SiteNaviation />
        <SearchBox />
        <Flex row align="center"></Flex>
      </Flex>
    </Header>
  );
}
