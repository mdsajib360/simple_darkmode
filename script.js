
const circle = document.getElementById("circle");
const dark_button= document.getElementById("dark")
const body = document.getElementById("_body")


// const theme = "dark"
// document.body.addEventListener("DOMContentLoaded", )

const theme = localStorage.getItem("theme")

theme === "dark" ? darkMode() : lightMode()





function darkMode() {
  
  body.classList.add("dark_mode")
  circle.classList.add("toggle")
  circle.style.background = "#524b38";
  localStorage.setItem("theme", "dark")
}
function lightMode() {
 
  body.classList.remove("dark_mode");
  circle.classList.remove("toggle")
  circle.style.background = "#fff";
  localStorage.setItem("theme", "light")

}
  


dark_button.addEventListener("click", () => {
  circle.classList.toggle("toggle");
  
  if (circle.classList.contains("toggle")) {
    localStorage.setItem("theme", "dark")
    
  }else{
    localStorage.setItem("theme", "light")
    
  }

  const theme = localStorage.getItem("theme")
  theme === "dark" ? darkMode() : lightMode()
})

