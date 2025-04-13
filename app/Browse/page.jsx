'use client'
import React from 'react'
import SelectInput from '@mui/material/Select/SelectInput'
import Link from 'next/link'
import SelectiveCard from "../Components/SelectiveCard"
import WC from "../Images/WC.jpg"
import GL from "../Images/GL.png"
import "../Styles/Browse.css"
import { Button } from '@mui/material'
import { useEffect, useState } from 'react';

  
const Browse = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/data/data_new.json')
        .then((res) => res.json())
        .then((data) => setEvents(data))
        .catch((err) => console.error('Error loading JSON:', err));
    }, []);
    const Workshops = [
        {
          title: "ورشة علمية تطبيقية منظمة",
          description:
            "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
          img: WC,
          link:"",
          date:"2025/03/25"
        },
        {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: WC,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: WC,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: WC,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: WC,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: WC,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: WC,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: WC,
            link:"",
            date:"2025/03/25"
          },
    ]

    const Events = [
        {
          title: "ورشة علمية تطبيقية منظمة",
          description:
            "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
          img: GL,
          link:"",
          date:"2025/03/25"
        },
        {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: GL,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: GL,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: GL,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: GL,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: GL,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: GL,
            link:"",
            date:"2025/03/25"
          },
          {
            title: "ورشة علمية تطبيقية منظمة",
            description:
              "توفر جامعة الواد ورشة علمية موجهة لطلبة السنة الاولى",
            img: GL,
            link:"",
            date:"2025/03/25"
          },
    ]
  return (
    <div>
<div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='d-flex flex-column align-items-center justify-content-center flex-fill mainTitle w-100 mt-5 mb-0 pb-5'>
            <span>Your</span>
            <span className='main squeeze'>Recommendation</span>
        </div>
        <div className='d-flex flex-row justify-content-center align-items-center flex-wrap' style={{gap:5,paddingLeft:15,paddingRight:15}}>
        {events.slice(0, 8).map((e, i) => {
              return (
                <SelectiveCard
                key={"elementV-"+i}
                  title={e.Title}
                  description={e.Content.split(" ").slice(0, 20).join(" ") + (e.Content.split(" ").length > 20 ? "..." : "")}
                  img={e.Poster}
                  subdescription={
                    e.Content != null ? e.Content.length : 0
                  }
                  link={(e.Link.length == 0 || e.Link == null) ? "/Browse":e.Link}
                  date={e.Date}
                />
              );
            })}
        </div>
        <Link className='w-25 mt-3' href={"/Browse/Workshop"}>
        <Button className="mt-2 w-100" variant="contained" >
            Show More
        </Button>
        </Link>
    </div>


        <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='d-flex flex-column align-items-center justify-content-center flex-fill mainTitle w-100 mt-5 mb-0 pb-5'>
            <span>Scientific</span>
            <span className='main squeeze'>Workshops</span>
        </div>
        <div className='d-flex flex-row justify-content-center align-items-center flex-wrap' style={{gap:5,paddingLeft:15,paddingRight:15}}>
        {events.slice(0, 8).map((e, i) => {
              return (
                <SelectiveCard
                key={"elementV-"+i}
                  title={e.Title}
                  description={e.Content.split(" ").slice(0, 20).join(" ") + (e.Content.split(" ").length > 20 ? "..." : "")}
                  img={e.Poster}
                  subdescription={
                    e.Content != null ? e.Content.length : 0
                  }
                  link={(e.Link.length == 0 || e.Link == null) ? "/Browse":e.Link}
                  date={e.Date}
                />
              );
            })}
        </div>
        <Link className='w-25 mt-3' href={"/Browse/Workshop"}>
        <Button className="mt-2 w-100" variant="contained" >
            Show All
        </Button>
        </Link>
    </div>

    <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
        <div className='d-flex flex-column align-items-center justify-content-center flex-fill mainTitle w-100 mt-5 mb-0 pb-5'>
            <span>Technical</span>
            <span className='main squeeze'>Events</span>
        </div>
        <div className='d-flex flex-row justify-content-center align-items-center flex-wrap' style={{gap:5,paddingLeft:15,paddingRight:15}}>
        {events.slice(0, 8).map((e, i) => {
              return (
                <SelectiveCard
                key={"elementV-"+i}
                  title={e.Title}
                  description={e.Content.split(" ").slice(0, 20).join(" ") + (e.Content.split(" ").length > 20 ? "..." : "")}
                  img={e.Poster}
                  subdescription={
                    e.Content != null ? e.Content.length : 0
                  }
                  link={(e.Link.length == 0 || e.Link == null) ? "/Browse":e.Link}
                  date={e.Date}
                />
              );
            })}
        </div>
        <Link className='w-25 mt-3' href={"/Browse/Workshop"}>
        <Button className="mt-2 w-100" variant="contained" >
            Show All
        </Button>
        </Link>
    </div>

    
    </div>
  )
}

export default Browse