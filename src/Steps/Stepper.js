import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      "nav-link disabled " + (path === location.pathname ? "active" : undefined)
    );
  };

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ol className="navbar-nav">
          <li className="step nav-item">
            <span className={getLinkClass("/")}>Step 1</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/StepTwo")}>Step 2</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/StepThree")}>Step 3</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/Result")}>Result</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
