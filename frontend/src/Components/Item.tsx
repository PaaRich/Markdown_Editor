import { memo } from "react";
import { ItemStyled } from "../Styled/Nav.styled";
import { CiFileOn } from "react-icons/ci";
interface ItemProps {
  date?: string;
  name?: string;
  onclick?: () => void;
}

const Item = memo((props: ItemProps) => {
  return (
    <>
      <ItemStyled onClick={props.onclick}>
        <CiFileOn size={23} />
        <div>
          <p>{props.date}</p>
          <p>{props.name}</p>
        </div>
      </ItemStyled>
    </>
  );
});

export default Item;
