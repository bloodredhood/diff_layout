import s from "./Main.module.css"
import Image from 'next/image'
import photo1 from "../../../assets/photo1.png"
import photo2 from "../../../assets/photo2.png"
import DotPatternBlue from "../../../svg/DotPatternBlue"
import LightgreenOval from "../../../svg/LightgreenOval"
import BlueButton from "../../ui/BlueButton"
import MiniLink from "../../ui/MiniLink"
import LittleHeart from "../../../svg/LittleHeart"
import LittleStar from "../../../svg/LittleStar"
import slack from "../../../assets/slack.png"
import microsoft from "../../../assets/microsoft.png"
import facebook from "../../../assets/facebook.png"

const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.mainTop}>
        <div className={s.mainTopLeft}>
          <div className={s.font70}>Get valuable <br /> leads inside <br /> WordPress.</div>
          <div className={s.font21}>We've helped over 2,500 job seekers to get into the most popular tech teams.</div>
          <div>
            <BlueButton text={"Get Started for Free"} />
          </div>
          <div className={s.font16}>
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
        <div className={s.mainBottomLeft}>
          <div className={s.mainBottomLeftCol}>
            <div className={s.font70}>10k</div>
            <div className={s.hearts}>
              <LittleHeart />
              <LittleHeart />
              <LittleHeart />
              <LittleHeart />
              <LittleHeart />
            </div>
            <div className={s.font16}>Active Downloads</div>
            <div className={s.font16}><MiniLink text={"On Websites"} /></div>
          </div>
          <div className={s.mainBottomLeftCol}>
            <div className={s.font70}>4.7</div>
            <div className={s.hearts}>
              <LittleStar />
              <LittleStar />
              <LittleStar />
              <LittleStar />
              <LittleStar />
            </div>
            <div className={s.font16}>1,938 Rating</div>
            <div className={s.font16}><MiniLink text={"WordPress Community"} /></div>
          </div>
        </div>
        <div className={s.mainBottomRight}>
          <div className={s.font34}>
            Trusted by 25,000+ happy <br /> Marketers and WordPress <br /> users since 2018.
          </div>
          <div className={s.greyText}>
            Also featured in
          </div>
          <div className={s.partners}>
            <div><Image src={slack} alt={"slack"}/></div>
            <div><Image src={microsoft} alt={"microsoft"}/></div>
            <div><Image src={facebook} alt={"facebook"}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main