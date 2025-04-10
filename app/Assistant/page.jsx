'use client'
import React from "react";
import "../Styles/LearningPage.css";
import "../Styles/ContactPage.css";
import Container from "react-bootstrap/Container";
import ChatComp from "../Components/ChatComp";
import { useTranslation } from "react-i18next";

const Assistant = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Container fluid="xxl" className="CPT">
        <div className="CPTTitle">
          {t("The Assistant Center")}
          
          <hr className="lineSt" />
        </div>
        <div className="CPTdesc">
        {t("Not sure which event suits your interests? The Event Assistant Center is here to help! We provide all the resources and guidance you need to find the perfect academic opportunities and make the most of your university experience.")}
        
        </div>
      </Container>

      <Container fluid="xxl" className="ResourcesCont" >
      <ChatComp >

      </ChatComp>
      </Container>
    </div>
  );
};

export default Assistant;
