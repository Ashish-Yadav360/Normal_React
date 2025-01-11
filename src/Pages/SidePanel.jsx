import library from "../assets/asset 51.svg";
import plus from "../assets/asset 52.svg";
import SidepanelCreate from "../Components/SidepanelCreate";
const SidePanel = () => {
    const data1 = {
        input1: "Create your first playlist",
        input2: "Its easy will Help you",
        buttonValue: "Create playlist"
    }
    const data2 = {
        input1: "Let's find some podcasts to follow",
        input2: "We'll keep you updated on new Episodes",
        buttonValue: "Browse podcasts"
    }
  return (
    <div className="sidepanel rounded-lg h-fit w-1/3 bg-spotify-white">
      {" "}
      {/* Adjusted width */}
      <div className="flex justify-between gap-10">
        <div className="flex items-center gap-4 p-4">
          <img src={library} className="h-8 w-auto" alt="" />
          <p className="font-semibold">Your Library</p>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="h-8 w-auto fill-white" src={plus} alt="" />
        </div>
      </div>
       <SidepanelCreate data={data1}/>
       <SidepanelCreate data={data2}/>
    </div>
  );
};

export default SidePanel;
