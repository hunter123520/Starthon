import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../Styles/TabStyle.css"
import { Avatar } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import EmblaCarousel from '../Components/EmblaCarousel'
import { useTranslation } from "react-i18next";
import '../Styles/embla.css'
import Image from "next/image";
import battery1 from "../Images/GC/battery/battery (1).jpg"
import battery2 from "../Images/GC/battery/battery (2).jpg"
import battery3 from "../Images/GC/battery/battery (3).jpg"
import battery4 from "../Images/GC/battery/battery (4).jpg"
import battery5 from "../Images/GC/battery/battery (5).jpg"
import battery6 from "../Images/GC/battery/battery (6).jpg"
import battery7 from "../Images/GC/battery/battery (7).jpg"
import battery8 from "../Images/GC/battery/battery (8).jpg"
import battery9 from "../Images/GC/battery/battery (9).jpg"
import battery10 from "../Images/GC/battery/battery (10).jpg"

import biological1 from "../Images/GC/biological/biological (1).jpg"
import biological2 from "../Images/GC/biological/biological (2).jpg"
import biological3 from "../Images/GC/biological/biological (3).jpg"
import biological4 from "../Images/GC/biological/biological (4).jpg"
import biological5 from "../Images/GC/biological/biological (5).jpg"
import biological6 from "../Images/GC/biological/biological (6).jpg"
import biological7 from "../Images/GC/biological/biological (7).jpg"
import biological8 from "../Images/GC/biological/biological (8).jpg"
import biological9 from "../Images/GC/biological/biological (9).jpg"
import biological10 from "../Images/GC/biological/biological (10).jpg"

import brownglass1 from "../Images/GC/brown-glass/brown-glass (1).jpg"
import brownglass2 from "../Images/GC/brown-glass/brown-glass (2).jpg"
import brownglass3 from "../Images/GC/brown-glass/brown-glass (3).jpg"
import brownglass4 from "../Images/GC/brown-glass/brown-glass (4).jpg"
import brownglass5 from "../Images/GC/brown-glass/brown-glass (5).jpg"
import brownglass6 from "../Images/GC/brown-glass/brown-glass (6).jpg"
import brownglass7 from "../Images/GC/brown-glass/brown-glass (7).jpg"
import brownglass8 from "../Images/GC/brown-glass/brown-glass (8).jpg"
import brownglass9 from "../Images/GC/brown-glass/brown-glass (9).jpg"
import brownglass10 from "../Images/GC/brown-glass/brown-glass (10).jpg"

import cardboard1 from "../Images/GC/cardboard/cardboard (1).jpg"
import cardboard2 from "../Images/GC/cardboard/cardboard (2).jpg"
import cardboard3 from "../Images/GC/cardboard/cardboard (3).jpg"
import cardboard4 from "../Images/GC/cardboard/cardboard (4).jpg"
import cardboard5 from "../Images/GC/cardboard/cardboard (5).jpg"
import cardboard6 from "../Images/GC/cardboard/cardboard (6).jpg"
import cardboard7 from "../Images/GC/cardboard/cardboard (7).jpg"
import cardboard8 from "../Images/GC/cardboard/cardboard (8).jpg"
import cardboard9 from "../Images/GC/cardboard/cardboard (9).jpg"
import cardboard10 from "../Images/GC/cardboard/cardboard (10).jpg"

import clothes1 from "../Images/GC/clothes/clothes (1).jpg"
import clothes2 from "../Images/GC/clothes/clothes (2).jpg"
import clothes3 from "../Images/GC/clothes/clothes (3).jpg"
import clothes4 from "../Images/GC/clothes/clothes (4).jpg"
import clothes5 from "../Images/GC/clothes/clothes (5).jpg"
import clothes6 from "../Images/GC/clothes/clothes (6).jpg"
import clothes7 from "../Images/GC/clothes/clothes (7).jpg"
import clothes8 from "../Images/GC/clothes/clothes (8).jpg"
import clothes9 from "../Images/GC/clothes/clothes (9).jpg"
import clothes10 from "../Images/GC/clothes/clothes (10).jpg"

import greenglass1 from "../Images/GC/green-glass/green-glass (1).jpg"
import greenglass2 from "../Images/GC/green-glass/green-glass (2).jpg"
import greenglass3 from "../Images/GC/green-glass/green-glass (3).jpg"
import greenglass4 from "../Images/GC/green-glass/green-glass (4).jpg"
import greenglass5 from "../Images/GC/green-glass/green-glass (5).jpg"
import greenglass6 from "../Images/GC/green-glass/green-glass (6).jpg"
import greenglass7 from "../Images/GC/green-glass/green-glass (7).jpg"
import greenglass8 from "../Images/GC/green-glass/green-glass (8).jpg"
import greenglass9 from "../Images/GC/green-glass/green-glass (9).jpg"
import greenglass10 from "../Images/GC/green-glass/green-glass (10).jpg"

