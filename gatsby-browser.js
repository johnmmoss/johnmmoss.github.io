import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./src/components/CodeBlock";
import Prism from "prism-react-renderer/prism";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "./src/styles/global.css";

const component = {
  pre: CodeBlock,
};

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-csharp");

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>;
};
