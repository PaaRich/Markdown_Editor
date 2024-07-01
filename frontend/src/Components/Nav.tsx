import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import Item from "./Item";
import { FaRegMoon } from "react-icons/fa6";
import { TiWeatherSunny } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import { TbFileSad } from "react-icons/tb";
import {
  BackgroundToggle,
  Button,
  Container,
  CloseBtn,
  ItemList,
  NotFound,
} from "../Styled/Nav.styled";
import { CONTEXT_VALUE } from "../store/Context";

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
  //CONTEXT OBJECT
  const VALUE = useContext(CONTEXT_VALUE);
  const post = VALUE.post;
  const setIsLoading = VALUE.setIsLoading;
  const setIsUpdate = VALUE.setIsUpdate;
  const setId = VALUE.setId;

  const isOpen: boolean = open;

  //console.log(post[0].id);
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
              setOpen(false);
              setMarkdown(" ");
              setName("New.md");
              setIsLoading(false);
              setIsUpdate(false);
            }}
          >
            <span>
              <FiPlus size={20} />
              New Document
            </span>
          </Button>
          <ItemList>
            {post?.length > 0 ? (
              [...post]?.reverse().map((item: Item) => (
                <Item
                  key={item.id}
                  date={item.createdAt?.split("T")[0]}
                  name={item.name}
                  onclick={() => {
                    setMarkdown(item.description);
                    setName(item.name);
                    setIsUpdate(true);
                    setId(item.id);
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
