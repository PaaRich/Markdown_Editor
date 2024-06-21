import { ThemeProvider } from "styled-components";
import { useState, useEffect, createContext } from "react";
import { Container, Home } from "./Styled/Container.styled";
import { MarkPreContainer } from "./Styled/Container.styled";
import { GlobalStyle } from "./Styled/GlobalStyle";
//import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Nav from "./Components/Nav";
import TitleBar from "./Components/TitleBar";
import Markdown from "./Components/Markdown";
import Editor from "./Components/Editor";
import DeletePopUp from "./Components/DeletePopUp";

//api data interface
interface Api {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: Date;
}
interface ApiArray {
  [index: number]: Api;
}
export const ApiValue = createContext<ApiArray | null>(null);
function App() {
  //markdown name
  const [name, setName] = useState<string>("Welcome.md");
  //markdown input
  const [markdown, setMarkdown] = useState<string>("");
  //toggle nav component
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //toggle preview component
  const [toggle, setToggle] = useState<boolean>(false);
  //toggle delete component
  const [toggleDel, setToggleDel] = useState<boolean>(false);
  //toggle background
  const [toggleBg, setToggleBg] = useState<boolean>(true);

  //BACKEND DATA MANAGEMENT
  const [apiValue, setApiValue] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/markdown/");
    setApiValue(response.data.response);
    console.log(apiValue);
  };
  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <>
      <ApiValue.Provider value={apiValue}>
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
            <Home $isOpen={isOpen} $toggleDel={toggleDel}>
              <TitleBar
                toggleDel={toggleDel}
                setToggleDel={setToggleDel}
                setOpen={setIsOpen}
                setToggle={setToggle}
                open={isOpen}
                markdown={markdown}
                name={name}
                setName={setName}
              />
              <MarkPreContainer>
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
            />
          </Container>
        </ThemeProvider>
      </ApiValue.Provider>
    </>
  );
}

export default App;
