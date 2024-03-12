let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc==="images/wallhaven-p9gr2p_3840x2160.png") {
    myImage.setAttribute("src", "images/wallhaven-l8v7kq_3840x2160.png");
  } else {
    myImage.setAttribute("src", "images/wallhaven-p9gr2p_3840x2160.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }  
  if (!localStorage.getItem("name")) {
    setUserName();
  } 
  
  myButton.onclick = function () {
    setUserName();
  };
     
