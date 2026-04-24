import React from "react";
import Corousal from "../UI Components/Reused/Corousal";
import SliderHome from "../../Assets/SVG/SliderHome.svg";
import {Slider, CardQ, Heading, CardV} from './File/Covid-19'
import CovidQ from "../../Assets/SVG/CovidQ.svg";
import CoughingCard from "../../Assets/SVG/CoghingCard.svg";
import HandShake from "../../Assets/SVG/HandShake.svg";
import Straw from "../../Assets/SVG/Straw.svg";
import Symptms from "../../Assets/SVG/Symptms.svg";
import WearMask from "../../Assets/SVG/WearMask.svg";
import WashHand from "../../Assets/SVG/WashHand.svg";
import ShakeHand from "../../Assets/SVG/ShakeHand.svg";
import Sneezing from "../../Assets/SVG/Sneezing.svg";
import Card from "../UI Components/Reused/Card";
import VerticalCard from "../UI Components/Reused/verticalCard";
import Title from "../UI Components/Reused/Title";

export default function Covid19() {
  return (
   
    <div className="container">
      <Corousal 
      title1={Slider.title1}
      title2={Slider.title2}
      title3={Slider.title3}
      heading={Slider.heading}
      info1={Slider.info1}
      info2={Slider.info2}
      info3={Slider.info3}
       img1={SliderHome}
      img2={SliderHome}
      img3={SliderHome} 
      />
     

      {/* what is covid */}

      <Card
      img={CovidQ}
     title={CardQ.title}
     info={CardQ.info}
      ></Card>

      {/* contagion */}
<Title
title={Heading.title}
content={Heading.content1}

></Title>
      <div className="row">
<div className="col">
    <VerticalCard
    img={CoughingCard}
   title={CardV.title1}
   content={CardV.content1}
    />
</div>
<div className="col" >
    <VerticalCard
    img={HandShake}
    title={CardV.title2}
    content={CardV.content2}
   />
</div>
<div className="col">
    <VerticalCard
    img={Straw}
    title={CardV.title3}
    content={CardV.content3}
    ></VerticalCard>
    </div>
</div>

{/* precaution */}

<Title
title={Heading.title}
content={Heading.content2}
></Title>
<div ><img src={Symptms} class=" mx-auto d-block w-75" alt="..." /></div>



{/* what should we do */}

<Title
title={Heading.title3}
content={Heading.content3}
></Title>

<Card
img={WearMask}
no="01"
title={CardQ.title1}
info={CardQ.info1}

></Card>

<Card
img={WashHand}
no="02"
title={CardQ.title2}
info={CardQ.info2}

></Card>

<Card
img={Sneezing}
no="03"
title={CardQ.title3}
info={CardQ.info3}

></Card>

<Card
img={ShakeHand}
no="04"
title={CardQ.title4}
info={CardQ.info4}
></Card>

{/* live report */}

<div className="container-fluid">
<Title
title="Covid-19"
content="Live Report"
></Title>
                <div style={{ textAlign: 'center', marginBottom: '20px' }} >
                    <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="70%" height="500px" title="covid info" />
                </div>
            </div>
            </div>
   
  );
}
