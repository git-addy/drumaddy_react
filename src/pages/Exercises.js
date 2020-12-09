import React from 'react'
import FullArticle from '../components/FullArticle/FullArticle'
import Sidebar from '../components/Sidebar/Sidebar'

const Exercises = () => {
  return (
    <div>

      <div className="xMama">
        <div className="xSidebar">
          <Sidebar />
        </div>
        <div>
          <div className="xContainer">
            <div className="xTitle">
              <span>Drumming and Fitness</span>
              <p>
                I think everyone agrees with the fact that drumming requires a certain amount of physical fitness. <br /><br />

                So I decided to put this thought into action and see the results for myself. The next thing was which exercises should I include in my workout that directly compliment my drumming. The answer is a bit complex since we use all our limbs to play!! So in the spirit of getting better, I have dedicated this page to exercises both in general and essential warmups before you start playing.<br /><br />
                Just to get you motivated I want to mention that the results are positive and my own drumming improved a lot since! So its an affirmative!<br /><br />
                WHAT CHANGED FOR ME:

                <ul className="xbenefits">
                  <li>Better stamina overall</li>
                  <li>Faster rolls and a smoother flow while  playing fills </li>
                  <li>More dynamic control</li>
                </ul>
                <br />

                A small word of advice before you jump into the exercises: You will notice an almost immediate effect on your drumming right after but don’t stop there! Continual exercise will give you control, speed and agility in the long term. And the effort that you put in, as you will yourself notice, is totally worth it!
              </p>
            </div>

            {/* fitness card UI starts here */}

            {/* DRUM EXERCISES */}
            <section className="drumFitness">
              <span>Drum Specific Performance Enhancing Exercises</span>

              <div className="xContentOne">
                <div className="xBox">

                  <div className="xCardTitle">
                    PARADIDDLES AND VARIATIONS
                  </div>

                  <div className="xMeta">
                    5 min read by: drumaddy
                  </div>

                  <div className="xImg">
                    <a href="https://www.google.com"><img src="/images/400x365/squats.jpg" /></a>
                  </div>
                </div>

                <div className="xBox">

                  <div className="xCardTitle">
                    IDEAS FROM BENNY
                  </div>

                  <div className="xMeta">

                    5 min read by: drumaddy  </div>

                  <div className="xImg">
                    <img src="/images/400x365/pushup.jpg" />
                  </div>
                </div>
              </div>

              <div className="xContentTwo">
                <div className="xBox">

                  <div className="xCardTitle">
                    BASSDRUM NOTE VALUES
                  </div>

                  <div className="xMeta">

                    5 min read by: drumaddy  </div>

                  <div className="xImg">
                    <img src="/images/400x365/bicycle-crunches.jpg" />
                  </div>
                </div>

                <div className="xBox">

                  <div className="xCardTitle">
                    FLAMS AND FLAMADIDDLES
                  </div>

                  <div className="xMeta">

                    5 min read by: drumaddy  </div>

                  <div className="xImg">
                    <img src="/images/400x365/stretch.jpg" />
                  </div>
                </div>
              </div>
            </section>

            <div>
              <FullArticle />
            </div>

            {/* GENERAL FITNESS EXERCISES */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Exercises
