import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Card from '../components/UI/Card/Card'

const About = () => {
  return (
    <div className="mama">

      <div className="homeBox">
        <div className="homeSidebarBox">
          <Card>
            <Sidebar />
          </Card>
        </div>

        <div className="homeArticleBox">

          <div><Card style={{ marginTop: '15px' }}>
            <div className="article">
              <div className="articleTitle">
                <h3>ABOUT ME</h3>
                <span>By addy November 24, 2020</span>
              </div>
              <div className="articleImage">
                <img src={'/images/featured_drumaddy.jpg'} alt="drummer holding his sticks" />
              </div>
              <div className="articleText">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorum accusantium aspernatur quasi temporibus ullam nam sunt et! Sed, voluptas? Obcaecati eaque facilis suscipit accusantium voluptates architecto mollitia enim tempore.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus voluptatum, corrupti, velit accusantium, fuga cum sit mollitia voluptates ut vitae vero amet nostrum beatae corporis vel sapiente quidem quos?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, perferendis eaque? Nostrum soluta dicta quidem nam error iusto quam! Eligendi aliquid consequatur id repellat cum corrupti molestias reiciendis voluptatum a?
                </p>
              </div>
            </div>
          </Card></div>
        </div>
      </div>
    </div>

  )
}

export default About
