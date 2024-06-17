import { RiMenuFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiFileOn } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { useState } from "react";
import {
  Container,
  Menu,
  FileName,
  DelBtn,
  SaveBtn,
} from "../Styled/Title.styled";

interface SetOpen {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  toggleDel: boolean;
  setToggleDel: React.Dispatch<React.SetStateAction<boolean>>;
  markdown: string;
}

const Title = (props: SetOpen) => {
  const [name, setName] = useState<string>("Welcome.md");
  const localOpen = props.open;
  const positive = props.markdown.length > 2;
  return (
    <Container>
      <div>
        <Menu
          onClick={() => {
            props.setOpen(!localOpen);
            // props.setToggle(false);
          }}
        >
          {props.open ? <MdOutlineClose size={26} /> : <RiMenuFill size={26} />}
        </Menu>

        <h4>MARKDOWN</h4>
        <FileName>
          <div>
            <CiFileOn size={24} />
          </div>
          <label>
            <span>Document name</span>
            <input
              maxLength={20}
              minLength={2}
              type="text"
              pattern="[a-zA-Z]*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </FileName>
      </div>

      <div>
        <DelBtn onClick={() => props.setToggleDel(true)}>
          <RiDeleteBin6Line size={21} />
        </DelBtn>
        <SaveBtn $positive={positive}>
          <IoSaveOutline size={20} />
          <span>Save Changes</span>
        </SaveBtn>
      </div>
    </Container>
  );
};

export default Title;
