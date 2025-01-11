const SidepanelCreate = ({data}) => {
  return (
    <div className="flex w-full p-2 font-poppins items-center">
      <div className=" flex-col p-4 text-white w-full rounded-md bg-blend-lighten bg-spotify-black">
        <div className="flex flex-col mb-4">
        <p className="text-sm font-bold py-2 px-1">{data.input1}</p>
        <p className="text-xs p-1 font-semibold">{data.input2}</p>
        </div>
        <button className="bg-white font-semibold items-center text-sm rounded-full px-2 py-1 text-spotify-black">{data.buttonValue}</button>
      </div>
    </div>
  );
};

export default SidepanelCreate;
