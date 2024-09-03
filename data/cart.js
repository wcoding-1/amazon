
export let cart = [
    {
        id:1,
        qty:1

    },
    {
        id:2,
        qty:2
    }
];
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
    console.log(matchItem)
    console.log(cart)

}

export function removeFromCart(el) {
    el.forEach(elD=>{

        let cartUpdate = [];

        elD.addEventListener('click',()=>{
            let productId = elD.dataset.cartDelete;

            cart.forEach(item =>{
                if(item.id != productId){
                    cartUpdate.push(item)   
                }
            });
            
            cart = cartUpdate;
           
        });
       
    });
   
}

