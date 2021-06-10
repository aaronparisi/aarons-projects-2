import React from 'react'
import ProjectTileContainer from './ProjectTileContainer'
import BlankTileContainer from './BlankTileContainer'

import Marge from '../../thumbnails/marge.png'
import TicTacToe from '../../thumbnails/TicTacToe.png'
import Todos from '../../thumbnails/Todos.png'
import Towers from '../../thumbnails/Towers.png'
import Bluebird from '../../thumbnails/bluebird.png'
import Candie from '../../thumbnails/candie.png'
import Jeerkat from '../../thumbnails/jeerkat.png'
import Minesweeper from '../../thumbnails/minesweeper.png'
import Portfolio1 from '../../thumbnails/portfolio1.png'

const Projects = props => {

  return (
    <div className="projects" id="projects" data-nav="show">
      <ProjectTileContainer
        title="Springfield BnB"
        imageUrl={Marge}
        pageUrl="http://www.springfield-bnb.aaronparisidev.com"
        gitUrl="https://github.com/aaronparisi/Springfield-BnB-Frontend.git"
        description="I hear the Springfield Power Plant is lovely this time of year."
        techs={["Rails", "React", "Redux", "Amazon S3 Storage", "Axios"]}
      />
      <ProjectTileContainer
        title="Candie's Swingin' 70th"
        imageUrl={Candie}
        pageUrl="http://www.candies-70th.aaronparisidev.com/1"
        gitUrl="https://github.com/aaronparisi/candies-70th-frontend"
        description="Happy birthday dear best-friend's-mommmmm 🎶"
        techs={["React"]}
      />
      <ProjectTileContainer
        title="Developer Portfolio 1.0"
        imageUrl={Portfolio1}
        pageUrl="http://www.v1.aaronparisidev.com"
        gitUrl="https://github.com/aaronparisi/aarons-projects"
        description="My first stab at my personal website"
        techs={["React"]}
      />
      <ProjectTileContainer
        title="Jeerkat Clock"
        imageUrl={Jeerkat}
        pageUrl="http://www.jeerkat-js.aaronparisidev.com"
        gitUrl="https://github.com/aaronparisi/JS-Jeerkat-Clock"
        description="Schedule your day with these vanilla JavaScript critters!"
        techs={["JavaScript"]}
      />
      <ProjectTileContainer
        title="Todos"
        imageUrl={Todos}
        // pageUrl="https://aarons-todos.herokuapp.com/"
        pageUrl="http://www.todos.aaronparisidev.com"
        gitUrl="https://github.com/aaronparisi/Todo-List-Rails-React-Redux"
        description="Check out this site... It is your destiny."
        techs={["Rails", "React", "Redux", "PostgreSQL", "Webpacker"]}
      />
      <BlankTileContainer />
      <ProjectTileContainer
        title="Frontend Auth"
        imageUrl={Bluebird}
        pageUrl="https://www.frontend-auth.aaronparisidev.com/"
        gitUrl="https://github.com/aaronparisi/front-end-auth-demo-frontend"
        description="Is THIS why the birds are so angry??"
        techs={["Rails6", "React", "Redux", "PostgreSQL"]}
      />
      <ProjectTileContainer
        title="Towers of Hanoi"
        imageUrl={Towers}
        pageUrl="https://www.towers.aaronparisidev.com/"
        // pageUrl="http://www.towers.aaronparisidev.com"
        gitUrl="https://github.com/aaronparisi/Towers-of-Hanoi-jQuery"
        description="Are you smarter than a boot-camper?  How about a recursive demo??"
        techs={["jQuery"]}
      />
      <ProjectTileContainer
        title="TicTacToe"
        imageUrl={TicTacToe}
        // pageUrl="https://tictactoe-32141.web.app/"
        pageUrl="https://www.tictactoe.aaronparisidev.com"
        gitUrl="https://github.com/aaronparisi/TicTacToe"
        description="No cheating allowed (or possible)"
        techs={["Ruby", "JavaScript"]}
      />
      {/* <ProjectTileContainer
        title="Minesweeper"
        imageUrl={Minesweeper}
        pageUrl="https://www.minesweeper.aaronparisidev.com"
        gitUrl="https://github.com/aaronparisi/Minesweeper"
        description="I finally understand how this game works"
        techs={["Ruby", "JavaScript"]}
      /> */}
      
    </div>
  )
}

export default Projects