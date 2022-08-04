
const rates=document.querySelectorAll("input[name='rating']")
const thanks=document.querySelector('.thanks')
const submit=document.querySelector('.submit')


let rating=()=>{
  let rated=document.querySelector("input[name='rating']:checked").id;
   localStorage.setItem("rate",rated)
}
rates.forEach(rate=>{
rate.addEventListener("change",rating)
})






