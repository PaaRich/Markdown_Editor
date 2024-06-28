import { memo } from "react";
import { FeedbackContainer } from "../Styled/Container.styled";
interface Props {
  text: string;
  icon: React.ReactElement;
}
const Feedback = memo(({ text, icon }: Props) => {
  return (
    <FeedbackContainer>
      <div>
        {icon}
        <p>{text}</p>
      </div>
    </FeedbackContainer>
  );
});

export default Feedback;
