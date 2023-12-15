// ----------------- MENU OPEN AND CLOSE ---------------- 


function menuToggle(){
  let MenuItems = document.getElementById("MenuItems");
  MenuItems.style.display = "0px";
  if(MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px";
  }else{
    MenuItems.style.maxHeight = "0px";
  }




}

// ------------ POP- UP ---------- 


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');


document.querySelectorAll('.row .col-3').forEach(product =>{

  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
 
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


// ------------------ ADD TO CART ----------------- 

function openCart(){
  let cart = document.getElementById("Cart-Table");
  cart.style.right = "-100%";
  if(cart.style.right == "-100%"){
  cart.style.right = "500px";
  }else{
  cart.style.right = "0px";
  }


}

  let btns = document.querySelectorAll(".btn");
  btns.forEach(element => {

    element.addEventListener('click', () => {
   

       document.querySelector('#form').style.display = "block";
       document.querySelector('.box').style.display = "none";

    })
  })


     
 












  












