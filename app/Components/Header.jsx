"use client"; // Required in Next.js App Router

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Header.css";

import WhiteLG from "../Images/logo/WhiteLG.png";
import univ_logo from "../Images/logo/logo.png";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import i18n from "../i18n";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 19.44 14"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M 8.4 14 L 0 14 L 0 0 L 8.4 0 L 8.4 1.64 L 1.9 1.64 L 1.9 5.9 L 7.5 5.9 L 7.5 7.5 L 1.9 7.5 L 1.9 12.36 L 8.4 12.36 L 8.4 14 Z M 12.5 14 L 10.7 14 L 10.7 3.6 L 12.44 3.6 L 12.44 5.34 Q 13 4.5 13.87 3.93 A 3.463 3.463 0 0 1 15.291 3.405 A 4.526 4.526 0 0 1 15.94 3.36 A 4.645 4.645 0 0 1 16.953 3.464 Q 17.622 3.613 18.109 3.978 A 2.652 2.652 0 0 1 18.57 4.42 A 3.681 3.681 0 0 1 19.291 5.896 Q 19.44 6.5 19.44 7.22 L 19.44 14 L 17.64 14 L 17.64 7.42 A 3.853 3.853 0 0 0 17.572 6.672 Q 17.484 6.229 17.284 5.879 A 2.193 2.193 0 0 0 17.11 5.62 Q 16.58 4.94 15.64 4.94 A 2.624 2.624 0 0 0 14.27 5.333 A 3.471 3.471 0 0 0 13.9 5.59 Q 13.08 6.24 12.5 7.12 L 12.5 14 Z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 19.44 14"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M 12.96 13.5 L 11.22 14.2 L 9.66 10.2 L 3.18 10.2 L 1.62 14.16 L 0 13.5 L 5.48 0 L 7.56 0 L 12.96 13.5 Z M 16.56 14 L 14.76 14 L 14.76 3.6 L 16.5 3.6 L 16.5 5.86 Q 16.76 5.2 17.2 4.63 Q 17.64 4.06 18.3 3.71 A 2.963 2.963 0 0 1 19.236 3.405 A 3.892 3.892 0 0 1 19.84 3.36 Q 20.14 3.36 20.44 3.39 A 3.794 3.794 0 0 1 20.651 3.417 Q 20.751 3.432 20.836 3.452 A 1.763 1.763 0 0 1 20.94 3.48 L 20.4 5.34 Q 20.037 5.187 19.547 5.18 A 3.318 3.318 0 0 0 19.5 5.18 A 2.592 2.592 0 0 0 18.174 5.549 A 3.122 3.122 0 0 0 18.09 5.6 A 2.68 2.68 0 0 0 17.396 6.239 Q 17.175 6.524 16.996 6.888 A 4.585 4.585 0 0 0 16.99 6.9 A 3.864 3.864 0 0 0 16.696 7.762 Q 16.56 8.375 16.56 9.14 L 16.56 14 Z M 6.42 1.88 L 3.78 8.6 L 9.04 8.6 L 6.42 1.88 Z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
import LoginPopup from "./LoginPopup"; // Adjust path if needed

// const CustomLink = ({ href, children, ...props }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;
//   const linkClass = isActive ? "nav-link active" : "nav-link";
//   return (
//     <Link href={href} legacyBehavior>
//       <a className={linkClass} {...props}>{children}</a>
//     </Link>
//   );
// };

function CustomLink({ href, children, ...props }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    // rel="prefetch" 
    <Link href={href} {...props} className={`${isActive ? "activatedLINK" : "inactive"} align-content-center nav-link`} style={{"fontSize":"1.2em","padding":"1em"}}>
      {children}
    </Link>
  );
}


