
export let cart;

function loadFromStorage(params) {
    cart = JSON.parse(localStorage.getItem('cart')); 
    if(!cart){
        cart =  [
            {
                id:1,
                qty:1,
                deliveryOptionId: '1'
            },
            {
                id:2,
                qty:2,
                deliveryOptionId: '2'
            }
        ]
    }
}

loadFromStorage()
// if(!cart){
//     cart =  [
//         {
//             id:1,
//             qty:1,
//             deliveryOptionId: '1'
//         },
//         {
//             id:2,
//             qty:2,
//             deliveryOptionId: '2'
//         }
//     ]
// }



export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}
	//Add to cart function
export function addToCart(button){

        let selectValue = document.querySelector(`.select-option-${button.dataset.productItem}`).value
        let updateQty = Number(selectValue);
        const productId = Number(button.dataset.productItem);
        let matchItem;

        cart.forEach((item) =>{
            if(productId === item.id){
                matchItem = item;
            }
        });

    if(matchItem){
        matchItem.qty += updateQty ;
    }else{
        cart.push({
            id: productId,
            qty:updateQty,
            deliveryOptionId: '1'
        });
     
    }
    saveToStorage()
}


export function updateCart(){
    let count = 0;
    cart.forEach(cartItem =>{
        count += cartItem.qty
    })
    document.querySelector('.cart-qty').textContent = count;
}

export function removeFromCart(el, htmlE,reloadPage) {

        let cartUpdate = [];

        el.addEventListener('click',()=>{
            let productId = el.dataset.cartDelete;

            cart.forEach(item =>{
                if(item.id != productId){
                    cartUpdate.push(item)   
                }
                
                htmlE.remove();
              
            });
            
            cart = cartUpdate;
            saveToStorage();
            // location.reload();
            reloadPage()
            paymentDetail()
           
        });
       


}


////updating cart item amount from the select input in checkout file

export function updateCartItem(productId, updateEl) {
    updateEl.addEventListener('click', ()=>{
        let updateButton =  document.querySelector(`.js-update-button-${productId}`)
        let selectEl = document.querySelector(`.js-option-${productId}`)

        cart.forEach(item =>{
        
            if(item.id === productId){
                updateButton.style.display ='none';
                selectEl.style.display ='block'; 
            }
           
          
        });       
      
    });  
  
}

//increment products on cart
export function displayTotalProducts(){
    let count = 0;
    cart.forEach(cartItem =>{
        count += cartItem.qty
    })
    document.querySelector('.js-checkout-qty').textContent = count;
}

export function updateActiveOption(productId, optionId) {

    let matchItem;
    cart.forEach((item) =>{
        if(productId == item.id){
            matchItem = item;  
            
        }  
    });

 
    matchItem.deliveryOptionId = optionId
    saveToStorage(); 
    
            
}

