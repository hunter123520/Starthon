'use client'
import React from "react";
import "../Styles/LearningPage.css";
import "../Styles/ContactPage.css";
import Container from "react-bootstrap/Container";
// import mmlPDF from "../PDF/mml-book.pdf";

const sources = [
  // {
  //   title: "Linear Algebra",
  //   img: C1,
  //   link: C1PDF,
  // },
  // {
  //   title: "Analytic Geometry",
  //   img: C2,
  //   link: C2PDF,
  // },
  // {
  //   title: "Matrix Decomposition",
  //   img: C3,
  //   link: C3PDF,
  // },
  // {
  //   title: "Vector calculus",
  //   img: C4,
  //   link: C4PDF,
  // },
  // {
  //   title: "Optimization Preliminaries",
  //   img: C5,
  //   link: C5PDF,
  // },
  // {
  //   title: "Gradient Methods for unconstrained Optimization",
  //   img: C6,
  //   link: C6PDF,
  // },
  // {
  //   title: "Constrained Optimization",
  //   img: C7,
  //   link: C7PDF,
  // },
  {
    title: "Mathematics for Machine Learning",

    link:  "../PDF/mml-book.pdf",
  },
];
const render_sources = sources.map((source, index) => {
  return (
    <div className="source" key={source.title}>
      <a
        href={source.link}
        download={source.title}
        target="_blank"
        rel="noreferrer"
      >
        <img className="sourceimage" src={source.img} alt={source.title} />
      </a>

      <span className="sourcetitle">{source.title}</span>
    </div>
  );
});

const LearningPage = () => {
  return (
    <div>
      <Container fluid="xxl" className="CPT">
        <div className="CPTTitle">
          The Learning Center
          <hr className="lineSt" />
        </div>
        <div className="CPTdesc">
          Education Resources to make your work easier, the resources created by
          Dr Bouanane which mainly written from the book of Mathemathics for
          Machine Learning ( Still Modification )
        </div>
      </Container>

      <Container fluid="xl" className="ResourcesCont">
        {render_sources}
      </Container>
    </div>
  );
};

export default LearningPage;
