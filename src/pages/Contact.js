import React, { Component } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Card from '../components/UI/Card/Card'

class Contact extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      comment: ''
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`your details are - name:${this.state.name} email:${this.state.email} comment: ${this.state.comment}`);
  }

  render() {
    // destructuring for making code readable and saving time
    const { name, email, comment } = this.state;

    return (

      <div className="fContainer">
        <div className="fSidebar">
          <Sidebar />
        </div>


        <form onSubmit={this.handleSubmit}>
          <div className="fFlex">
            <div className="map">
              <h1>Looking forward to hearing from you soon!</h1>
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=13.378850771114232%2C52.54435864059004%2C13.38335688225925%2C52.54641713825347&amp;layer=mapnik"></iframe><br /><small><a href="https://www.openstreetmap.org/#map=18/52.54539/13.38110">View Larger Map</a></small>
            </div>
            <div className="fInput">
              <label>Name</label>
              <input className="forSpanElements" type="text" value={name} onChange={this.handleName} />
            </div>

            <div className="fInput">
              <label htmlFor="">Email</label>
              <input className="forSpanElements" type="email" value={email} onChange={this.handleEmail} />
            </div>

            <div className="fInput">
              <textarea className="forSpanElements" placeholder="Place your comment here" value={comment} onChange={this.handleComment}>
              </textarea>
            </div>
            {/* always place the eventhandler on the form tag */}
            {/* type=submit allows the user to press enter to submit the form */}
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>

    )
  }
}


export default Contact