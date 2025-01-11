import img from "../assets/asset 11.jpeg";
const Card = () => {
  return (
    <div className="flex-col mx-2 bg-slate-800 rounded-2xl">
      <div>
        <img className=" rounded-2xl" src={img} alt="imgage" />
      </div>
      <div className="p-2">
        <p>Aashiqui 2</p>
        <p>Mithoon,Ankit Tiwari</p>
      </div>
    </div>
  );
};

export default Card;
