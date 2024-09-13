 import { products } from "../data/products.js";
 import { cart, addToCart, updateCart} from "../data/cart.js";
 import { formatCurrency } from "../utils/util.js";


let productsHTML = '';

products.forEach(product =>{
	 productsHTML += `
		<div class='product-image'>
				<img src='./images/${product.image}'>
				<p>${product.name}</p>
				<p>${product.rating}</p>
				<h2>$${formatCurrency(product.price)}</h2>

				<select style='padding:.4rem .9rem'; class='select-option-${product.id}'>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
				</select>
				<button type='button' name='button' data-product-item='${product.id}' id='cartButton'>Add to cart</button>

		</div>
		`
});

	document.querySelector('.image-layout').innerHTML = productsHTML;

	

	function addMessage(){
		setTimeout(()=>{
			document.querySelector('.add-message').style.display= 'block';
		},1000)

	}

	function removeMessage(){
		setTimeout(()=>{
			document.querySelector('.add-message').style.display= 'none';
		},3000)

	}

	removeMessage()

	document.querySelectorAll('#cartButton').forEach((button) =>{

			button.addEventListener('click', ()=>{
				addToCart(button);
				updateCart();
				addMessage();
				removeMessage()

		});
});


