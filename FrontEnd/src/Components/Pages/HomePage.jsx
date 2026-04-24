// import { useSelector } from "react-redux";
import { CardV, Slider, popupCard, verticalCard } from "./File/HomePage";
import Corousal from "../UI Components/Reused/Corousal";
import slider1 from '../../Assets/Images/slider1.png'
import slider2 from '../../Assets/Images/slider2.png'
import slider3 from '../../Assets/Images/slider3.png'
import '../css/HomePage.css'
import VerticalCard from "../UI Components/Reused/verticalCard";
import PopupCard from "../UI Components/Reused/PopupCard";
import Card from "../UI Components/Reused/Card";
import card1 from '../../Assets/SVG/card1.svg'
import card2 from '../../Assets/SVG/card2.svg'
import card3 from '../../Assets/SVG/card3.svg'
import card4 from '../../Assets/SVG/card4.svg'
import card5 from '../../Assets/SVG/card5.svg'
import card6 from '../../Assets/SVG/card6.svg'





function Home() {
  // var profile = useSelector((state) => state.Auth.profile);
  // var role = profile.role;
  // var name = profile.name;

  return (
    <div className="overflow-hidden">
      <div className="container ">

        <Corousal
          title1={Slider.title1}
          title2={Slider.title2}
          title3={Slider.title3}
          info1={Slider.info1}
          info2={Slider.info2}
          info3={Slider.info3}
          img1={slider1}
          img2={slider2}
          img3={slider3} />

        {/* other services */}

        <h5 cl="text-muted text-center">We provide to you the best choiches for you.
          Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors
          you can consult with us which type of service is suitable for your health</h5>

        <div className="row ">
          <div className="col">
            <VerticalCard
              img={card4}
              title={CardV.title4}
              content={CardV.content4}
            >
            </VerticalCard>
          </div>
          <div className="col">
            <VerticalCard
              img={card5}
              title={CardV.title5}
              content={CardV.content5}
            >
            </VerticalCard>
          </div>
          <div className="col">
            <VerticalCard
              img={card6}
              title={CardV.title6}
              content={CardV.content6}
            >

            </VerticalCard>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;
