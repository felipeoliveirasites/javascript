console.log("olá olá ")
const teste = "teste"

const shoppingCart = {
    user: { 
        id: 1, 
        firtsName: 'John', 
        lastName: 'Doe',  
    },
    items: [
    {
        product: {id:1, name:'banana'   },
        quantity: 10,
    },
    {
        product: {id:2, name:'laranha'},
        quantity: 1,
    }
        
    ]
};

/* const shoppingCart = {
user: { 
    id: 1, 
    name: 'John Doe' ,
},
items: [
{
    product: {id:1},
    quantity: 10,
},
{
    product: {id:2},
    quantity: 1,
}
    
]
}; */

function formatShoppinhCart(shoppingCart) {
    const result = {}

    result.user = {
        name:`${shoppingCart.user.firtsName} ${shoppingCart.user.lastName}`,
        id: `${shoppingCart.user.id}`   
    };
        user: 

   result.item = shoppingCart.items.map((it) => {
    return {...it,
    product: {id: it.product.id},
   }})
    
   return result;
} 

console.log(formatShoppinhCart(shoppingCart))

console.log(shoppingCart)

