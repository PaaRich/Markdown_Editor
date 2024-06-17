import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Component = (language: string, value: string) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={dark}
      showLineNumbers={true}
      wrapLines={true}
    >
      {value}
    </SyntaxHighlighter>
  );
};
