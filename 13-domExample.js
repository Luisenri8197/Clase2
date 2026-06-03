console.log("Script ejecutado desde example")

const textInput = document.querySelector("input")
const button = document.querySelector("button")
const list = document.querySelector("ul")

function addTask(){
    if(textInput.value === ""){
        // return alert("Ingrese algo perra")
        return
    }
    const item = document.createElement("li")
    item.textContent = textInput.value
    item.style.cursor = "pointer"
    item.style.padding = "8px"
    item.addEventListener("click", () => {
        item.remove()
    })
    list.appendChild(item)
    textInput.value= ""
}

button.addEventListener("click", addTask)

textInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        addTask()
    }
})