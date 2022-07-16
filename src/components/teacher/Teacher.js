import React from "react";
import "./teacher.css";
import Slider from '../../sub-component/slider/Slider';
import TeacherTxt from "../../sub-component/Teachertxt/TeacherTxt";

function Teacher() {
  return (
    <div className="sec" id="tutor">
      <div className="cont">
        <div className="boxx"><Slider /></div>
        <div className="boxx"><TeacherTxt/></div>
      </div>
    </div>
  );
}

export default Teacher;
