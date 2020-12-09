import React from 'react'
import Card from '../components/UI/Card/Card'
import Sidebar from '../components/Sidebar/Sidebar'
import drummers from '../data/Drummers'
import './Pages.css'


const Influences = () => {
  return (
    <div>
      <div className="influencesContainer">
       
        <div className="sideContainer">
          <Card>
            <Sidebar />
          </Card>
        </div>

        <div className="contentSection">
          <h1>Here is a list of my all time favourites</h1> <br />
          <h3>Really hard to choose from!</h3> <br />
          <p>The list is actually huge. I will append this list with more drummers as time goes by.
            This is extremely hard cause I have learnt from a million drummers. Both well known and from the local scene. Inspiration can come from anywhere! But as a starting point, here is a list of a few that always blow my mind...
          </p>
          {
            drummers.map((drummer, id) =>{
              return (
                <div className="drummer">
                  <div className="pictureanddetails">
                    <div>
                    <img src="photo" alt="image of drummer"/>
                    </div> 
                    <div>
                        <ul className= "details" key={id}>
                          <li> Name: {drummer.name}</li>
                          <li>Age: {drummer.age}</li>
                          <li>Genre: {drummer.genre}</li>
                        </ul>
                    </div>
                  </div>
                  <div className="para">
                    <p>
                        {drummer.articleText}
                    </p>
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

export default Influences
