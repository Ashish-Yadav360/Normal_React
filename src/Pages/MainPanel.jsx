import MainSection from "../Components/MainSection";

const MainPanel = () => {
  return (
    <div className="flex-col rounded-2xl overflow-hidden h-[calc(100vh-80px)]">
      <div className="overflow-y-auto h-full">
        <MainSection />
        <MainSection />
        <MainSection />
      </div>
    </div>
  );
};

export default MainPanel;
