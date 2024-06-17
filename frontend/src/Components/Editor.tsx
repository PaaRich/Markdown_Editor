import ReactMarkdown from "react-markdown";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Container, PreviewContainer, Header } from "../Styled/Editor.styled";
//import remarkGfm from "remark-gfm";
// import remarkToc from "remark-toc";

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
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </Container>
    </PreviewContainer>
  );
};

export default Editor;
