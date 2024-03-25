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

//importing Footer component
import Footer from "../../Components/Footer/Footer";

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center center;
  background-image: url("https://images.unsplash.com/photo-1608611821879-e6a989ed75c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  opacity: 0.85;

  /* Media queries for different device sizes */

  /* PCs and laptops */
  @media only screen and (min-width: 1024px) {
    height: 80vh;
  }

  /* Tablets, iPads (portrait and landscape) */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 80vh;
  }

  @media only screen and (max-width: 767px) {
    height: 50vh;
  }

  /* Mobile devices (portrait and landscape) */
  @media only screen and (max-width: 465px) {
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

const projects = [
  {
    title: "Google-Keep Clone With Latest Web-Tech",
    description:
      "Introducing our innovative React-powered application – a dynamic and feature-rich clone of Google Keep. Seamlessly combining cutting-edge technology with intuitive design, our app brings the power of organization and productivity to your fingertips. Designed to mimic the beloved features of Google Keep, our application offers a sleek and user-friendly interface that makes note-taking and task management a breeze. With the versatility of React, we've crafted an experience that ensures fluid responsiveness and an immersive user journey across all devices.",
    imageUrl:
      "https://images.idgesg.net/images/article/2021/09/google-keep-01-home-page-blank-100901215-large.jpg?auto=webp&quality=85,70",
  },
  {
    title: "Netflix Clone With Latest Web-Tech",
    description:
      "Welcome to our cutting-edge Netflix Clone – a React-powered...",
    imageUrl:
      "https://user-images.githubusercontent.com/61585443/185205338-c20bb089-618f-49e2-b740-1c02838030a4.png",
  },
  {
    title: "Footsall For All The Football Fans Out There",
    description:
      "Welcome to Footsall Football – your ultimate destination for...",
    imageUrl:
      "https://themeforest.img.customer.envatousercontent.com/files/447285452/fc/01_fc.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=eec4a7f98ff807b896be37f06a48c02d",
  },
  {
    title: "Experia a traveller Website",
    description:
      "Welcome to Experia Travelling – where your wanderlust meets...",
    imageUrl:
      "https://assets.awwwards.com/awards/submissions/2018/08/5b7e5eaa8034e.jpg",
  },
];

function HomePage() {
  //usestate for project and client count
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  //typewriter  effect on homepage heading
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
            <img src="https://cdn.icon-icons.com/icons2/461/PNG/128/grimace_43851.png" alt="" className="smiley" />
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
            {/* <img src="https://cdn.icon-icons.com/icons2/3767/PNG/512/sphere_ball_icon_231509.png" alt="sphere" /> */}
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

      {/* projects show case starts*/}

      <div className="projects">
        <div className="projects_heading">
          <h2>Sample Projects</h2>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <div className="project-image">
                <img
                  className="project-pic"
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* projects show case ends*/}


      {/* contact show starts*/}

      <div className="contact">
        <div className="contact_quote">
          <h2>
            "I'm always looking for new opportunities to collaborate and grow." Let's Join and work Togethere.
          </h2>
        </div>

        <div className="contact_social">
          <Button variant="contained">Hit on my Social <img src="https://cdn.icon-icons.com/icons2/461/PNG/128/big_smile_43859.png" alt="smiley" className="smiley" /></Button>
        </div>


      </div>
      {/* contact show ends*/}

      <Footer />

    </>
  );
}

export default HomePage;
