import PageInfo from "./components/PageInfo"
import s from "./index.module.css"

export default function Home() {
  return (
    <div className={s.contentWrapper}>
      <PageInfo path={"/finity"} pathName={'finity'} link={"https://www.figma.com/file/fkVHo9wua6JihTTp1WtWPW/2.-finity?node-id=0%3A1"} />
    </div>
  )
}
