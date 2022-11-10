import Advantages from "./components/sections/advantages/Advantages"
import Header from "./components/sections/header/Header"
import Main from "./components/sections/main/Main"
import s from "./finity.module.css"

const Finity = () => {
  return (
    <div className={s.finity} >
      <Header />
      <Main />
      <Advantages />
    </div>
  )
}

export default Finity