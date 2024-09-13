
export const deliveryOption = [
    {
        id: '1',
        deliveryDays : 7,
        priceCent: 0
    },
    {
        id: '2',
        deliveryDays : 3,
        priceCent: 4.99
    },
    {
        id: '3',
        deliveryDays : 1,
        priceCent: 99.99
    }
 
];


export function getDeliveryOption(cartItem){
    let optionObj;
    deliveryOption.forEach(option =>{
        if(option.id === cartItem.deliveryOptionId){
            optionObj = option;
        }
    })
 return optionObj;
}