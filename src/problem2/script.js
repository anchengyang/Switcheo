const addr = document.getElementById("input-address");
const amount = document.getElementById("input-amount");
const otp = document.getElementById("input-otp");
const form = document.getElementById("form");
const error = document.getElementById("error");

// function validation(){
//   if (addr.value === '' || amount.value==='' || otp.value===''){
//     alert("Some fields were incomplete");
//     return false;
//   } else if (addr.value.substring(0,2) != "0x"){
//     alert("Address must start with 0x");
//     return false;
//   } else {
//     openPopup();
//     return true;
//   }
// }
form.addEventListener('submit', (e) =>{
  if (addr.value === '' || amount.value==='' || otp.value===''){
    e.preventDefault();
    alert("Some fields were incomplete");
  } else if (addr.value.substring(0,2) != "0x"){
    e.preventDefault();
    alert("Address must start with 0x");
    
  } else {
    e.preventDefault();
    openPopup();
    
  }
})

function openPopup(){
  var popup = document.getElementById("popup");
  popup.classList.add("open-popup");
}
function closePopup(){
  var popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
  form.submit();
}