import metal1 from "../Images/GC/metal/metal (1).jpg"
import metal2 from "../Images/GC/metal/metal (2).jpg"
import metal3 from "../Images/GC/metal/metal (3).jpg"
import metal4 from "../Images/GC/metal/metal (4).jpg"
import metal5 from "../Images/GC/metal/metal (5).jpg"
import metal6 from "../Images/GC/metal/metal (6).jpg"
import metal7 from "../Images/GC/metal/metal (7).jpg"
import metal8 from "../Images/GC/metal/metal (8).jpg"
import metal9 from "../Images/GC/metal/metal (9).jpg"
import metal10 from "../Images/GC/metal/metal (10).jpg"

import paper1 from "../Images/GC/paper/paper (1).jpg"
import paper2 from "../Images/GC/paper/paper (2).jpg"
import paper3 from "../Images/GC/paper/paper (3).jpg"
import paper4 from "../Images/GC/paper/paper (4).jpg"
import paper5 from "../Images/GC/paper/paper (5).jpg"
import paper6 from "../Images/GC/paper/paper (6).jpg"
import paper7 from "../Images/GC/paper/paper (7).jpg"
import paper8 from "../Images/GC/paper/paper (8).jpg"
import paper9 from "../Images/GC/paper/paper (9).jpg"
import paper10 from "../Images/GC/paper/paper (10).jpg"


import plastic1 from "../Images/GC/plastic/plastic (1).jpg"
import plastic2 from "../Images/GC/plastic/plastic (2).jpg"
import plastic3 from "../Images/GC/plastic/plastic (3).jpg"
import plastic4 from "../Images/GC/plastic/plastic (4).jpg"
import plastic5 from "../Images/GC/plastic/plastic (5).jpg"
import plastic6 from "../Images/GC/plastic/plastic (6).jpg"
import plastic7 from "../Images/GC/plastic/plastic (7).jpg"
import plastic8 from "../Images/GC/plastic/plastic (8).jpg"
import plastic9 from "../Images/GC/plastic/plastic (9).jpg"
import plastic10 from "../Images/GC/plastic/plastic (10).jpg"

import shoes1 from "../Images/GC/shoes/shoes (1).jpg"
import shoes2 from "../Images/GC/shoes/shoes (2).jpg"
import shoes3 from "../Images/GC/shoes/shoes (3).jpg"
import shoes4 from "../Images/GC/shoes/shoes (4).jpg"
import shoes5 from "../Images/GC/shoes/shoes (5).jpg"
import shoes6 from "../Images/GC/shoes/shoes (6).jpg"
import shoes7 from "../Images/GC/shoes/shoes (7).jpg"
import shoes8 from "../Images/GC/shoes/shoes (8).jpg"
import shoes9 from "../Images/GC/shoes/shoes (9).jpg"
import shoes10 from "../Images/GC/shoes/shoes (10).jpg"

import trash1 from "../Images/GC/trash/trash (1).jpg"
import trash2 from "../Images/GC/trash/trash (2).jpg"
import trash3 from "../Images/GC/trash/trash (3).jpg"
import trash4 from "../Images/GC/trash/trash (4).jpg"
import trash5 from "../Images/GC/trash/trash (5).jpg"
import trash6 from "../Images/GC/trash/trash (6).jpg"
import trash7 from "../Images/GC/trash/trash (7).jpg"
import trash8 from "../Images/GC/trash/trash (8).jpg"
import trash9 from "../Images/GC/trash/trash (9).jpg"
import trash10 from "../Images/GC/trash/trash (10).jpg"

import whiteglass1 from "../Images/GC/white-glass/white-glass (1).jpg"
import whiteglass2 from "../Images/GC/white-glass/white-glass (2).jpg"
import whiteglass3 from "../Images/GC/white-glass/white-glass (3).jpg"
import whiteglass4 from "../Images/GC/white-glass/white-glass (4).jpg"
import whiteglass5 from "../Images/GC/white-glass/white-glass (5).jpg"
import whiteglass6 from "../Images/GC/white-glass/white-glass (6).jpg"
import whiteglass7 from "../Images/GC/white-glass/white-glass (7).jpg"
import whiteglass8 from "../Images/GC/white-glass/white-glass (8).jpg"
import whiteglass9 from "../Images/GC/white-glass/white-glass (9).jpg"
import whiteglass10 from "../Images/GC/white-glass/white-glass (10).jpg"


