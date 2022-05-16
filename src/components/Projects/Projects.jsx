import React from "react";
import ProjectTileContainer from "./ProjectTileContainer";
import BlankTileContainer from "./BlankTileContainer";

import Coupons from "../../thumbnails/coupons.png";
import Marge from "../../thumbnails/marge.png";
import TicTacToe from "../../thumbnails/TicTacToe.png";
import Todos from "../../thumbnails/Todos.png";
import Towers from "../../thumbnails/Towers.png";
import Bluebird from "../../thumbnails/bluebird.png";
import Candie from "../../thumbnails/candie.png";
import Jeerkat from "../../thumbnails/jeerkat.png";
import Minesweeper from "../../thumbnails/minesweeper.png";
import Portfolio1 from "../../thumbnails/portfolio1.png";
import FAQ from "../../thumbnails/faq.png";

const Projects = (props) => {
  return (
    <div className="projects" id="projects" data-nav="show">
      <ProjectTileContainer
        title="Frontend Sandbox"
        imageUrl={FAQ}
        pageUrl="https://www.frontend-sandbox.aaronparisi.dev"
        gitUrl="https://github.com/aaronparisi/frontend-sandbox"
        description="My most enjoyable set of projects 🎨"
        techs={["React", "TypeScript"]}
        underConstruction={true}
      />
      <ProjectTileContainer
        title="Coupon Vision"
        imageUrl={Coupons}
        pageUrl="https://www.coupons.aaronparisi.dev"
        gitUrl="https://github.com/aaronparisi/CouponVision-api.git"
        description="See how much YOU can save!!"
        techs={["Rails", "React", "Redux", "D3", "SVG", "Axios"]}
      />
      <ProjectTileContainer
        title="Springfield BnB"
        imageUrl={Marge}
        pageUrl="http://www.springfield-bnb.aaronparisi.dev"
        gitUrl="https://github.com/aaronparisi/Springfield-BnB-Frontend.git"
        description="I hear the Springfield Power Plant is lovely this time of year."
        techs={["Rails", "React", "Redux", "Amazon S3 Storage", "Axios"]}
        underConstruction={true}
      />
      <ProjectTileContainer
        title="Todos"
        imageUrl={Todos}
        // pageUrl="https://aarons-todos.herokuapp.com/"
        pageUrl="http://www.todos.aaronparisi.dev"
        gitUrl="https://github.com/aaronparisi/Todo-List-Rails-React-Redux"
        description="Check out this site... It is your destiny."
        techs={["Rails", "React", "Redux", "PostgreSQL", "Webpacker"]}
      />
      <BlankTileContainer />
      <ProjectTileContainer
        title="Frontend Auth"
        imageUrl={Bluebird}
        pageUrl="https://www.frontend-auth.aaronparisi.dev/"
        gitUrl="https://github.com/aaronparisi/front-end-auth-demo-frontend"
        description="Is THIS why the birds are so angry??"
        techs={["Rails6", "React", "Redux", "PostgreSQL"]}
      />
    </div>
  );
};

export default Projects;
