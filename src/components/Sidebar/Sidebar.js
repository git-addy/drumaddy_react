import React from 'react'
import './Sidebar.css'
import articles from '../../data/Articles'


const Sidebar = (props) => {
  
  return (
    
    <div className="sidebarContainer" style={props.style}>
      {props.children}

      
     <div className="snipBox">

      {/* ABOUT SNIPPET */}
      <div className="snipFlex">
          <div className="heading">
           <span>About</span> 
          </div>
          <div className="media">
          <img src={'/images/profilefront_400x400.jpg'} alt="drummer holding his sticks" />
          </div>
          <div className="textPromo">
            This is a short introduction that will appear on the snippet with a continue reading button at the end. This continue reading button will contain a link that will redirect the user to the about page.
          </div>
          <div className="snipMeta">
            <button className="btn">read more...</button>
          </div>
        </div>

        {/* GEAR SNIPPET */}
        <div className="snipFlex">
          <div className="heading">
           <span className="exHeading">Exercises</span> 
          </div>
          <div className="exFlex">
            <div className="number">
              01
            </div>
            <div className="extext">
              <div className="exMeta">
                <div className="exTitle">
                  Flex your musceles before you start
                </div>
                <span>by drumaddy, 5 min read</span>
              </div>
            </div>
          </div>

          <div className="exFlex">
            <div className="number">
              02
            </div>
            <div className="extext">
              <div className="exMeta">
                <div className="exTitle">
                  Quick warm-up before you start
                </div>
                <span>by drumaddy, 7 min read</span>
              </div>
            </div>
          </div>

          <div className="exFlex">
            <div className="number">
              03
            </div>
            <div className="extext">
              <div className="exMeta">
                <div className="exTitle">
                  special wrist workout on a sunday afternoon
                </div>
                <span>by drumaddy, 9 min read</span>
              </div>
            </div>
          </div>

          <div className="btn">see more Exercises</div>
        </div>

        {/* INFLUENCES */}

        <div className="heading">
                    <span>INFLUENCES</span>

        { 
          articles.map( article => { 
            return(
              <div className="snipInfluences">
                <div className="snipTitle">
                  <h2>{article.title}</h2>
                </div>
                <div className="snipInfluencesFlex">
                  <div className="media">
                    <img src={article.image} alt="drummers" />
                  </div>
                  <div className="snipInfluenceText">
                    <div className="snipMeta">
                      <span>Date:{article.date}, by: {article.author}</span>
                    </div>
                    <div className="textPromo">
                        <p>{article.textPromo}<br /><br />
                        <button className="btn">Read Article</button>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }) 
          
        }
       </div>
      </div>
    </div>
     
  )
}

export default Sidebar
