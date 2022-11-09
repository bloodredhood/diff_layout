import s from "./Main.module.css"
import Image from 'next/image'
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import DotPatternBlue from "../svg/DotPatternBlue"
import LightgreenOval from "../svg/LightgreenOval"
import BlueButton from "./ui/BlueButton"
import MiniLink from "./ui/MiniLink"
import "../../styles.css"

const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.mainTop}>
        <div className={s.mainTopLeft}>
          <div className={s.mainTopTitle}>Get valuable <br/> leads inside <br/> WordPress.</div>
          <div className={s.mainTopDescr}>We've helped over 2,500 job seekers to get into the most popular tech teams.</div>
          <div>
            <BlueButton text={"Get Started for Free"}/>
          </div>
          <div className={s.mainTopMinitext}>
          Still confused? <MiniLink text={"Check our 1 min video"} />
          </div>
        </div>
        <div className={s.mainTopRight}>
          <div className={s.mainDots}>
            <DotPatternBlue />
          </div>
          <div className={s.mainPhoto1}>
            <Image src={photo1} alt="finity" />
          </div>
          <div className={s.mainOval}>
            <LightgreenOval />
          </div>
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