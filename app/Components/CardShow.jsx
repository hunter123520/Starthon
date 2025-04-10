import React from 'react'
import { Button } from '@mui/material';
import Link from 'next/link'
import { useTranslation } from "react-i18next";
const CardShow = ({title="Recycle",icon,text="",link}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className='Card-Show d-flex flex-column justify-content-center align-items-center pl-3 pr-3'>
        <div className='d-flex flex-column justify-content-center align-items-center ' style={{height:"55%",zIndex:5,gap:"10px"}}>
            
            {icon}
            <span style={{fontWeight:"600",fontSize:"18px"}}>
            {title}
            </span>
        </div>
        <div className='d-flex flex-column justify-content-start align-items-center text-center' style={{height:"35%",gap:"10px"}}>
            <span style={{color:"white", fontSize:"14px"}}>
                    {text}
            </span>
            <Link href={link} >
                <Button variant='outlined' className='intro-button-nb'>{t("Find More")}</Button>
            </Link>
        </div>
    </div>
  )
}

export default CardShow