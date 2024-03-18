import React, { useEffect, useState } from "react";

//importing libraries for typing animation
import { useTypewriter, Cursor } from "react-simple-typewriter";

// //importing mui libraries
import { Button } from "@mui/material";
import styled from "styled-components";

//importing components
import TopBar from "../../Components/TopBar/TopBar";

//importing styling files
import "./HomePage.css";

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-position: center center;
  background-image: url("https://images.unsplash.com/photo-1608611821879-e6a989ed75c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  opacity: 0.85;

  /* Media queries for different device sizes */

  /* Mobile devices (portrait and landscape) */
  @media only screen and (max-width: 465px) {
    height: 90vh;
  }
 

  /* Tablets, iPads (portrait and landscape) */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 90vh;
  }
  @media only screen and (max-width: 767px) {
    height: 50vh;
  }

  /* PCs and laptops */
  @media only screen and (min-width: 1024px) {
    height: 50vh;
  }
`;

const iconsData = [
  {
    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png",
    alt: "Java",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
    alt: "Html",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png",
    alt: "css",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
    alt: "javascript",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
    alt: "react",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
    alt: "redux",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png",
    alt: "tailwaind",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_170157.png",
    alt: "figma",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png",
    alt: "node",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/express_original_logo_icon_146527.png",
    alt: "express",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sql_icon_130152.png",
    alt: "sql",
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_mongo_icon_130383.png",
    alt: "mongoDb",
  },
];

function HomePage() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  const [text] = useTypewriter({
    words: ["Developer", "UI/UX Designer", "Photographer", "YouTuber"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  //useeffect for  getting project count from the server

  useEffect(() => {
    const projectsInterval = setInterval(() => {
      if (projectsCount < 6) {
        setProjectsCount(projectsCount + 1);
      }
    }, 20);

    const clientsInterval = setInterval(() => {
      if (clientsCount < 40) {
        setClientsCount(clientsCount + 1);
      }
    }, 20);

    return () => {
      clearInterval(projectsInterval);
      clearInterval(clientsInterval);
    };
  }, [projectsCount, clientsCount]);

  return (
    <>
      <TopBar />
      {/* covercontainer starts */}
      <CoverContainer className="Cover_wall">
        <div className="Owner_details">
          <h1>Hello Abhinab Sarkar Here </h1>
          <h1>
            I'm a <span>{text}</span>
            <span style={{ color: "red" }}>
              <Cursor cursorStyle="|" />
            </span>
          </h1>
          <Button className="talk" variant="contained">
            Let's Talk
          </Button>
        </div>
      </CoverContainer>
      {/* covercontainer ends */}

      {/* tech stack starts */}
      <div className="tech">
        <div className="tech_doc">
          <h2>My Tech Stack</h2>
        </div>

        <div className="tech_icons">
          {iconsData.map((icon, index) => (
            <div className="tech_icon_wrapper" key={index}>
              <img
                className="tech_png"
                src={icon.src}
                alt={icon.alt}
                style={{ width: "50px", height: "50px", gap: "1em" }}
              />
              <div className="tech_icon_overlay"></div>
            </div>
          ))}
        </div>
      </div>
      {/* tech stack ends */}

      {/* user info starts*/}

      <section id="user_info">
        <div className="aboutme_heading">
          <h2>About Me</h2>
        </div>

        <div className="about_me">
          <div className="bio_pic">
            <img src=" " alt="sphere" />
          </div>

          <div className="bio">
            <h3>I'm a Front-end Developer with 1 year of experience.</h3>
            <p>
              I'm a Front-end Developer with over 1 year of experience. I'm from
              India. I code and create web elements for companies & amazing
              people around the world. I like to work with new people, new
              Experiences. I actively participated in redesigning the user
              interface of our core platform using HTML, CSS, and JavaScript,
              resulting in an enhanced user experience and a 20% increase in
              user engagement within the first month. Leveraging my
              problem-solving skills, I resolved critical UI/UX issues, ensuring
              a seamless browsing experience for users across devices.
            </p>

            <div className="counter">
              <div className="strike">
                <span>{projectsCount} +</span>
                <p>Projects</p>
                <Button className="talk" variant="contained">
                  Contact Me
                </Button>
              </div>

              <div className="strike">
                <span>{clientsCount} +</span>
                <p>Happy Clients</p>
                <Button className="talk" variant="contained">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* user info ends*/}
    </>
  );
}

export default HomePage;
