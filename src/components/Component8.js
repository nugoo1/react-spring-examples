import React from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

// styles
const centeredStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%"
};
const h2Styles = {
  fontSize: "82px"
};

const Component8 = () => {
  return (
    <div>
      <div
        style={{
          ...centeredStyles,
          height: "100vh",
          backgroundColor: "pink"
        }}
      >
        <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={300} to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0px)" : "translateX(-100px)" }}>
              {({ opacity, transform }) => <h2 style={{ ...h2Styles, opacity, transform }}>Hello</h2>}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Component8;