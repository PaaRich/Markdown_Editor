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
import { useContext } from "react";
import { CONTEXT_VALUE } from "../store/Context";

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  toggleDel: boolean;
  setToggleDel: React.Dispatch<React.SetStateAction<boolean>>;
  markdown: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
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
  toggleDel,
  isLoading,
}: Props) => {
  //used redefined and localized isOpen
  const localOpen = open;

  const positive = markdown.length > 2;

  //CONTEXT OBJECT
  const VALUE = useContext(CONTEXT_VALUE);

  //CONTEXT API VALUES
  const setIsSubmitted = VALUE.setIsSubmitted;
  const setIsLoading = VALUE.setIsLoading;
  const setIsSuccessful = VALUE.setIsSuccessful;
  const setIsError = VALUE.setIsError;
  const setNameError = VALUE.setNameError;
  const isUpdate = VALUE.isUpdate;
  const id = VALUE.id;

  //const myApiValue = VALUE.apiValue;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (Event) => {
    Event.preventDefault();
    VALUE?.reSet();
    const data: RequestBody = {
      name: name,
      description: markdown,
      createdAt: new Date(),
    };
    //isUpdate specify the stat of item new or old thus patch or post

    if (isUpdate) {
      axios
        .patch(`http://localhost:3000/api/v1/markdown/${id}`, data)
        .then(() => {
          setIsSubmitted(true);
          setIsLoading(false);
          setIsSuccessful(true);
        })
        .catch((err) => {
          err.message === "Request failed with status code 404" &&
            setNameError(true);
          setIsLoading(false);
          setIsError(true);
        });
    } else {
      axios
        .post("http://localhost:3000/api/v1/markdown", data)
        .then(() => {
          setIsSubmitted(true);
          setIsLoading(false);
          setIsSuccessful(true);
        })
        .catch((err) => {
          err.message === "Request failed with status code 404" &&
            setNameError(true);
          setIsLoading(false);
          setIsError(true);
        });
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Container $isOpen={open} $toggleDel={toggleDel}>
        <div>
          <Menu
            onClick={() => {
              setOpen(!localOpen);
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
          <DelBtn
            onClick={() => setToggleDel(true)}
            $positive={positive}
            $isLoading={isLoading}
          >
            <RiDeleteBin6Line size={21} />
          </DelBtn>
          <SaveBtn
            $positive={positive}
            $isLoading={isLoading}
            type="submit"
            onClick={() => {
              setIsLoading(true);
            }}
          >
            <IoSaveOutline size={20} />
            <span>Save Changes</span>
          </SaveBtn>
        </div>
      </Container>
    </form>
  );
};

export default Title;
