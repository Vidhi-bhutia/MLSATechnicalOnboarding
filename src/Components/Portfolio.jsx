/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Voulme Controller",
    description: "Python OpenCV project to change volume of your PC using finger gestures.",
    url: "https://github.com/Vidhi-bhutia/Volume-Control-Through-Hands",
  },
  {
    title: "Music Player",
    description:
      "A Music Player GUI where you need to select the music from your PC and you can pause, resume, stop, and increase/decrease the volume of the music.",
    url: "https://github.com/Vidhi-bhutia/Music-Player",
  },
  {
    title: "My Portfolio Site",
    description: "Created a Portfolio with canva to showcase my Graphic Designing Skills.",
    url: "https://vidhi-bhutia.my.canva.site/portfolio",
  },
  {
    title: "Bus Management Prototype",
    description: "Created a Bus Management Application's prototype to showcase my Figma skills",
    url: "https://www.figma.com/proto/XX6r4eReVyneRbYaMCy3vK/Bus-Management-System?type=design&node-id=105-27&t=eWJx8eyEzgGVscCL-1&scaling=scale-down&page-id=0%3A1&mode=design",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
