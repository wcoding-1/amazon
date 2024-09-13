export function updateCartQty(count) {
    if(count){
        return count
    }else{
        return 0
    }
  
}

export function formatCurrency(currency){

    return (Math.round(currency)).toFixed(2);
  
 }
 