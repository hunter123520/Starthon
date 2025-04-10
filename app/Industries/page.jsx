'use client'
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
import Container from "react-bootstrap/Container";
import "../Styles/LearningPage.css";
import "../Styles/ContactPage.css";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
function Industries(){
    const { t, i18n } = useTranslation();
    return(
        <div className="" >
            <Container fluid="xxl" className="CPT1" style={{height:"125vh"}}>
                <div className="CPTTitle">
                    {t("The Industries Center")}
                
                <hr className="lineSt" />
                </div>
                <div className="CPTdesc" style={{width:"80%"}}>
                {t("We offer highly trained systems designed to efficiently match students with relevant academic opportunities. Our models undergo a rigorous training process, starting with a vast dataset of academic events and student preferences. This initial phase ensures that our system understands a wide variety of educational events. Afterward, the model undergoes fine-tuning on more specific data, such as course feedback and engagement metrics, refining its ability to recommend the most relevant events for you. With our advanced technology, you can trust our platform to optimize your academic journey, making it more personalized, efficient, and impactful for your future.")}
                
                </div>
                <div className="CPTdesc">
                {t("For more information or to order the models, please contact us at sellami.mohammedabdelhadi@univ-ouargla.dz.")}
                
                </div>
            </Container>
        </div>
    );
}

export default Industries;