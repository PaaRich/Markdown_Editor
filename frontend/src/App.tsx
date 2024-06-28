import { ThemeProvider } from "styled-components";
import { useState, useContext } from "react";
import { Container, Home } from "./Styled/Container.styled";
import { MarkPreContainer } from "./Styled/Container.styled";
import { GlobalStyle } from "./Styled/GlobalStyle";
import Nav from "./Components/Nav";
import TitleBar from "./Components/TitleBar";
import Markdown from "./Components/Markdown";
import Editor from "./Components/Editor";
import DeletePopUp from "./Components/DeletePopUp";
import { Loader } from "./Styled/Container.styled";
import Feedback from "./Components/Feedback";
import { FaRegCheckCircle } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { CONTEXT_VALUE } from "./store/Context";

function App() {
  //markdown name
  const [name, setName] = useState<string>("Welcome.md");

  //markdown input
  const [markdown, setMarkdown] = useState<string>(" ");

  //toggle nav component
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //toggle preview component
  const [toggle, setToggle] = useState<boolean>(false);

  //toggle delete component
  const [toggleDel, setToggleDel] = useState<boolean>(false);

  //toggle background
  const [toggleBg, setToggleBg] = useState<boolean>(true);

  const theme = {
    backgroundColors: {
      titleBar: "rgb(43,45,49)",
      nav: "rgb(29,31,34)",
      markdown_preview: "rgb(21,22,25)",
      header: "rgb(29,31,34)",
      brickRed: "rgb(228,102,67)",
      lightBrickRed: "rgb(243,151,101)",
      lightBg: "rgb(255,255,255)",
      dimBg: "#F5F5F5",
      headColor: "rgb(124,129,135)",
      blackBgTextColor: "#C1C4CB",
    },
  };

  //CONTEXT OBJECT=VALUE
  const VALUE = useContext(CONTEXT_VALUE);

  //destructured object properties
  const isLoading = VALUE?.isLoading;
  const isSuccessful = VALUE?.isSuccessful;
  const isError = VALUE?.isError;
  const nameError = VALUE?.nameError;
  const isDeleted = VALUE.isDeleted;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Nav
            toggleBg={toggleBg}
            setToggleBg={setToggleBg}
            open={isOpen}
            setOpen={setIsOpen}
            setMarkdown={setMarkdown}
            setName={setName}
          />
          <Home $isOpen={isOpen} $toggleDel={toggleDel} $isLoading={isLoading}>
            <TitleBar
              toggleDel={toggleDel}
              setToggleDel={setToggleDel}
              setOpen={setIsOpen}
              setToggle={setToggle}
              open={isOpen}
              markdown={markdown}
              name={name}
              setName={setName}
              setMarkdown={setMarkdown}
              isLoading={isLoading}
            />
            <MarkPreContainer onClick={() => isOpen && setIsOpen(false)}>
              <Markdown
                markdown={markdown}
                setMarkdown={setMarkdown}
                toggleBg={toggleBg}
                toggle={toggle}
                setToggle={setToggle}
              />
              <Editor
                toggleBg={toggleBg}
                markdown={markdown}
                toggle={toggle}
                setToggle={setToggle}
              />
            </MarkPreContainer>
          </Home>
          <DeletePopUp
            toggleBg={toggleBg}
            toggleDel={toggleDel}
            setToggleDel={setToggleDel}
            name={name}
            setName={setName}
            setMarkdown={setMarkdown}
          />

          {/* loader */}
          {isLoading && <Loader />}

          {/* Success feedback */}
          {isSuccessful && (
            <Feedback
              text="Saved successfully"
              icon={<FaRegCheckCircle color="green" size={24} />}
            />
          )}

          {/* Error feedback */}
          {isError && (
            <Feedback
              text={
                nameError ? "Document exist already" : "Something went wrong"
              }
              icon={<TiCancel color="red" size={20} />}
            />
          )}

          {/* Delete alert */}
          {isDeleted && (
            <Feedback
              text="Document deleted"
              icon={<TiCancel color="red" size={20} />}
            />
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
