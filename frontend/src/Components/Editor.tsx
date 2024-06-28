import ReactMarkdown from "react-markdown";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Container, PreviewContainer, Header } from "../Styled/Editor.styled";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  okaidia,
  duotoneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Editor {
  markdown: string;
  toggle: boolean;
  toggleBg: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Editor = ({ markdown, toggle, setToggle, toggleBg }: Editor) => {
  return (
    <PreviewContainer $toggle={toggle}>
      <Header $toggleBg={toggleBg}>
        <h5>PREVIEW</h5>
        {toggle ? (
          <FaRegEyeSlash onClick={() => setToggle(!toggle)} />
        ) : (
          <IoEyeOutline onClick={() => setToggle(!toggle)} />
        )}
      </Header>
      <Container $toggle={toggle} $toggleBg={toggleBg}>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[rehypeRaw]}
            components={{
              //eslint-disable-next-line @typescript-eslint/no-explicit-any
              code({ inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={toggleBg ? okaidia : duotoneLight}
                    PreTag="div"
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </Container>
    </PreviewContainer>
  );
};

export default Editor;
