import { ItemStyled } from "../Styled/Nav.styled";
import { CiFileOn } from "react-icons/ci";
interface ItemProps {
  date: string;
  name: string;
}
const Item = (props: ItemProps) => {
  return (
    <ItemStyled>
      <CiFileOn size={23} />
      <div>
        <p>{props.date}</p>
        <p>{props.name}</p>
      </div>
    </ItemStyled>
  );
};

export default Item;