export default function Header() {
  const { t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null); // { academicNumber, isAdmin }
  const pathname = usePathname();
  const handleLogin = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <Navbar
      bg="light"
      expand="md"
      bsPrefix="navbar"
      className={pathname.includes("/About") ? "WhiteMode" : ""}
    >
       <Container fluid="sm">
         <Navbar.Brand href="/">
           <Image
            className="logo"
            src={pathname.includes("/About") ? WhiteLG : univ_logo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-end w-100 justify-content-end">
            <CustomLink className="link_page" href="/"> {t("Home")} </CustomLink>

            {user?.isAdmin && (
              <CustomLink className="link_page" href="/Dashboard"> {t("Dashboard")} </CustomLink>
            )}
            {user && !user.isAdmin && (
              <CustomLink className="link_page" href="/Browse"> Browse </CustomLink>
            )}

            <CustomLink className="link_page" href="/Assistant"> {t("Assistant")} </CustomLink>
            <CustomLink className="link_page" href="/Industries"> {t("For Industries")} </CustomLink>
            <CustomLink className="link_page" href="/About"> {t("About")} </CustomLink>
            <CustomLink className="link_page" href="/Contact"> {t("Contact us")} </CustomLink>
          </Nav>

          <Button
            variant="outline-primary"
            onClick={() => setShowLogin(true)}
            style={{ marginRight: '1em' }}
          >
            Login
          </Button>

          {/* <MaterialUISwitch sx={{ m: 1 }} defaultChecked /> */}
          {/* <LanguageChanger /> */}
          <MaterialUISwitch value={i18n.resolvedLanguage != "ar"} sx={{ m: 1 }} onClick={()=>{
            console.log(i18n.resolvedLanguage)
            if(i18n.resolvedLanguage == "ar"){
              i18n.changeLanguage("en");
            }else{
              i18n.changeLanguage("ar");
            }
          }} />
        </Navbar.Collapse>
      </Container>

      <LoginPopup
        show={showLogin}
        handleClose={() => setShowLogin(false)}
        onLogin={handleLogin}
      />
    </Navbar>
  );
}

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Styles/Header.css";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import WhiteLG from "../Images/logo/WhiteLG.png";
// import univ_logo from "../Images/logo/logo.png";
// import Switch, { SwitchProps } from '@mui/material/Switch';
// import { styled } from '@mui/material/styles';
// import { useTranslation } from "react-i18next";
// import Image from "next/image";

