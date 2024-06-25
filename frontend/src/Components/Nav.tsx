import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import Item from "./Item";
import { FaRegMoon } from "react-icons/fa6";
import { TiWeatherSunny } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import { TbFileSad } from "react-icons/tb";
//import { Link } from "react-router-dom";
import {
  BackgroundToggle,
  Button,
  Container,
  CloseBtn,
  ItemList,
  NotFound,
} from "../Styled/Nav.styled";
import { ApiValue } from "../App";

interface NavProps {
  open: boolean;
  toggleBg: boolean;
  setToggleBg: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
export interface Item {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}
const Nav = ({
  open,
  toggleBg,
  setToggleBg,
  setOpen,
  setMarkdown,
  setName,
}: NavProps) => {
  const value = useContext(ApiValue);
  const isOpen: boolean = open;
  return (
    <Container $isOpen={isOpen}>
      <div>
        <div>
          <div className="phone_header">MARKDOWN</div>
          <div className="header">
            <p>MY DOCUMENTS</p>
          </div>
          <Button
            onClick={() => {
              setMarkdown(" ");
              setName("Untitled.md");
            }}
          >
            <span>
              <FiPlus />
              New Document
            </span>
          </Button>
          <ItemList>
            {value.length > 0 ? (
              value.map((item: Item) => (
                <Item
                  key={item.id}
                  date={item.createdAt?.split("T")[0]}
                  name={item.name}
                  onclick={() => {
                    setMarkdown(item.description);
                    setName(item.name);
                  }}
                />
              ))
            ) : (
              <NotFound>
                <h2>No Item!</h2>
                <TbFileSad size={100} />
              </NotFound>
            )}
          </ItemList>
        </div>
        <BackgroundToggle $toggleBg={toggleBg}>
          <FaRegMoon />
          <div onClick={() => setToggleBg(() => !toggleBg)}>
            <div></div>
          </div>
          <TiWeatherSunny />
        </BackgroundToggle>
        <CloseBtn
          onClick={() => {
            setOpen(() => !isOpen);
          }}
        >
          <MdOutlineClose size={26} />
        </CloseBtn>
      </div>
    </Container>
  );
};

export default Nav;
