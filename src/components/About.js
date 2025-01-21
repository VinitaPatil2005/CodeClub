import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-overlay"></div>
      <div className="about-container">
        <h2 className="fade-in">About Us</h2>
        <p className="slide-in">
          Welcome to CodeClub! Founded in [Year], we have been dedicated to
          empowering students through technology and collaboration. Our mission
          is to create a supportive community where creativity, innovation, and
          learning thrive.
          Now letss see
        </p>

        <h3 className="fade-in">Our Vision</h3>
        <p className="slide-in">
          To cultivate future-ready tech leaders by fostering a culture of
          knowledge sharing, hands-on learning, and community engagement.
        </p>

        <h3 className="fade-in">Goals</h3>
        <ul className="slide-in">
          <li>Provide students with resources to learn and excel in technology.</li>
          <li>Organize workshops, hackathons, and events to enhance technical skills.</li>
          <li>Build a network of like-minded individuals passionate about tech.</li>
        </ul>

        <h3 className="fade-in">Why Join Us?</h3>
        <ul className="slide-in">
          <li>Access to mentorship and expert guidance.</li>
          <li>Opportunity to work on real-world projects and gain experience.</li>
          <li>Expand your professional network with peers and industry leaders.</li>
          <li>Be a part of an innovative and supportive community.</li>
        </ul>

        <h3 className="fade-in">Testimonials</h3>
        <div className="testimonials slide-in">
          <div className="testimonial zoom-in">
            <blockquote>
              "CodeClub helped me build my confidence and land my dream
              internship. The community is amazing!" 
            </blockquote>
            <cite>- Jane Doe, Alumni</cite>
          </div>
          <div className="testimonial zoom-in">
            <blockquote>
              "Joining CodeClub was the best decision. I learned so much and
              made lifelong friends." 
            </blockquote>
            <cite>- John Smith, Current Member</cite>
          </div>
          <div className="testimonial zoom-in">
            <blockquote>
              "The workshops and hackathons were game-changers for my technical
              skills." 
            </blockquote>
            <cite>- Alex Johnson, Alumni</cite>
          </div>
        </div>
      </div>
      
    </section>
  );
};





export default About;
