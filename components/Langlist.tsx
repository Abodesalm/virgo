import Button from "./Button";
import Icon from "./Icon";

export default function Langlist() {
  return (
    <Button style="ui-blur" className="buttonRow">
      <>
        <p className="capitalize">English</p>
        <Icon i={"downArrow"} />
      </>
    </Button>
  );
}
