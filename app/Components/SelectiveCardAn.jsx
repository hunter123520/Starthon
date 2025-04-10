import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
// import FallbackImage from '@/components/FallbackImage';
import FallbackImage from "./FallbackImage"
const SelectiveCardAn = ({
  title,
  description,
  subdescription,
  img,
  link,
  date,
  onClick,
}) => {
  
  return (
    <Link href={link==null?"/Browse":(link.length==0?"/Browse":link)} style={{display:"block", maxWidth: 350, width: 350 }}>
    <Card
      className="CCPut"
      sx={{ maxWidth: 350, width: 350 }}
      onClick={onClick}
    >
      <CardActionArea className=" h-100 " href={link != null ? link : "/Browse"}>
        {/* <CardMedia
          component="img"
          height="250"
          image={img}
          alt="green iguana"
          loading="lazy"
        /> */}
        <div style={{ height: "250px", width: "350px", position: "relative", overflow: "hidden" }}>
                {/* <Image
                    src={img}
                    alt="your image"
                    fill // Makes the image fill the container
                    style={{ objectFit: "cover" }}
                    onError={(event) => {
                        event.target.src = 'https://www.univ-eloued.dz/wp-content/uploads/2024/09/logoue.png';
                      }}
                /> */}
                <FallbackImage
                    src={img}
                    alt="your image"
                    fill // Makes the image fill the container
                    style={{ objectFit: "cover" }}
                    />
                </div>
        
        
        <CardContent className="d-flex flex-column w-100 justify-content-center align-items-center">
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            fontSize={"16px"}
            color={"#333"}
            lineHeight={"16px"}
            fontWeight={"bold"}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="#666"
            fontSize={"12px"}
            letterSpacing={"0.05em"}
            margin={" 2em 0 0 0"}
          >
            {description}
          </Typography>
          {subdescription == null ? (
            <></>
          ) : (
            <Typography
              variant="body2"
              color="#999"
              fontSize={"10px"}
              letterSpacing={"0.05em"}
              margin={" 2em 0 0 0"}
            >
              {date} 
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
};

export default SelectiveCardAn;
