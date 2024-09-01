
export const cart = [];
	//Add to cart function
export function addToCart(button){

        let selectValue = document.querySelector(`.select-option-${button.dataset.productItem}`).value
        let updateQty = Number(selectValue);
        const productId = Number(button.dataset.productItem);
        let matchItem;

        cart.forEach((item) =>{
            if(productId=== item.id){
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

}

