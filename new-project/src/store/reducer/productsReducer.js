const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const loadAction = (payload) => ({type: LOAD_PRODUCTS, payload});

export const productsReducer = (state = [], action) => {
    if(action.type === LOAD_PRODUCTS){
        return action.payload
    }
    return state;
}