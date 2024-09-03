
export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart =  [
        {
            id:1,
            qty:1
    
        },
        {
            id:2,
            qty:2
        }
    ];
}



function saveToStorage(){
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
        });
     
    }
    saveToStorage()
}

export function removeFromCart(el, htmlE) {

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
           
        });
       

   
}

