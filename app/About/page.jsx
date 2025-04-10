'use client'
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutPage.css";
import team_img from "../Images/team_img.png";
import Sellami from "../Images/DEVS/Sellami.jpg";
import Taher from "../Images/DEVS/Taher.jpg";
import DJ from "../Images/DEVS/DJ.jpg";
import TJ from "../Images/DEVS/TJ.jpg";
import BH from "../Images/DEVS/BH.jpg";
import unv from "../Images/unv.jpg";
import TH from "../Images/Thanks.png";
import { CgShapeRhombus } from "react-icons/cg";
import { Avatar } from "@mui/material";
// import univ_img from "../Images/unv.jpg";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GL from "../Images/GL.png";
import { useTranslation } from "react-i18next";
import Link from 'next/link'
import Image from "next/image";



function AboutPage() {
  const { t, i18n } = useTranslation();

  const objectives_tl = [
    t("Save our Functions"),
    t("apply the knowledge"),
    t("Learn new technologies "),
    t("co-working"),

  ];
  
  const objectives = [
    t("Preserving the linear algebra functions that we have created in order to create a general stimulus by not ignoring the tasks performed, despite their smallness."),
    t("Employing the knowledge that we have studied in the past years, which will allow us to develop and not lose previous knowledge."),
    t("Learn the new technology used in making websites to develop and improve our skills."),
    t("Making complete work done in a team allows us to learn to collaborate and organize Different tasks within different team members."),
  ];
  
  const render_objectives = objectives.map((objective, index) => {
    return (
      // <div className='row-xs d-flex  align-items-center' style={{ fontSize: '1.5rem', fontWeight:'300',padding:"0.5em",marginLeft:(2*(1+index%2)+"em")}} key={index}>
      <div
        className="d-flex flex-column  align-items-center objcont "
        key={index}
      >
        {/* <CgShapeRhombus style={{color:"#CDC2AE"}}/> */}
        {/* <div className="objshape"></div> */}
        <span className="objtitle">{objectives_tl[index]}</span>
        <span className="objdesc">{objective}</span>
      </div>
    );
  });
  
  const project_members = [
    {
      name:t("Mohammed Abdelhadi Sellami") ,
      role:t("Ai Engenieer, Frontend developer, Designer") ,
      img: Sellami,
      fb_link: "https://www.linkedin.com/in/mohammed-abdelhadi-sellami-241880209/",
    },
    {
      name: t("Taher Rezzag Bedida"),
      role: t("Ai Engenieer, Frontend developer"),
      img: Taher,
      fb_link: "https://www.linkedin.com/in/taher-rezzag-bedida-775b75198/",
    },
    {
      name: t("Abdeldjalil Hammouya"),
      role: t("Ai Engenieer, Backend developer"),
      img: DJ,
      fb_link: "https://www.linkedin.com/in/abdeldjalil-hammouya-58b1082bb/",
    },
    {
      name: t("Abdeldjalil Tedjini"),
      role: t("Cyber ​​security, Backend development"),
      img: TJ,
      fb_link: "https://www.linkedin.com/in/abdeldjalil-tedjini-aa4075291/",
    },
    {
      name: t("Mohammed Lamine Ben Habireche"),
      role: t("Frontend developer"),
      img: BH,
      fb_link: "https://www.linkedin.com/in/llamine-benhabirech/",
    },
   
   
  ];

  const render_project_members = project_members.map((member, index) => {
    return (
      <div
        className="row-xxl d-flex flex-column align-items-center justify-content-center mmbcont"
        style={{ fontWeight: "300", padding: "0.5em" ,width:"33%"}}
        key={index}
      >
        <a href={member.fb_link} target="_blank">
          <Avatar
            sx={{ width: 126, height: 126 }}
          >
          <Image src={member.img || placeholder} alt={member.name}/>
          </Avatar>
        </a>
        <span
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "400",
          }}
        >
          {member.name}
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "25px",
          }}
        >
          {member.role}
        </span>
      </div>
    );
  });
  

  return (
    <>
      <div
        className="w-100 text-center position-absolute d-flex justify-content-center align-items-center TTlilte "
        style={{
          backgroundColor: "#06272e54",
          top: 0,
          height: 350,
          zIndex: 8,
          paddingTop: "175px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          {t("About Us")}
          
        </Typography>
      </div>
      {/* <CardMedia
        component="img"
        height="350"
        image={"../Images/unv.jpg"}
        alt="green iguana"
        sx={{
          objectPosition: "top",
          marginTop: "-100px",
          zIndex: 7,
          position: "relative",
          height:"350px"
        }}
      /> */}
      <CardMedia className="About-Card" sx={{
          objectPosition: "top",
          marginTop: "-100px",
          zIndex: 7,
          position: "relative",
          height:"350px"
        }}>
        <Image
          src={unv} // Change to your image path
          alt="Sample Image"
          layout="fill"
          objectFit="cover"
          style={{ objectFit: "cover", width:"100%", objectPosition: "center 5%" }} // Ensure it covers the CardMedia
        />
      </CardMedia>
      <div className="d-flex flex-row justify-content-center align-items-center p-2 Panle">
        <Button onClick={() => window.location.replace("/About#whoweAre")}>
        {t("Who We are")}
          
        </Button>
        <Button onClick={() => window.location.replace("/About#OurTeam")}>
        {t("Our Team")}
          
        </Button>
        <Button onClick={() => window.location.replace("/About#Goals")}>
        {t("Goals")}
          
        </Button>
        <Button
          onClick={() => window.location.replace("/About#ShareKnowledge")}
        >
          {t("Share your knowledge")}
         
        </Button>
        
        
      </div>
      <div style={{ height: "50px" }}></div>
      <Container id="whoweAre" fluid="xxl" className="con-intro">
        <Container className="d-flex flex-column justify-content-center align-items-center p-5 text-center">
          <div
            className="intro-title-A text-center lighter p-0"
            style={{
              color: "#0B3841",
              fontSize: "45px",
            }}
          >
            {t("WHO WE ARE")}
            
          </div>
          <hr
            style={{
              width: "20%",
              height: 2,
              borderWidth: 3,
              color: "orange",
            }}
          />
          <Typography
            className="w-75 p-0"
            variant="h7"
            gutterBottom
            style={{ marginTop: 10 }}
            fontWeight={"bold"}
          >
            <span style={{fontSize:25,fontWeight:"300"}}><span style={{color: "#178a9f"}}>Lambda Zero </span></span>
            <br></br><br></br>
            {t("Welcome to our AI and Data Science Master's Student Group! We are a passionate group of students pursuing our Master's degrees in the exciting fields of Artificial Intelligence and Data Science. With a collective goal of pushing the boundaries of knowledge and leveraging the power of technology, we have come together to create innovative solutions and contribute to the ever-evolving world of AI")}
            
            .
          </Typography>
        </Container>
      </Container>
      <div style={{ height: "50px" }}></div>
      <div id="OurTeam" className="infos-container">
        <div className="team-container">
          <div className="container-xxl">
            <div
              className="team-title text-center"
              style={{
                color: "#0B3841",
                fontSize: "2.5rem",
                fontWeight: "600",
                marginTop: "0.25em",
                marginBottom: "0.5em",
                textAlign: "center",
              }}
            >
              <span> {t("Our Team:")}</span>
            </div>
          </div>
          <div
            className="row-xs d-flex flex-row flex-wrap justify-content-center align-items-center"
            style={{
              fontSize: "1.5rem",
              fontWeight: "300",
              padding: "0.5em",
              // width:"50%"
            }}
          >
            {render_project_members}
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <div
        id="Goals"
        className="Goals w-100 d-flex flex-row"
        style={{ padding: "15%", paddingTop: "10%", paddingBottom: "5%" }}
      >
        <div className="d-flex flex-column">
          {/* <Typography variant="h4" gutterBottom fontWeight={"bold"}>
          {t("Our Goals")}
            
          </Typography> */}
          <div
              className="intro-title-A lighter p-0"
              style={{
                color: "#0B3841",
                fontSize: "45px",
              }}
            >
            {t("Our")}   <span style={{ color: "#D9383C" }}> {t("Goals")}  </span>  
            </div>
          <Typography
            className="w-100 p-0"
            variant="h7"
            gutterBottom
            style={{ marginTop: 10 }}
            lineHeight={1.5}
          >
            {t("We believe in a campus community that values informed choices and academic growth. That’s why we created the Event Discovery Assistant Center — to empower students like you to become opportunity seekers and active participants in university life! Our goals are clear:")}
            <br />
            <span style={{ lineHeight: 2 }}>
              {" "}
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> {t("Centralize access to events and training across institutions")} 
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> {t("Help students discover opportunities aligned with their interests")} 
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> {t("Boost engagement and make academic participation seamless and rewarding")} 
            </span>
          </Typography>
        </div>
        <div className="intro-img">
          <Image
            src={GL}
            alt="logo"
            height={1000}
            width={1000}
            sx={{
              objectPosition: "top",
            }}
          />
        </div>
      </div>


      <div id="ShareKnowledge" 
      className="ShareKnowledge w-100 d-flex flex-row"
      style={{ padding: "15%", paddingTop: "10%", paddingBottom: "5%", backgroundColor:"white !important"}}
    >
        <div className="intro-container d-flex justify-content-center align-items-center">
          <div className="intro-text-container" style={{width:"100% !important"}}>
            <div
              className="intro-title-A lighter p-0"
              style={{
                color: "#0B3841",
                fontSize: "45px",
              }}
            >
              <span style={{ color: "#D9383C" }}> {t("Share")}  </span> {t("your knowledge")}  
            </div>
            <div className="intro-content">
              <Typography
                className="w-75 p-0"
                variant="h7"
                gutterBottom
                style={{ marginTop: 10 }}
              >
                {t("Furthermore, we are committed to fostering a collaborative and supportive academic community. We encourage active engagement, questions, and discussions, and we are always excited to connect with students, faculty, and professionals who share our passion for learning and personal development. Together, we can build a strong network, exchange ideas, and inspire each other on this enriching academic journey.")}
                
              </Typography>
            </div>
          </div>
          <div className="intro-img">
            <Image src={team_img} alt="logo" height={400}
            width={600}/>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default AboutPage;
