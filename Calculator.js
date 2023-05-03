
const main = document.getElementsByTagName("main")[0]
const load = document.getElementById("_load")
setTimeout((e) => {
    main.classList.remove(e)
}, 5000, "d-none")
setTimeout((e) => {
    load.classList.add(e)
}, 5000, "d-none")

const View = document.getElementsByClassName("div1")[0]
const btnGroup1 = document.querySelectorAll(".div2")
const btnGroup2 = document.querySelectorAll(".div2 div")
const Viewp = document.getElementsByTagName("p")[0]
const button = document.querySelectorAll("button")
const bgToggle = document.getElementsByClassName("bg")[0]

// const themeData = JSON.parse(localStorage.getItem("themeStore"))

// if(themeData.value == "whitebBS bg bg-dark white"){
//     bgToggle.classList.remove(bgToggle.style.backgroundColor = "white")
//     bgToggle.classList.add("bg-dark")
// } else if(themeData.value == "bg whitebBS bg-dark white" || themeData.value == "bg blackbBS"){
//     bgToggle.style.backgroundColor = "white"
// }

bgToggle.onclick = (e) => {
    e.target.classList.toggle("bg-dark")
    e.target.classList.toggle(bgToggle.style.backgroundColor = "white")
    localStorage.setItem("themeStore", JSON.stringify(bgToggle.classList.value))

    e.target.classList.toggle("blackbBS")
    e.target.classList.toggle("whitebBS")
    
    main.classList.toggle("whiteGlass")
    main.classList.toggle("blackGlass")

    View.classList.toggle("blackBS")
    View.classList.toggle("whiteBS")

    if(bgToggle.classList.contains("bg-dark")){
        Viewp.classList.add(Viewp.style.color = "black")
        // main.style.border = "1px solid rgba(255,255,255,0.25)"
    } else if(bgToggle.style.backgroundColor == "white"){
        Viewp.classList.remove(Viewp.style.color = "black")
        Viewp.classList.add(Viewp.style.color = "white")
        // main.style.border = "1px solid rgba(0,0,0,0.25)"
    }
}

button[0].onclick = (e) => {
    Viewp.innerHTML = ""
}
button[1].onclick = (e) => {
    Viewp.innerHTML = Viewp.getInnerHTML().toString().slice(0, -1);
}
button[2].onclick = () => {
    Viewp.append("/")
}
button[3].onclick = () => {
    Viewp.append("1")
}
button[4].onclick = () => {
    Viewp.append("2")
}
button[5].onclick = () => {
    Viewp.append("3")
}
button[6].onclick = () => {
    Viewp.append("*")
}
button[7].onclick = () => {
    Viewp.append("4")
}
button[8].onclick = () => {
    Viewp.append("5")
}
button[9].onclick = () => {
    Viewp.append("6")
}
button[10].onclick = () => {
    Viewp.append("+")
}
button[11].onclick = () => {
    Viewp.append("7")
}
button[12].onclick = () => {
    Viewp.append("8")
}
button[13].onclick = () => {
    Viewp.append("9")
}
button[14].onclick = () => {
    Viewp.append("-")
}
button[15].onclick = () => {
    Viewp.append(".")
}
button[16].onclick = () => {
    Viewp.append("0")
}
button[17].onclick = () => {
    try {
        Viewp.innerHTML = Viewp.innerHTML == "" ? "" : Math.round(eval(Viewp.getInnerHTML()))

    } catch (error) {
        // Viewp.classList.add("text-danger")
        // Viewp.style.fontSize = "2rem"
        Viewp.innerHTML = '<p class="text-danger" style="font-size: 2rem;">Invalid math function</p>'
    }
}

