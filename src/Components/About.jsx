/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/image2.jpg";

const imageAltText = "cute rocks background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a Digital Innovator, I am weaving creativity and technology to bring ideas to life and make a meaningful impact.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Programming",
  "Prototyping",
  "Graphic Designing",
  "Photography",
  "Prompt Engineer",
  "Team Management",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Hello! I'm Vidhi Bhutia, a dynamic problem solver and Microsoft Certified professional specializing in Azure AI Fundamentals. Currently pursuing a Bachelor's in Computer Science and Business Systems at Vellore Institute of Technology, I bring a unique blend of creativity and technical proficiency to the table. With expertise in photography, graphic design, entrepreneurship and coding, I am passionate about transforming ideas into innovative digital solutions.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
