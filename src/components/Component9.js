import React from "react"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

// styles
const centeredStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%"
}
const h2Styles = {
  fontSize: "82px"
}

const Component9 = () => {
  return (
    <div>
      <div
        style={{
          ...centeredStyles,
          height: "100vh",
          backgroundColor: "slateblue"
        }}
      >
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(200px)"
              }}
            >
              {props => <h2 style={{ ...h2Styles, ...props }}>World</h2>}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
      <div
        style={{
          ...centeredStyles,
          height: "100vh",
          backgroundColor: "#afd4d4"
        }}
      >
        <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(400px)"
              }}
            >
              {props => <h2 style={{ ...h2Styles, ...props }}>!!!</h2>}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
      {/* until here... */}
    </div>
  )
}

export default Component9