// import i18n from "../i18n";
// const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   '& .MuiSwitch-switchBase': {
//     margin: 1,
//     padding: 0,
//     transform: 'translateX(6px)',
//     '&.Mui-checked': {
//       color: '#fff',
//       transform: 'translateX(22px)',
//       '& .MuiSwitch-thumb:before': {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 19.44 14"><path fill="${encodeURIComponent(
//           '#fff',
//         )}" d="M 8.4 14 L 0 14 L 0 0 L 8.4 0 L 8.4 1.64 L 1.9 1.64 L 1.9 5.9 L 7.5 5.9 L 7.5 7.5 L 1.9 7.5 L 1.9 12.36 L 8.4 12.36 L 8.4 14 Z M 12.5 14 L 10.7 14 L 10.7 3.6 L 12.44 3.6 L 12.44 5.34 Q 13 4.5 13.87 3.93 A 3.463 3.463 0 0 1 15.291 3.405 A 4.526 4.526 0 0 1 15.94 3.36 A 4.645 4.645 0 0 1 16.953 3.464 Q 17.622 3.613 18.109 3.978 A 2.652 2.652 0 0 1 18.57 4.42 A 3.681 3.681 0 0 1 19.291 5.896 Q 19.44 6.5 19.44 7.22 L 19.44 14 L 17.64 14 L 17.64 7.42 A 3.853 3.853 0 0 0 17.572 6.672 Q 17.484 6.229 17.284 5.879 A 2.193 2.193 0 0 0 17.11 5.62 Q 16.58 4.94 15.64 4.94 A 2.624 2.624 0 0 0 14.27 5.333 A 3.471 3.471 0 0 0 13.9 5.59 Q 13.08 6.24 12.5 7.12 L 12.5 14 Z"/></svg>')`,
//       },
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
//     width: 32,
//     height: 32,
//     '&::before': {
//       content: "''",
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       left: 0,
//       top: 0,
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 19.44 14"><path fill="${encodeURIComponent(
//         '#fff',
//       )}" d="M 12.96 13.5 L 11.22 14.2 L 9.66 10.2 L 3.18 10.2 L 1.62 14.16 L 0 13.5 L 5.48 0 L 7.56 0 L 12.96 13.5 Z M 16.56 14 L 14.76 14 L 14.76 3.6 L 16.5 3.6 L 16.5 5.86 Q 16.76 5.2 17.2 4.63 Q 17.64 4.06 18.3 3.71 A 2.963 2.963 0 0 1 19.236 3.405 A 3.892 3.892 0 0 1 19.84 3.36 Q 20.14 3.36 20.44 3.39 A 3.794 3.794 0 0 1 20.651 3.417 Q 20.751 3.432 20.836 3.452 A 1.763 1.763 0 0 1 20.94 3.48 L 20.4 5.34 Q 20.037 5.187 19.547 5.18 A 3.318 3.318 0 0 0 19.5 5.18 A 2.592 2.592 0 0 0 18.174 5.549 A 3.122 3.122 0 0 0 18.09 5.6 A 2.68 2.68 0 0 0 17.396 6.239 Q 17.175 6.524 16.996 6.888 A 4.585 4.585 0 0 0 16.99 6.9 A 3.864 3.864 0 0 0 16.696 7.762 Q 16.56 8.375 16.56 9.14 L 16.56 14 Z M 6.42 1.88 L 3.78 8.6 L 9.04 8.6 L 6.42 1.88 Z"/></svg>')`,
//     },
//   },
//   '& .MuiSwitch-track': {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//     borderRadius: 20 / 2,
//   },
// }));


// function CustomLink({ href, children, ...props }) {
//   const pathname = usePathname();
//   const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

//   return (
//     // rel="prefetch" 
//     <Link href={href} {...props} className={`${isActive ? "activatedLINK" : "inactive"} align-content-center nav-link`} style={{"fontSize":"1.2em","padding":"1em"}}>
//       {children}
//     </Link>
//   );
// }

// function Header() {
//   const { t, i18n } = useTranslation();
//   const pathname = usePathname();

//   return (
//     <>
//     <Navbar
//       bg="light"
//       expand="md"
//       bsPrefix="navbar"
//       className={pathname.includes("/About") ? "WhiteMode" : ""}
//     >
//       <Container fluid="sm">
//         <Navbar.Brand href="/">
//           <Image
//             className="logo"
//             src={pathname.includes("/About") ? WhiteLG : univ_logo}
//             alt="logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto align-end w-100 justify-content-end">
//             <CustomLink className="link_page" href="/"> {t("Home")}</CustomLink>
//             <CustomLink className="link_page" href="/Dashboard"> {t("Dashboard")} </CustomLink>
//             <CustomLink className="link_page" href="/Assistant"> {t("Assistant")} </CustomLink>
//             <CustomLink className="link_page" href="/Industries"> {t("For Industries")} </CustomLink>
//             <CustomLink className="link_page" href="/About">{t("About")}</CustomLink>
//             <CustomLink className="link_page " href="/Contact"> {t("Contact us")} </CustomLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>

//       <MaterialUISwitch value={i18n.resolvedLanguage != "ar"} sx={{ m: 1 }} onClick={()=>{
//         console.log(i18n.resolvedLanguage)
//         if(i18n.resolvedLanguage == "ar"){
//           i18n.changeLanguage("en");
//         }else{
//           i18n.changeLanguage("ar");
//         }
//       }} />



//     </Navbar>
//   </>
//   );
// }

// export default Header;
