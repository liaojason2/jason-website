import React, { Component } from "react";
import "./AboutMe.css";

function AboutMe(props) {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="border-bottom">
              <h1>關於我</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <p className="" style={{ marginTop: "15px", textIndent: "1px" }}>
              我是煥杰，非學校型態實驗教育（自學生）畢業，距離第一次寫程式已經七年，其中包含三年網站開發。
            </p>
            <p className="" style={{ marginTop: "15px", textIndent: "0px" }}>
              在小學以前我就對電腦相關領域特別有興趣，到了國中因為學校課程的關係接觸到程式競賽，但程式競賽與我小時候想像中的程式不同，也一直提不起興趣，直到高二因為專題課因為學習
              Python 的關係接觸到開發，
              在第一次成功運作之後我覺得這就是「我小時候所想像的程式」，在高二過後將重心轉放在 Web Application 開發上。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
