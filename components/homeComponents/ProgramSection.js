import React from "react";

const ProgramSection = () => {
  return (
    <div id="programs">
      <div className="display" id="2">
        <h1 className="offered">Programs Offered</h1>
        <div className="box">
          <div className="head">
            <h3 className="heading">Under-Graduate Computing Courses</h3>
          </div>
          <div className="lists">
            <li>💠Bachelor of Computer Applications (BCA)</li>
            <li>
              💠Bachelor of Computer Applications - Augmented
              <br />
              <span className="space">Reality and virtual Reality</span>{" "}
            </li>
            <li>💠B.Sc (Computer Science)</li>
          </div>
        </div>
        <div className="box">
          <div className="head">
            <h3 className="heading">Post-Graduate Computing Courses</h3>
          </div>
          <div className="lists">
            <li>💠Master of Computer Applications (MCA)</li>
            <li>💠MCA Cloud Computing and DevOps</li>
            <li>💠MCA - Artificial Inntelligence & Machine Learning</li>
          </div>
        </div>
        <div className="box">
          <div className="head">
            <h3 className="heading3">International Courses</h3>
          </div>
          <div className="lists">
            <li>
              💠Bachelor of Computer Applications (BCA) - <br />
              <span className="space">International</span>
            </li>
            <li>💠B.Sc (Computer Science) - International</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
