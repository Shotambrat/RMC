// import Banner from "../Main/Banner";
import AboutUs from "./AboutUs";
// import Investition from "../Main/Investition";
// import Service from "../Main/Service";
// import WhyUs from "../Main/WhyUs";
// import BuildingsSlider from "../Main/BuildingsSlider";
// import SuccessModal from "../Modals/SuccessModal";

const Main: React.FC = () => {
  return (
    <div className="bg-white flex flex-col gap-[120px] mdl:gap-[150px] xl:gap-[200px]">
      {/* <Banner /> */}
      <AboutUs />
      {/* <Investition />
      <Service />
      <WhyUs />
      <BuildingsSlider /> */}
    </div>
  );
};

export default Main;
