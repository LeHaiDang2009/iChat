const nameInput = document.getElementById("nameInput")
const joinBtn = document.getElementById("joinBtn")

joinBtn.addEventListener("click", getUserName())

export function getUserName(){
    if (nameInput.value != ""){
        return nameInput.value
    }
}