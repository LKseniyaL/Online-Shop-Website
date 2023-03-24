const BASKET_ADD = 'BASKET_ADD';
const BASKET_INCREMENT = 'BASKET_INCREMENT';
const BASKET_DECREMENT = 'BASKET_DECREMENT';
const BASKET_DELETE = 'BASKET_DELETE';
const BASKET_DELETE_ITEM = 'BASKET_DELETE_ITEM';


const defaultState = [
];

export const basketAddAction = payload => ({type: BASKET_ADD, payload});
export const basketIncAction = payload => ({type: BASKET_INCREMENT, payload});
export const basketDecAction = payload => ({type: BASKET_DECREMENT, payload});
export const basketDelete = payload => ({type: BASKET_DELETE, payload});
export const basketDeleteItem = payload => ({type: BASKET_DELETE_ITEM, payload});



export const basketReducer = (state = defaultState, action) => {
    if(action.type === BASKET_ADD){
        const product = state.find(({id}) => id === action.payload);
        if(product === undefined){
            return [...state, {id: action.payload, count: 1}]
        }
        else{
            product.count++;
            return [...state]
        }
    }
    else if(action.type === BASKET_INCREMENT){
        const product = state.find(({id}) => id === action.payload);
        product.count++;
        return [...state];
    }
    else if(action.type === BASKET_DECREMENT){
        const product = state.find(({id}) =>  id === action.payload);

        if(product.count === 1){
            return state.filter(item => item !== product);
        }
        else{
            product.count--;
            return [...state]
        }
    }
   else if(action.type === BASKET_DELETE){
       return []
    }
    else if(action.type === BASKET_DELETE_ITEM){
       return state.filter(({id}) => id !== action.payload);
    
    }
    return state;
}