import React, { Component } from 'react'
import './FullArticle.css'
import FullArticleData from '../../data/FullArticleData'



const textFull = FullArticleData.map((article, id) => {
  return <div key={id}>{article.textFull}</div>
})


class FullArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  showFullText = (e) => {
    e.preventDefault()
    this.setState({
      clicked: true

    })
  }

  render() {
    return (
      <div>
        { FullArticleData.map((article) => {
          return (
            <div className="xBox">
              <div className="xCardTitle">
                {article.title}
              </div>
              <div className="xMeta">
                Date:{article.date} Tags:{article.tag} By:{article.author}
              </div>
              <div className="xImg">
                <a href=""><img src={article.image} alt="exercising" /></a>
              </div>
              <div className={this.state.clicked ? 'textFull' : 'textPromo'}>

              </div>
              <button className="btn" onClick={this.showFullText}>Read More...</button>
            </div>
          )
        }

        )}
      </div>
    )
  }
}




export default FullArticle