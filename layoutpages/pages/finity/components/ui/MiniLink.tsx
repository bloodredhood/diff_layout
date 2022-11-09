const MiniLink = ({text}: {text: string}) => {

  const style = {textDecoration: "none", color: "258AFF", fontSize: "16px"}

  return (
    <a style={style} href="">
      {text}
    </a>
  )
}

export default MiniLink