const battery_List = [
  {img:battery1},{img:battery2},{img:battery3},{img:battery4},{img:battery5},{img:battery6},
  {img:battery7},{img:battery8},{img:battery9},{img:battery10},
]
const biological_List = [
  {img:biological1},{img:biological2},{img:biological3},{img:biological4},{img:biological5},{img:biological6},
  {img:biological7},{img:biological8},{img:biological9},{img:biological10},
]
const brownglass_List = [
  {img:brownglass1},{img:brownglass2},{img:brownglass3},{img:brownglass4},{img:brownglass5},{img:brownglass6},
  {img:brownglass7},{img:brownglass8},{img:brownglass9},{img:brownglass10},
]
const cardboard_List = [
  {img:cardboard1},{img:cardboard2},{img:cardboard3},{img:cardboard4},{img:cardboard5},{img:cardboard6},
  {img:cardboard7},{img:cardboard8},{img:cardboard9},{img:cardboard10},
]
const clothes_List = [
  {img:clothes1},{img:clothes2},{img:clothes3},{img:clothes4},{img:clothes5},{img:clothes6},
  {img:clothes7},{img:clothes8},{img:clothes9},{img:clothes10},
]
const greenglass_List = [
  {img:greenglass1},{img:greenglass2},{img:greenglass3},{img:greenglass4},{img:greenglass5},{img:greenglass6},
  {img:greenglass7},{img:greenglass8},{img:greenglass9},{img:greenglass10},
]
const metal_List = [
  {img:metal1},{img:metal2},{img:metal3},{img:metal4},{img:metal5},{img:metal6},
  {img:metal7},{img:metal8},{img:metal9},{img:metal10},
]

const paper_List = [
  {img:paper1},{img:paper2},{img:paper3},{img:paper4},{img:paper5},{img:paper6},
  {img:paper7},{img:paper8},{img:paper9},{img:paper10},
]
const plastic_List = [
  {img:plastic1},{img:plastic2},{img:plastic3},{img:plastic4},{img:plastic5},{img:plastic6},
  {img:plastic7},{img:plastic8},{img:plastic9},{img:plastic10},
]
const shoes_List = [
  {img:shoes1},{img:shoes2},{img:shoes3},{img:shoes4},{img:shoes5},{img:shoes6},
  {img:shoes7},{img:shoes8},{img:shoes9},{img:shoes10},
]
const trash_List = [
  {img:trash1},{img:trash2},{img:trash3},{img:trash4},{img:trash5},{img:trash6},
  {img:trash7},{img:trash8},{img:trash9},{img:trash10},
]
const whiteglass_List = [
  {img:whiteglass1},{img:whiteglass2},{img:whiteglass3},{img:whiteglass4},{img:whiteglass5},{img:whiteglass6},
  {img:whiteglass7},{img:whiteglass8},{img:whiteglass9},{img:whiteglass10},
]
const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 16
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Food_Generator = (Food_List = Food_List) =>{
  return (
    <EmblaCarousel slides={Food_List.map(product => {
      return(
        <div className='d-flex flex-column productDisplayer justify-content-center align-items-center w-100 h-100'>
            <div className='w-100 h-75'>
            <Image src={product.img} alt="" className='vs-img'
            objectFit="cover" height={250} width={250}/>
            </div>
        </div>
      );
    })} options={OPTIONS} />
  );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
            {/* <Typography></Typography> */}
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsHolder = () => {
    const [value, setValue] = React.useState(0);
    const { t, i18n } = useTranslation();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
   
    <Box sx={{ width: '100%' }}>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs  value={value} onChange={handleChange} centered  >
        <Tab label={t("Battery")} {...a11yProps(0)} className='Tab' />
        <Tab label={t("Biological")} {...a11yProps(1)} className='Tab'/>
        <Tab label={t("Brown Glass")} {...a11yProps(2)} className='Tab'/>
        <Tab label={t("Cardboard")} {...a11yProps(3)} className='Tab'/>
        <Tab label={t("Clothes")} {...a11yProps(4)} className='Tab'/>
        <Tab label={t("Green Glass" )}{...a11yProps(5)} className='Tab'/>
        <Tab label={t("Metal")} {...a11yProps(6)} className='Tab'/>
        <Tab label={t("Paper")} {...a11yProps(7)} className='Tab'/>
        <Tab label={t("Plastic")} {...a11yProps(8)} className='Tab'/>
        <Tab label={t("Shoes")} {...a11yProps(9)} className='Tab'/>
        <Tab label={t("Trash")} {...a11yProps(10)} className='Tab'/>
        <Tab label={t("White Glass")} {...a11yProps(11)} className='Tab'/>
      </Tabs>
    </Box>
      <CustomTabPanel value={value} index={0}> {Food_Generator(battery_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={1}> {Food_Generator(biological_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={2}> {Food_Generator(brownglass_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={3}> {Food_Generator(cardboard_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={4}> {Food_Generator(clothes_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={5}> {Food_Generator(greenglass_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={6}> {Food_Generator(metal_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={7}> {Food_Generator(paper_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={8}> {Food_Generator(plastic_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={9}> {Food_Generator(shoes_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={10}> {Food_Generator(trash_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={11}> {Food_Generator(whiteglass_List)} </CustomTabPanel>
    </Box>
    </>

  )
}

export default TabsHolder