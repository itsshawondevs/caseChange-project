let text = document.querySelector(".area")

let uppercase = document.querySelector("#upper")

let lowercase = document.querySelector("#lowercase")

let repeat = document.querySelector("#repeat ")

let reset = document.querySelector("#reset")

let copy = document.querySelector("#copy")

let tooltip = document.querySelector(".tooltip")

let input = document.querySelector("#input")


uppercase.addEventListener("click",function(){
    text.value = `${text.value.toUpperCase()}`
})

lowercase.addEventListener("click",function(){
    text.value = `${text.value.toLowerCase()}`
})

repeat.addEventListener("click",function(){
    text.value = `${text.value.repeat(100)}`
})

reset.addEventListener("click",function(){
    location.reload()
})

copy.addEventListener("click",function(){
    text.select();
    text.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(text.value);
    tooltip.innerHTML = "copied"
    tooltip.style.width = "fit-content"
    tooltip.style.left = "50%"
    tooltip.style.transform = "translateX(-50%)"
})