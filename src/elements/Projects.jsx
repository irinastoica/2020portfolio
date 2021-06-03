import React from "react";
import Footer from "../component/footer/FooterTwo";
import PageHelmet from "../component/common/Helmet";
import PortfolioList from "../elements/portfolio/PortfolioList";
import Header from "../component/header/HeaderDetails";


const Projects = () => {

  return(
    <React.Fragment>
      <PageHelmet pageTitle='Contact Me' />
      <Header logo="symbol-dark"/>

<div id="portfolio" className="fix">
    <div className="portfolio-area ptb--120">
      <div className="portfolio-sacousel-inner">
        <div className="projectsWrapper">
          <div className="project-container">
            <PortfolioList styevariation="text-left mt--40" item="7" />
          </div>
        </div>
      </div>
    </div>
  </div>

      <Footer />
    </React.Fragment>


  );
};
export default Projects;
