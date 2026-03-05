import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./src/components/CodeBlock";
import YouTubeEmbed from "./src/components/mdx/YouTubeEmbed";

const component = {
  pre: CodeBlock,
  YouTubeEmbed,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>;
};
