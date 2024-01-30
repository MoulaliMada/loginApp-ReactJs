// Write your code here
import {Component} from 'react'
import './index.css'
import Message from './components/Message/'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-Container">
          <Message/>
        </div>
      </div>
    )
  }
}
export default Home
