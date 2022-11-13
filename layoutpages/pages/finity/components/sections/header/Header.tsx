import Image from 'next/image'
import * as logo from "../../../assets/logo.png"
import BlueButton from "../../ui/BlueButton"
import s from "./Header.module.css"

// const logo = require("../assets/logo.png")

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerItem}>
        <Image src={logo} alt="finity" />
      </div>
      <div className={`${s.headerItem} ${s.headerNav}`}>
        <div>Demos</div>
        <div>Pages</div>
        <div>Support</div>
      </div>
      <div className={s.headerItem} style={{paddingRight: "35px"}} >
        <BlueButton text={"Get Started for Free"} />
      </div>
    </header>
  )
}

export default Header