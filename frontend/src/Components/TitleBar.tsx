//import { useContext } from "react";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiFileOn } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import axios from "axios";
import {
  Container,
  Menu,
  FileName,
  DelBtn,
  SaveBtn,
} from "../Styled/Title.styled";
//import { useState } from "react";
//import { ApiValue } from "../App";
interface SetOpen {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  toggleDel: boolean;
  setToggleDel: React.Dispatch<React.SetStateAction<boolean>>;
  markdown: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export interface RequestBody {
  name?: string;
  description?: string;
  createdAt?: Date;
}

const Title = ({
  setOpen,
  open,
  setToggleDel,
  markdown,
  name,
  setName,
  setMarkdown,
}: SetOpen) => {
  //const [success, setSuccess] = useState<boolean>(false);
  //const [successMsg,setSuccessMsg]=useState<string>(" ")
  const localOpen = open;
  const positive = markdown.length > 2;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (Event) => {
    Event.preventDefault();
    const data: RequestBody = {
      name: name,
      description: markdown,
      createdAt: new Date(),
    };
    axios
      .post("http://localhost:3000/api/v1/markdown", data)
      .then(() => {
        alert(`${name} saved`);
        setName("Untitled.md");
        setMarkdown(" ");
        // setSuccessMsg()
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Container>
        <div>
          <Menu
            onClick={() => {
              setOpen(!localOpen);
              // setToggle(false);
            }}
          >
            {open ? <MdOutlineClose size={26} /> : <RiMenuFill size={26} />}
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
                pattern="^[a-zA-Z_@]+\.md$"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </FileName>
        </div>

        <div>
          <DelBtn onClick={() => setToggleDel(true)} $positive={positive}>
            <RiDeleteBin6Line size={21} />
          </DelBtn>
          <SaveBtn $positive={positive} type="submit">
            <IoSaveOutline size={20} />
            <span>Save Changes</span>
          </SaveBtn>
        </div>
      </Container>
    </form>
  );
};

export default Title;
