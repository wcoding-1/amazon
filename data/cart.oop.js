

const cart = {
    cartItm: undefined,
    loadFromStorage() {
        this.cartItm = JSON.parse(localStorage.getItem('cart-oop')); 
        if(!this.cartItm){
            this.cartItm =  [
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
    },

    saveToStorage(){
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItm))
    },

   

    addTocartItm(button){

        let selectValue = document.querySelector(`.select-option-${button.dataset.productItem}`).value
        let updateQty = Number(selectValue);
        const productId = Number(button.dataset.productItem);
        let matchItem;

        this.cartItm.forEach((item) =>{
            if(productId === item.id){
                matchItem = item;
            }
        });

    if(matchItem){
        matchItem.qty += updateQty ;
    }else{
        this.cartItm.push({
            id: productId,
            qty:updateQty,
            deliveryOptionId: '1'
        });
     
    }
    this.saveToStorage()
},

    updatecartItm(){
        let count = 0;
        this.cartItm.forEach(cartItmItem =>{
            count += cartItmItem.qty
        })
        document.querySelector('.cartItm-qty').textContent = count;
    },

    removeFromcartItm(el, htmlE,reloadPage) {

        let cartItmUpdate = [];

        el.addEventListener('click',()=>{
            let productId = el.dataset.cartItmDelete;

            this.cartItm.forEach(item =>{
                if(item.id != productId){
                    cartItmUpdate.push(item)   
                }
                
                htmlE.remove();
              
            });
            
            this.cartItm = cartItmUpdate;
            this.saveToStorage();
            // location.reload();
            this.reloadPage()
            this.paymentDetail()
           
        });
       


    },

    updatecartItmItem(productId, updateEl) {
        updateEl.addEventListener('click', ()=>{
            let updateButton =  document.querySelector(`.js-update-button-${productId}`)
            let selectEl = document.querySelector(`.js-option-${productId}`)
    
            this.cartItm.forEach(item =>{
            
                if(item.id === productId){
                    updateButton.style.display ='none';
                    selectEl.style.display ='block'; 
                }
               
              
            });       
          
        });  
      
    },

    displayTotalProducts(){
        let count = 0;
        this.cartItm.forEach(cartItmItem =>{
            count += cartItmItem.qty
        })
        document.querySelector('.js-checkout-qty').textContent = count;
    },

    updateActiveOption(productId, optionId) {

        let matchItem;
        this.cartItm.forEach((item) =>{
            if(productId == item.id){
                matchItem = item;  
                
            }  
        });
    
     
        matchItem.deliveryOptionId = optionId
        this.saveToStorage();    
                
    },
    
}

cart.loadFromStorage()

console.log(cart)





