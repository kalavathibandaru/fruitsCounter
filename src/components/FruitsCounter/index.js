import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, bananas: 0}

  onIncrementMangoes = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  onIncrementbananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangos} = this.state
    const {bananas} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate {mangos} mangoes {bananas} bananas
          </h1>
          <div className="images-container">
            <div className="images-sub-container">
              <img
                alt="mango"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button className="button" onClick={this.onIncrementMangoes}>
                Eat Mango
              </button>
            </div>
            <div className="images-sub-container">
              <img
                alt="banana"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button className="button" onClick={this.onIncrementbananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
