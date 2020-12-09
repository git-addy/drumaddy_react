import React from 'react'
import Car from '../components/Car/Car'
import Sidebar from '../components/Sidebar/Sidebar'
import Card from '../components/UI/Card/Card'
import './Pages.css'

const Home = (props) => {
  return (
    <div className="mama">

      <div className="homeBox">
        <div className="homeSidebarBox">
          <Card>
            <Sidebar />
          </Card>
        </div>

        <div className="homeArticleBox">

          {/* <div className="slider">
            <Card>
              <span>Welcome to drumaddy!</span>
              <Car />
            </Card>
          </div> */}

          <div><Card style={{ marginTop: '15px' }}>
            <div className="article">
              <div className="articleTitle">
                <h3>HOMEPAGE, Welcome!</h3>
                <span>By addy November 24, 2020</span>
              </div>
              <div className="articleImage">
                <img src={'/images/gigmedium.jpg'} alt="drummer holding his sticks" />
              </div>
              <div className="articleText">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam molestiae laboriosam autem velit at explicabo, pariatur ducimus quo eligendi quasi minus inventore vitae quia eos. Quos reiciendis accusantium voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit cupiditate quod, voluptatem soluta laboriosam consectetur totam rem mollitia quibusdam iusto dolore nam debitis recusandae ullam, tenetur repudiandae? Accusantium, esse?
                <br /><br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorum accusantium aspernatur quasi temporibus ullam nam sunt et! Sed, voluptas? Obcaecati eaque facilis suscipit accusantium voluptates architecto mollitia enim tempore.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloribus voluptatum, corrupti, velit accusantium, fuga cum sit mollitia voluptates ut vitae vero amet nostrum beatae corporis vel sapiente quidem quos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, perferendis eaque? Nostrum soluta dicta quidem nam error iusto quam! Eligendi aliquid consequatur id repellat cum corrupti molestias reiciendis voluptatum a?
                </p>
              </div>
            </div>
          </Card></div>

          <div className="twocol">
            <Card >
              <div className="article">
                <div className="articleTitle">
                  <h3>Short Post number 1 with read more sign</h3>
                  <span>By addy November 24, 2020</span>
                </div>
                <div className="articleImage">
                  <img src={'/images/gigmedium.jpg'} alt="drummer holding his sticks" />
                </div>
                <div className="articleText">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam molestiae laboriosam autem velit at explicabo, pariatur ducimus quo eligendi quasi minus inventore vitae quia eos. Quos reiciendis accusantium voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit cupiditate quod, voluptatem soluta laboriosam consectetur totam rem mollitia quibusdam iusto dolore nam debitis recusandae ullam, tenetur repudiandae? Accusantium, esse?
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="article">
                <div className="articleTitle">
                  <h3>Short post number 2 with readmore sign</h3>
                  <span>By addy November 24, 2020</span>
                </div>
                <div className="articleImage">
                  <img src={'/images/gigmedium.jpg'} alt="drummer holding his sticks" />
                </div>
                <div className="articleText">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam molestiae laboriosam autem velit at explicabo, pariatur ducimus quo eligendi quasi minus inventore vitae quia eos. Quos reiciendis accusantium voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit cupiditate quod, voluptatem soluta laboriosam consectetur totam rem mollitia quibusdam iusto dolore nam debitis recusandae ullam, tenetur repudiandae? Accusantium, esse?
                </p>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
