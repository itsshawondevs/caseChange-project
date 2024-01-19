let text = document.querySelector(".area")

let uppercase = document.querySelector("#upper")

let lowercase = document.querySelector("#lowercase")

let repeat = document.querySelector("#repeat ")

let reset = document.querySelector("#reset")

let result = document.querySelector(".result")


uppercase.addEventListener("click",function(){
    result.innerHTML = `${text.value.toUpperCase()}`
})

lowercase.addEventListener("click",function(){
    result.innerHTML = `${text.value.toLowerCase()}`
})

repeat.addEventListener("click",function(){
    result.innerHTML = `${text.value.repeat(100)}`
})

reset.addEventListener("click",function(){
    location.reload()
})