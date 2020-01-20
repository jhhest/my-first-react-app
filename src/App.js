import React from "react";
import "./App.css";

import SectionElement from "./components/SectionElement";
import SectionElementIntro from "./components/SectionElementIntro";
import Presentation from "./components/Presentation";
import SectionLine from "./components/SectionLine";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <header id="header" className="section-header scroll">
          <a href="./">
            <img
              className="icon"
              src="https://learntocodetogether.nl/assets/icon.svg"
              alt="learn together in groups"
            />
          </a>
          <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
            <img
              className="meetup-icon"
              src="https://learntocodetogether.nl/assets/meetup-icon.svg"
              alt="learn together in groups"
            />
          </a>
          <nav>
            <a href="/courses.html">Our Courses</a>
          </nav>
        </header>
        <div className="section-header-spacer"></div>
        <div className="content">
          <SectionElement
            intro={
              <SectionElementIntro
                titleBadge="Do you want to"
                componentTitle="Learn How to code"
                description="Awesome! Let’s do this together. We are here to support you in your coding journey."
              />
            }
            presentation={
              <Presentation
                imgSrcLeft="https://learntocodetogether.nl/assets/team.svg"
                imgSrcMiddle="https://learntocodetogether.nl/assets/community.svg"
                imgSrcRight="https://learntocodetogether.nl/assets/personal-speed.svg"
                textLeft="Get help from experienced developers"
                textMiddle="Learn &amp; share with our community"
                textRight="Personal &amp; at your own speed"
              />
            }
          />
          <SectionLine />
          <SectionElement
            intro={
              <SectionElementIntro
                titleBadge="Courses"
                componentTitle="Our Courses"
                description="We have created courses to help you learn, with easy to follow steps and some sparks of fun!"
              />
            }
            presentation={
              <Presentation
                imgSrcLeft="https://learntocodetogether.nl/assets/expand-horizon.svg"
                imgSrcMiddle="https://learntocodetogether.nl/assets/developers.svg"
                imgSrcRight="https://learntocodetogether.nl/assets/step-by-step.svg"
                textLeft="Learn new skills and expand your horizon"
                textMiddle="Follow courses created by experienced developers"
                textRight="Fun, hands on and easy to follow"
              />
            }
          />
          <SectionLine />
          <SectionElement
            intro={
              <SectionElementIntro
                titleBadge="Why"
                componentTitle="Why we do this"
                description="It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together."
              />
            }
            presentation={
              <Presentation
                imgSrcLeft="https://learntocodetogether.nl/assets/expand-horizon.svg"
                imgSrcMiddle="https://learntocodetogether.nl/assets/developers.svg"
                imgSrcRight="https://learntocodetogether.nl/assets/personal-speed.svg"
                textLeft="We love to experiment and create awesome stuff from the comfort of our couch."
                textMiddle="It’s always fun to do things together, the excitement and the collaborations."
                textRight="We like to learn and to teach others the stuff we know."
              />
            }
          />
        </div>
        <SectionLine />
        <div className="section-footer">
          <img
            className="logo"
            src="https://learntocodetogether.nl/assets/logo.svg"
            alt="learn together in groups"
          />
          <div className="title">Created by</div>
          <div className="subtitle">
            Rein Op &#x27;t land &amp; Danny van der Jagt
          </div>
          <div className="team-container">
            <img
              className="team"
              src="https://learntocodetogether.nl/assets/danny&rein.svg"
              alt="learn together in groups"
            />
          </div>
        </div>
      </div>
    );
  }
}
