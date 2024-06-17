import { FiPlus } from "react-icons/fi";
import Item from "./Item";
import { FaRegMoon } from "react-icons/fa6";
import { TiWeatherSunny } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import {
  BackgroundToggle,
  Button,
  Container,
  CloseBtn,
} from "../Styled/Nav.styled";

interface NavProps {
  open: boolean;
  toggleBg: boolean;
  setToggleBg: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav = ({ open, toggleBg, setToggleBg, setOpen }: NavProps) => {
  const isOpen: boolean = open;
  return (
    <Container $isOpen={isOpen}>
      <div>
        <div>
          <div className="phone_header">MARKDOWN</div>
          <div className="header">
            <p>MY DOCUMENTS</p>
          </div>
          <Button>
            <span>
              <FiPlus />
              New Document
            </span>
          </Button>
          <Item date="01 April 2022" name="welcome.md" />
          <Item date="05 July 2022" name="README.md" />
          <Item date="09 May 2022" name="description.md" />
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
            console.log("clicked");
          }}
        >
          <MdOutlineClose size={26} />
        </CloseBtn>
      </div>
    </Container>
  );
};

export default Nav;
