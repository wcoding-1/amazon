export function updateCartQty(count) {
    if(count){
        return count
    }else{
        return 0
    }
  
}

export function formatCurrency(currency){
    if(currency == 'Free'){
        return 'Free'
    }else{
        return currency.toFixed(2)
    }
  
 }
 