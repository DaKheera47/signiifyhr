import React from "react";

export default function PDFRender() {
  return (
    <div className="w-4/5 mx-auto flex flex-wrap h-screen mt-20">
      <div className="w-full h-1/6 flex justify-center items-center">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Example of Resume Review Report
        </h1>
      </div>
      <object
        width="100%"
        height="75%"
        className="my-auto"
        data="https://drive.google.com/viewerng/viewer?embedded=true&url=https://dl.dropboxusercontent.com/s/37f366uvug3h0y0/sample%20resume.pdf?dl=0"
      ></object>
    </div>
  );
}
