import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Stepper } from "./Steps/Stepper";

import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepThree } from "./Steps/StepThree";
import { Result } from "./Steps/Result";

export const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Stepper />
          <Routes>
            <Route path="/" element={<StepOne />} />
            <Route path="/StepTwo" element={<StepTwo />} />
            <Route path="/StepThree" element={<StepThree />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};
