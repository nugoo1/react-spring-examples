import React, { Component } from "react"
import { Spring } from "react-spring/renderprops"

export default class Component2 extends Component {
  render() {
    return (
      <Spring
        // Spring expects from and to props
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000 }}
      >
        {props => (
          <div style={props}>
            {/* This is where your normal component code goes! */}
            <div style={c2Style}>
              <h1>Component 1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
}

const btn = {
  background: "#333",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  textAlign: "center",
  textTransform: "uppercase",
  borderRadius: "4px",
  margin: "1rem",
  padding: "1.5rem 2rem"
}
