import React from "react";
import { ItemStyled } from "../Styled/Nav.styled";
import { CiFileOn } from "react-icons/ci";
interface ItemProps {
  date?: string;
  name?: string;
  onclick?: () => void;
}

const Item = (props: ItemProps) => {
  return (
    <React.Fragment>
      <ItemStyled onClick={props.onclick}>
        <CiFileOn size={23} />
        <div>
          <p>{props.date}</p>
          <p>{props.name}</p>
        </div>
      </ItemStyled>
    </React.Fragment>
  );
};

export default Item;
