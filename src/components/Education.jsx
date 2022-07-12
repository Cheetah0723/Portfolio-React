import React, { useEffect, useState, useContext } from "react";
import { Chrono } from "react-chrono";
import { Carousel, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Fade from "react-reveal";
import { ThemeContext } from "styled-components";
import endpoints from "../constants/endpoints";
import Header from "./Header";
import FallbackSpinner from "./FallbackSpinner";
import "../css/education.css";

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [width, setWidth] = useState("50vw");
  const [mode, setMode] = useState("VERTICAL_ALTERNATING");

  useEffect(() => {
    fetch(endpoints.education, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    if (window?.innerWidth < 576) {
      setMode("VERTICAL");
    }

    if (window?.innerWidth < 576) {
      setWidth("90vw");
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth("90vw");
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth("75vw");
    } else {
      setWidth("50vw");
    }
  }, []);

  return (
    <div className="education">
      <Header title={header} />
      {data ? (
        <Fade>
          <div style={{ width }} className="section-content-container">
            <Container>
              <Carousel>
                {data.carousel.map((image) =>
                  image ? (
                    <Carousel.Item key={image}>
                      <div className="carousel-items" >
                        <img  src={image} alt={image} />
                      </div>
                    </Carousel.Item>
                  ) : null
                )}
              </Carousel>
              <Chrono
                hideControls
                allowDynamicUpdate
                useReadMore={false}
                items={data.education}
                cardHeight={250}
                mode={mode}
                theme={{
                  primary: theme.accentColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  cardForeColor: theme.chronoTheme.cardForeColor,
                  titleColor: theme.chronoTheme.titleColor,
                }}
              >
                {data.education.map((education) =>
                  education.icon ? (
                    <div className="chrono-icons" key={education.icon.src}>
                      <img
                        src={education.icon.src}
                        alt={education.icon.alt}
                      />
                    </div>
                  ) : null
                )}
              </Chrono>
            </Container>
          </div>
        </Fade>
      ) : (
        <FallbackSpinner />
      )}
    </div>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
