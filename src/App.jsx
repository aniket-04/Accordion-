import React, { useState } from "react";
import { queries } from "./api";
import Accordion from "./Components/Accordion";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="Accordionblock">
            {queries.map((ele) => {
              return (
                <>
                  <Accordion {...ele} />
                </>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
