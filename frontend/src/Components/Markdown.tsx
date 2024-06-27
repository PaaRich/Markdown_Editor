import { IoEyeOutline } from "react-icons/io5";
import { Container, Header } from "../Styled/Markdown.styled";
import { RequestBody } from "./TitleBar";
import axios from "axios";

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
  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (Event) => {
    Event.preventDefault();

    //request body
    const data: RequestBody = {
      //name: name,
      description: markdown,
      createdAt: new Date(),
    };

    axios
      .post("http://localhost:3000/api/v1/markdown", data)
      .then((response) => console.log(`${response} returned`))
      .catch((err) => console.log(err));
  };

  return (
    <Container $toggleBg={toggleBg} $toggle={toggle}>
      <Header $toggleBg={toggleBg} $toggle={toggle}>
        <h5>MARKDOWN</h5>
        <IoEyeOutline onClick={() => setToggle(true)} />
      </Header>
      <form onSubmit={handleOnSubmit}>
        <textarea
          autoFocus
          placeholder="Type your markdown"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </form>
    </Container>
  );
};

export default Markdown;
