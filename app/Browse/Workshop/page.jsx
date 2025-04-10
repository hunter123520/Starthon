'use client'
import React from 'react'
import WC from "../../Images/WC.jpg"
import SelectiveCard from '@/app/Components/SelectiveCard'
import "@/app/Styles/Browse.css"

import { useEffect, useState } from 'react';
const page = () => {
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
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='d-flex flex-column align-items-center justify-content-center flex-fill mainTitle w-100 mt-5 mb-0 pb-5'>
            <span>Scientific</span>
            <span className='main squeeze'>Workshops</span>
        </div>
        <div className='d-flex flex-row justify-content-center align-items-center flex-wrap' style={{gap:5,paddingLeft:25,paddingRight:25}}>
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
    </div>
  )
}

export default page