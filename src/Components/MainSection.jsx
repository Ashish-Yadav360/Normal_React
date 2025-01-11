import Card from "./Card"
const MainSection = () => {
 const data = {
    input1: "Aashiqui 2",
    input2: "Its easy will Help you",
    buttonValue: "Create playlist"
 }
  return (
    <div className="flex-row w-fit flex-wrap mb-4 bg-black text-white rounded-2xl">
        <div className="flex justify-between items-center p-4">
          <h2>Popular artist</h2>
           <h4>Show all</h4>
        </div>
        <div className="flex items-center p-4">
           {[1,2,3,4,5,6,7].map((item) => <Card data={data} key={item}/>)}
        </div>
    </div>
  )
}

export default MainSection