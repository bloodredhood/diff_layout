import s from "../index.module.css"
import Router from "next/router"

const PageInfo = ({ path, pathName, link }: {path: string, pathName: string, link: string}) => {
  return (
    <div className={s.pageWrapper} >
      <div className={s.blockWrapper} onClick={() => Router.push(path)}>{pathName}</div>
      <div className={s.blockWrapper}>
        <a href={link}> figma template </a>
      </div>
    </div>
  )
}

export default PageInfo