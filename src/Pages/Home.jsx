import SidePanel from "./SidePanel"
import MainPanel from "./MainPanel"
export const Home = () => {
  return (
    <div className="flex flex-shrink-0 flex-nowrap rounded-2xl bg-slate-400 m-1 border-slate-500 broder-x-2">
      <SidePanel />
      <MainPanel/>
    </div>
  )
}
