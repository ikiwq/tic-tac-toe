import { MouseEventHandler } from "react";
import "./Tile.css"
import CircleImg from "../../assets/circle.png"
import CrossImg from "../../assets/cross.png"
import { PLAYER_X } from "../../constanstx";

type Props = {
  className: string
  value: string
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Tile = (props: Props) => {

  const getImageSrc = (playerValue: string) => {
    if (playerValue === "" || playerValue === null) return "";
    return props.value == PLAYER_X ? CrossImg : CircleImg;
  }

  return (
    <div
      onClick={props.onClick}
      className={`tile ${props.className}`}>
      <img src={getImageSrc(props.value)} />
    </div>
  )
}

export default Tile