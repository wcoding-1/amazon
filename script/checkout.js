import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

let checkoutHTML = '';
cart.forEach(cartItem =>{
    const productId = cartItem.id;
    let productObj;
    products.forEach(product =>{
        if(product.id === productId){
            productObj = product;
        }
    });
    
    checkoutHTML += ` <div class="checkout-card-layout">

                    <div class="checkout-products">
                        <div>
                            <h3>Deliver Date:$$$</h3>
                            <img src="images/${productObj.image}" alt="product">
                        </div>
                        <div class="product-detail">
                            <p>${productObj.name}</p>
                            <h3>${productObj.price}</h3>
                            <h3>${productObj.qty}</h3>
                            <a href='#' class="update">Update</a>
                            <a href='#' class="delete">Delete</a>
                        </div>
                    
                    </div>

                    <div class="checkout-option">
                        <h3>Choose a delivery date</h3>
                        <form>
                            <div>
                                <input type="radio" name="option-1" class="js-option-${productObj.id}">
                                <label>Tuesday, june 21</label>
                                <p>Free Shipping</p>
                            </div>

                            <div>
                                <input type="radio" name="option-1" class="js-option-${productObj.id}">
                                <label>Wednsday, june 14</label>
                                <p>$4.99- shipping</p>
                            </div>

                            <div>
                                <input type="radio" name="option-1" class="js-option-${productObj.id}">
                                <label>Monday, june 23</label>
                                <p>$9.99-Shipping</p>
                            </div>
                        
                        </form>
                    </div>

                </div>`;
    
});

document.querySelector('.js-getCheckout').innerHTML = checkoutHTML;


