import { cart } from "../data/cart.js";
import { getProduct } from "../data/products.js";
import { getDeliveryOption } from "../data/deliveryDate.js";
import {formatCurrency} from '../utils/util.js';


export function paymentDetail() {

    let productCent = 0;
    let shippingCent = 0;
    let totalPrice = 0;
    let   total = 0;
    let tax = 0;
   cart.forEach(cartItem =>{
        let product = getProduct(cartItem.id);
        let deliveryObj = getDeliveryOption(cartItem);
        productCent += product.price * cartItem.qty;
        shippingCent += deliveryObj.priceCent ;
        totalPrice = productCent + shippingCent;
        tax = totalPrice * 0.1;
        total = totalPrice + tax

   
   }) ;

//    console.log(productCent, shippingCent, totalPrice, tax, total)

const paymentDetailHTML = `
    <h2>Transaction Details</h2>
    <ul>
        <li>Item(3)</li>
        <li>$${formatCurrency( productCent)}</li>   
    </ul>

    <ul>
        <li>Shipping and handlimg</li>
        <li>$${formatCurrency( shippingCent)}</li>   
    </ul>

    <ul>
        <li>Total price</li>
        <li>$${formatCurrency(totalPrice)}</li>   
    </ul>

    <ul>
        <li>Estimated tax(10%)</li>
        <li>$${formatCurrency(tax)}</li>   
    </ul>
    <hr>
    <ul>
        <li>Order Total</li>
        <li>$${formatCurrency(total)}</li>   
    </ul>
    <div class="button-layout">
        <button class="place-order">Place your order</button>
    </div>
`
  document.querySelector('.js-order_summery').innerHTML = paymentDetailHTML;
}