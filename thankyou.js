const thanks=document.querySelector('.thanks')

let rating=()=>{
    rate=localStorage.getItem("rate")
    thanks.textContent="You selected " +rate+" out of 5";
  }

rating()