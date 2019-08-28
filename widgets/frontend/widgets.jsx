import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './clock';
// import Tab from './tab';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // ReactDOM.render(<Tab tabs={[{ title: "Title", content: "content" }, { title: "t2", content: "c2" }]} />, root);
  ReactDOM.render(<Weather />, root);

});
