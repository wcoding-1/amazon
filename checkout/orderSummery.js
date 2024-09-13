import {cart,removeFromCart
    ,displayTotalProducts,
    updateCartItem,
    updateActiveOption
} from '../data/cart.js';
import {products, getProduct} from '../data/products.js';
import dayjs from 'http://unpkg.com/dayjs@1.11.10/esm/index.js';
import { formatCurrency } from '../utils/util.js';
import {deliveryOption, getDeliveryOption} from '../data/deliveryDate.js';
import {paymentDetail} from './paymentSummery.js';


export function reloadPage() {
    

    let checkoutHTML = '';
    //generating HTML
    cart.forEach(cartItem =>{
        const productId = cartItem.id;

        // let productObj={};
        // products.forEach(product =>{
        //     if(product.id === productId){
        //         productObj = product;
        //     }
        // });
        let productObj = getProduct(productId)

        let deliveryOption = getDeliveryOption(cartItem)
    // deliveryOption.forEach(option =>{
    //     if(option.id === cartItem.deliveryOptionId){
    //         deliveryOption = option;
    //     }
    // })

    const days = dayjs()
    let toDay = days.add(deliveryOption.deliveryDays, 'day');
    const dayFormat = toDay.format('YYYY-MMMM-D');

        checkoutHTML += ` <div class="checkout-card-layout 
        js-cart-container-${productObj.id}">

                        <div class="checkout-products">
                            <div class='deliver-date'>
                                <h3>Delive Date:${dayFormat}</h3>
                                <img src="images/${productObj.image}" alt="product">
                            </div>
                            <div class="product-detail">
                                <p>${productObj.name}</p>
                                <h3>$ ${formatCurrency(productObj.price)}</h3>
                                <h3>Qty : ${cartItem.qty}</h3>
                                <a href='#' data-cart-update='${productObj.id}'
                                    class="js-update-button-${productObj.id}" 
                                    id='js-select-option'>Update
                                </a>
                             
            
                                <select class='js-option-${productObj.id}' 
                                    id='checkout-select-option'>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                </select>
                                
                        
                            
                                <a href='#' class="delete" data-cart-delete='${productObj.id}' 
                                    id='delete-button'>Delete</a>
                            </div>
                        
                        </div>

                        <div class="checkout-option">
                            <h3>Choose a delivery date</h3>
                            ${deliveryOptionDays(productObj, cartItem)}    
                        </div>

                    </div>`;
        
    });

    //display HTML in checkout page
    document.querySelector('.js-getCheckout').innerHTML = checkoutHTML;
    //delete itemfrom cart
    document.querySelectorAll('#delete-button').forEach(link =>{

        let removefromHTML = document.querySelector(`.js-cart-container-${link.dataset.cartDelete}`)
        removeFromCart(link, removefromHTML, reloadPage);
    
    });

    //updating cart item amount from the select input in checkout file
    document.querySelectorAll('#js-select-option').forEach(updateEl =>{

        let productId = Number(updateEl.dataset.cartUpdate);
        updateCartItem(productId,updateEl)
    });

    //display total products on cart
    displayTotalProducts()





    //delivery option
    function deliveryOptionDays(product, cart) {
        let optionHTML='';

        deliveryOption.forEach(option =>{
   
            const days = dayjs()
            let toDay = days.add(option.deliveryDays, 'day');
            const dayFormat = toDay.format('YYYY-MMMM-D');

            const priceOption = option.priceCent === 0 ? 'Free-' :  `$${option.priceCent} -`;
    
            const isChecked = option.id === cart.deliveryOptionId;

            optionHTML += `
            <div class="js-option" data-product-id='${product.id}' 
            data-option-id='${option.id}'>

                <input type="radio" name="option-${product.id}"
                ${isChecked ? 'checked': ''}>
            
                <label>${dayFormat}</label>
                <p>${priceOption}Shopping</p>
            </div>

            `
            
        });

        return optionHTML;
    }

    document.querySelectorAll('.js-option').forEach(optionEl =>{
        const {productId, optionId} = optionEl.dataset
       
        optionEl.addEventListener('click', ()=>{
       
            updateActiveOption(productId,optionId);
           reloadPage();
           paymentDetail();
        })    
    })
   

}







