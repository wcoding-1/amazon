const products = [
		{
			id:1,
			name:'Basket Ball',
			image: '71gSTSenYHL._AC_UL320_.jpg',
			rating:4.4,
			price:'34.00',
			stock: 10,
		},

		{
			id:2,
			name:'Blander For fresh fruite',
			image:'71q0NvJZecL._AC_UY218_.jpg',
			rating:5.7,
			price:'3.00',
				stock: 15,
		},

		{
			id:3,
			name:'Origin Pop cord',
			image:'81JJsbLXp4L._AC_UL320_.jpg',
			rating:4.7,
			price:'10.00',
			stock: 20,
		},

		{
			id:4,
			name:'Multi purpose blender',
			image:'81n-9sDsr6L._AC_UY218_.jpg',
			rating:3.7,
			price:'33.00',
			stock: 12,
		},

		{
			id:1,
			name:'Basket Ball',
			image:'71gSTSenYHL._AC_UL320_.jpg',
			rating:4.4,
			price:'34.00',
			stock: 10,
		}


]

let productsHTML = '';

products.forEach(product =>{
	 productsHTML += `
		<div class='product-image'>
				<img src='./images/${product.image}'>
				<p>${product.name}</p>
				<p>${product.rating}</p>
				<h2>$${product.price}</h2>

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

		//Add to cart function
		function addToCart(button){

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

//update cart quatity
function updateCart(){
	let count = 0;
	cart.forEach(cartItem =>{
		count += cartItem.qty
	})
	document.querySelector('.cart-qty').textContent = count;
}

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
