const form = document.querySelector('.container')
const widt = document.querySelector('.hajm')
const heigh = document.querySelector('.en')
const border = document.querySelector('.border')
const btn  = document.querySelector('.btn')
const div = document.querySelector('.block')
const soz = document.getElementById('input')
const h2 = document.getElementById('output')


form.style.width = "200px"


btn.addEventListener("click", () => {
    let width = widt.value
    let height = heigh.value
    let borderRadius = border.value

    let NewB = document.createElement("div")
    NewB.style.width = width + "px";
    NewB.style.height = height + "px";
    NewB.style.borderRadius = borderRadius + "px"
    NewB.style.backgroundColor = "red"

    div.appendChild(NewB)
    console.log(NewB)
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
})


// ! sozlar
soz.addEventListener("input", function(){
    let Text = soz.value
    h2.innerHTML = Text
})

