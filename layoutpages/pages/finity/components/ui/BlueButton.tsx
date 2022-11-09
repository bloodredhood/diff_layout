const BlueButton = ({text}: {text: string}) => {
  const style = {
    color: "white",
    
  }
  return (
    <div style={{ color: "white", backgroundColor: "#258AFF", borderRadius: "5px", padding: "22px", fontSize: "16px", cursor: "pointer"}}>
      {text}
    </div>
  )
}

export default BlueButton