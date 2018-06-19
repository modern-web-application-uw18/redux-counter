function counter() {};
function homePage() {};
function shoppingCart() {};
function products() {};

combineReducers({
    counter: counter,
    homePage: homePage,
    shoppingCart: shoppingCart,
    products: products
});

const state = {
    counter: {
        counters: [
            {
                value: 0
            },
            {
                value: 1
            }
        ]
    },
    homePage: {
        title: 'My store',
        language: 'en'
    },
    products: {
        category1: [
            {}, {}, {}
        ]
    }
}