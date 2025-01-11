import MainSection from "../Components/MainSection"

const MainPanel = () => {
  return (
    <div className="flex-col h-fit rounded-2xl overflow-hidden">
        <div className="overflow-auto h-screen">
        <MainSection/>
        <MainSection/>
        <MainSection/>
        </div>     
    </div>
  )
}

export default MainPanel