import Header from "./components/Header"
import Main from "./components/Main"
import s from "./finity.module.css"

const Finity = () => {
  return (
    <div className={s.finity} >
      <Header />
      <Main />
    </div>
  )
}

export default Finity