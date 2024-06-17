import { IoEyeOutline } from "react-icons/io5";
import { Container, Header } from "../Styled/Markdown.styled";

interface Props {
  markdown: string;
  toggleBg: boolean;
  toggle: boolean;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const Markdown = ({
  markdown,
  setMarkdown,
  toggleBg,
  setToggle,
  toggle,
}: Props) => {
  return (
    <Container $toggleBg={toggleBg} $toggle={toggle}>
      <Header $toggleBg={toggleBg}>
        <h5>MARKDOWN</h5>
        <IoEyeOutline onClick={() => setToggle(true)} />
      </Header>
      <textarea
        autoFocus
        placeholder="Type your markdown"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </Container>
  );
};

export default Markdown;
