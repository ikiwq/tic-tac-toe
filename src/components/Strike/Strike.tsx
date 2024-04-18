import "./Strike.css"

type Props = {
  strikeClass: string
}

const Strike = (props: Props) => {
  return (
    <div className={`strike ${props.strikeClass}`}></div>
  )
}

export default Strike