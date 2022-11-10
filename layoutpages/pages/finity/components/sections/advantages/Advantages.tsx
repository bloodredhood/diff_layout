import BigIcon1 from "../../../svg/BigIcon1"
import BigIcon2 from "../../../svg/BigIcon2"
import BigIcon3 from "../../../svg/BigIcon3"
import DashedArrow1 from "../../../svg/DashedArrow1"
import DashedArrow2 from "../../../svg/DashedArrow2"
import s from "./Advantages.module.css"

const Advantages = () => {
  return (
    <div className={s.advantages}>
      <div className={s.font58} style={{ textAlign: "center", marginBottom: "50px" }}>
        Working with <br /> Instappoint is simple.
      </div>
      <div className={s.way}>
        <div className={s.column}>
          <div className={s.assetsCol}>
            <div className={s.bigIcon}>
              <BigIcon1 />
            </div>
            <div className={s.arrow} style={{paddingTop: "45px"}}>
              <DashedArrow1 />
            </div>
          </div>
          <div className={s.textCol}>
            <div className={s.font24}>Find Leads</div>
            <div className={s.font16} style={{color: "#7C8087"}}>We've helped over 2,500 job seekers <br/> to get into the most popular tech <br/> teams.</div>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.assetsCol} style={{paddingTop: "75px"}}>
            <div className={s.bigIcon}>
              <BigIcon2 />
            </div>
            <div className={s.arrow} style={{marginTop: "-25px"}}>
              <DashedArrow2 />
            </div>
          </div>
          <div className={s.textCol}>
            <div className={s.font24}>Book Appointments</div>
            <div className={s.font16} style={{color: "#7C8087"}}>We've helped over 2,500 job seekers <br/> to get into the most popular tech <br/> teams.</div>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.assetsCol}  style={{paddingTop: "145px"}}>
            <div className={s.bigIcon}>
              <BigIcon3 />
            </div>
          </div>
          <div className={s.textCol}>
            <div className={s.font24}>Get Paid</div>
            <div className={s.font16} style={{color: "#7C8087"}}>We've helped over 2,500 job seekers <br/> to get into the most popular tech <br/> teams.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages