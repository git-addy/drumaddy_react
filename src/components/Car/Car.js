
import Carousel from 'react-elastic-carousel';
import './Car.css'
 
import React from 'react'

const Car = () => {

  const items = [
    {id: 1, url: '/images/DennisC.jpg'},
    {id: 2, url: '/images/JojoM.jpg'},
    {id: 3, url: '/images/ViniC.jpg'},
    {id: 4, url: '/images/DennisC.jpg'}
  ]

  return (
    <div className="carBox">
      <Carousel style={{height: '500px'}}>
        {items.map(item => 
          <div className="car" key={item.id}>
            <img src={item.url} alt="drummers of our time"/>
          </div>
        )}
      </Carousel>
      </div>
    )
    
  
}


// class Car extends Component {
  
//   state = {
//     items: [
//       {id: 1, url: '/images/DennisC.jpg'},
//       {id: 2, url: '/images/JojoM.jpg'},
//       {id: 3, url: '/images/ViniC.jpg'},
//       {id: 4, url: '/images/DennisC.jpg'}
//     ]
//   }
 
//   render () {
//     const { items } = this.state;
//     return (
//       <Carousel style={{padding: '20px'}}>
//         {items.map(item => 
//           <div className="car" key={item.id}>
//             <img src={item.url} alt="drummers of our time"/>
//           </div>
//         )}
//       </Carousel>
//     )
//   }
// }


export default Car;