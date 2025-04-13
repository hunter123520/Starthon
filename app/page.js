'use client'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/HomePage.css";
import { Button } from '@mui/material';
// import { BsArrowRight } from "react-icons/bs";
import introimg from "./Images/intro.jpg"
import plnt from "./Images/planet.jpg";
import React from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import CardShow from './Components/CardShow';
import lbb from "./Images/bb.png";
// import TabsHolder from './Components/TabsHolder';
import CustomCard from './Components/CustomCard';
import event1 from "./Images/event1.jpg";
import event2 from "./Images/event2.jpg";
import event3 from "./Images/event3.jpg";
import bg from "./Images/bg.jpg";
import { useTranslation } from "react-i18next";
import Link from 'next/link'
import Image from "next/image";
import "./Styles/App.css"
import EventIcon from '@mui/icons-material/Event';

function Home() {
    const { t, i18n } = useTranslation();

    return (
        <div className='bb' style={{gap:"50px"}}>

        <Container fluid="x"  className='relative w-full h-screen flex flex-col justify-center items-center intro-page w-100' >
        <Image
        src={introimg}
        alt="Intro Background"
        layout="fill"
        objectFit="cover"
        quality={20} // Optimized quality
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/60 shadow-overlay z-0"></div>
       <div className="z-10 text-center d-flex flex-column justify-content-center align-items-center">
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("Save your time")} </span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}>  {t("Find your Interests")}  </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {t("CampGuide can be your go-to platform for everything related to university events and training opportunities. We provide centralized access to event information, guidance on how to engage effectively, and insights into the academic benefits of participation.")} 
            
            </div>
            
            <Link rel="prefetch"  href='/Browse' >
                <Button variant='contained' className='intro-button'> {t("Discover Now")} </Button>
            </Link>
            </div>
        </Container>

        <Container  className='d-flex flex-column justify-content-center align-items-center six-page text-center'>
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("So Much to do!")} </span>
            <div className='second-title text-center' style={{fontSize:"40px"}}>
                <span> {t("Different")}  <span style={{color:"var(--main)"}}>  {t("Benifits")}   </span>  {t("&")}   
                <span style={{color:"var(--main)"}}>  {t("Solutions")} </span> 
                 <span style={{color:"var(--main)"}}>  {t("To Discover")} .</span></span>
            </div>
            <div>
             {t("Dive deeper into campus events! Discover surprising academic and networking benefits, explore personalized opportunities near you, and build a stronger educational journey—together, one event at a time.")} 
            
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center h-100 w-100 mt-4' style={{gap:'15px'}}>
    <CardShow 
        title={t('Events')} 
        text={t('Easily discover and explore university events, trainings, and workshops happening around you.')} 
        link={"/Events"} 
        icon={<EventIcon style={{fontSize:"80px"}} />} 
    />
    <CardShow 
        title={t('Guide Bot')} 
        text={t('Need help finding the right opportunity? Let our assistant bot guide you to relevant events.')} 
        link={"/Assistant"} 
        icon={<SmartToyIcon style={{fontSize:"80px"}} />} 
    />
    <CardShow 
        title={t('Integration')} 
        text={t('Want to integrate CampGuide with your institution’s system? Contact us to collaborate.')} 
        link={"/Integration"} 
        icon={<PrecisionManufacturingIcon style={{fontSize:"80px"}} />} 
    />
    <CardShow 
        title={t('Contact')} 
        text={t('Got questions or ideas? Reach out to our team for quick support and feedback.')} 
        link={"/Contact"} 
        icon={<GroupsIcon style={{fontSize:"80px"}} />} 
    />
