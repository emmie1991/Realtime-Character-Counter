const textareaEl = document.getElementById('textarea')
const totalCounterEl = document.getElementById('total-counter')

const remainingEl = document.getElementById('remaining-counter')

//key is pressed - keyup
textareaEl.addEventListener("keyup", ()=> {
  updateCounter()
})

//when page opens
updateCounter()

function updateCounter(){
  totalCounterEl.innerText = textareaEl.value.length

  //get maxLength and remaining chars
  remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length
}
