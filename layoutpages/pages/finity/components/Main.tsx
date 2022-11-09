import s from "./Main.module.css"
import Image from 'next/image'
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import DotPatternBlue from "../svg/DotPatternBlue"

const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.mainTop}>
        <div className={s.mainTopLeft}>
          <div className={s.mainTopTitle}>Get valuable leads inside WordPress.</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={s.mainTopRight}>
          <div className={s.mainPhoto1}>
            <Image src={photo1} alt="finity" />
          </div>
          <DotPatternBlue />
          <div className={s.mainPhoto2}>
            <Image src={photo2} alt="finity" />
          </div>

        </div>
      </div>
      <div className={s.mainBottom}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Main