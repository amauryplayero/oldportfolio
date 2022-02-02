/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
const navUl = document.getElementById('navUl')
const borgorBtn = document.getElementById('borgorBtn')
const xBtn = document.getElementById('xBtn')

let openNav = () =>{
    console.log('hai')
    console.log(navUl.style.display='block')
    borgorBtn.style.display='none';
    navUl.style.display = "start";

    // document.getElementById("main").style.marginLeft = "250px";
    xBtn.style.display='flex';
  }
  
  
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
      navUl.style.display = "none";
      // document.getElementById("main").style.marginLeft = "0";
      borgorBtn.style.display='block';
    }
    

    borgorBtn.addEventListener('click', openNav)
    xBtn.addEventListener('click', closeNav)

    // console.log(sideBtn)