import React, { Component } from "react"
import { Transition, animated } from "react-spring/renderprops"
import "./App.css"
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"
import Component4 from "./components/Component4"
import Component5 from "./components/Component5"
import Component6 from "./components/Component6"
import Component7 from "./components/Component7"
import Component8 from "./components/Component8"
import Component9 from "./components/Component9"





class App extends Component {
  state = {
    showComponent3: false
  }

  toggle = e => {
    this.setState({
      showComponent3: !this.state.showComponent3
    })
  }

  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))
          }
        </Transition>
        <Component4 path="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10" />
        <Component5 />
        <Component6 />
        <Component7 />
        <Component8 />
        <Component9 />




      </div>
    )
  }
}

export default App