</div>

            
        </Container>
            
        <Container fluid="x" className='d-flex flex-row page-three'>
            <Image src={plnt} alt=""  className='img-left' width={400} height={400}/>
            <div className='d-flex flex-column justify-content-start align-items-start p-5 text-start w-50 right-area' style={{gap:"25px"}}>
                <div className='second-title text-start w-100' style={{fontSize:"40px"}}>
                    <span> <span style={{color:"var(--main)"}}>  {t("Contact")}  </span>  {t("Us with your")}  
                    <span style={{color:"var(--main)"}}>  {t("Ideas")}  </span>  {t("&")}  <span style={{color:"var(--main)"}}> 
                     {t("Suggestions")} .</span></span>
                </div>
                <div>
                 {t("Got campus event ideas brewing? We want to hear them! Share your thoughts and suggestions to help us create a more connected and informed academic community. Every voice counts in shaping a smarter, more accessible university experience—one brilliant idea at a time. Let’s revolutionize student engagement together!")} 
                
                </div>
                <Link rel="prefetch"  href={"/Contact"} >
                <Button variant='outlined' className='intro-button'> {t("Contact us")} </Button>
            </Link>
            </div>
        </Container>

        <Container className='d-flex flex-column justify-content-center align-items-center fifth-page'>
        
            <div className='d-flex flex-row justify-content-center align-items-center rgb' style={{gap:"50px"}}>
                <div className='d-flex flex-column justify-content-start align-items-end  second-page-start'>
                <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("Our Mission!")} </span>
                        <div className='second-title text-end'>
                        <span>  {t("We've a")} <span style={{color:"var(--main)"}}>   {t("Clear Objectives")} </span> 
                           {t("From this")} <span style={{color:"var(--main)"}}> {t("Tools")} </span></span>
                    </div>
                    <div className='w-75 content text-end'>
                     {t("We're on a mission to revolutionize how students connect with campus opportunities. Our user-friendly tools, backed by clear goals, help you discover, track, and engage with academic events that truly matter—making a real difference in your journey, one opportunity at a time.")} 
                    

                    </div>
                </div>

                <div className='d-flex flex-row justify-content-start align-items-center w-50 h-100' style={{gap:"35px"}}>
                <Image  src={lbb} alt="" className='lbb-img'/>
                </div>
            </div>
        </Container>


        {/* <Container>
        <div className='second-title text-end'>
                        <span> {t("What Can you")}  <span style={{color:"var(--main)"}}> 
                         {t("Classify")} 
                         </span></span>
                    </div>
            <TabsHolder></TabsHolder>
        </Container>
        

        <Container className='d-flex flex-column justify-content-center align-items-center'style={{gap:"15px"}}>
        <div className='second-title text-start w-100'>
                        <span> {t("Lastes")}  <span style={{color:"var(--main)"}}> 
                          {t("Events")} </span></span>
                    </div>
            <div className='d-flex flex-row justify-content-center align-items-center flex-wrap cdcont'style={{gap:"35px"}}>
            <CustomCard icon={<Image src={event1} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t("Kasdi Merbah Ouargla")}  content1= {t('Planting approximately 50 shrubs at the three pole colleges and next to the university transportation bus stop.')} border={false} swap={true} link="https://www.facebook.com/FNTIC.ITI/posts/pfbid0L1WMSZQwGvHCXGJXtiqUej6bt6MHeWPTTEFkANt8PFXXwhBE1ixLVgWqAq6DpY2tl"></CustomCard>
            <CustomCard icon={<Image src={event2} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t('Ouargla Tramway')} content1= {t('Planting some areas of the institutions lands with seedlings and trees to develop and improve the aesthetic appearance of the institution.')} border={false} swap={true} link="https://www.facebook.com/snabel99/posts/pfbid02nSbdDd868qnjzV8VqP2vATKbThCXh5yJwkRS9vnSSvYnBDTyRBe9XWzE9yRyeY5yl"></CustomCard>
            <CustomCard icon={<Image src={event3} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t('Scout section')} content1= {t('A campaign to plant trees on the main street was also carried out, after which a meeting was held at the great Ramadan table of charity.')} border={false} swap={true} link="https://www.facebook.com/199412braim/posts/pfbid0F6aV92x312TYe8jwrqPTxRYxmAhVBuRF2qo91mXwxyofgTyapPxWovEqhYhtmSLvl"></CustomCard>

            </div>
        </Container> */}



        <Container fluid="x"  className='relative w-full h-screen flex flex-col justify-center items-center  intro-page' >
        <Image
        src={bg}
        alt="Intro Background"
        layout="fill"
        objectFit="cover"
        quality={100} // Optimized quality
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 shadow-overlay z-0"></div>

      <div className="z-10 text-center d-flex flex-column justify-content-center align-items-center">
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t('Our AI Model')}</span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}> {t("We've Reached a Good Point")}  </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {t("We’ve reached a turning point in academic engagement! Our intelligent recommendation system, trained on thousands of event data points, achieves good accuracy in matching students with the most relevant opportunities. And it’s fast—providing instant, data-driven suggestions to help you make smarter choices for your academic and professional growth in seconds.")} 
            
            </div>
            </div>
            
        </Container>

        </div>
    );
}

export default Home