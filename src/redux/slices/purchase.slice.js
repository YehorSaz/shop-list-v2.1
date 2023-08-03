import  {createSlice} from "@reduxjs/toolkit";

const initialState = {
    purchases: [],
    donePurchases: [],
    purchaseForEdit: '',
    trigger: false
};


const slice = createSlice({
    name: 'purchaseSlice',
    initialState,
    reducers: {
        setPurchase: (state, action) => {
            state.purchases.push(action.payload)
        },
        setDonePurchase: (state, action) => {
            const id = action.payload
            const purchaseIndex = state.purchases.findIndex(item => item.id === id)
            const done = state.purchases.splice(purchaseIndex, 1)
            state.donePurchases.push(done[0])
        },
        backFromDonePurchase: (state, action) => {
            const id = action.payload
            const purchaseIndex = state.donePurchases.findIndex(item => item.id === id)
            const done = state.donePurchases.splice(purchaseIndex, 1)
            state.purchases.push(done[0])
        },
        deletePurchase: (state, action) => {
            const id = action.payload
            const purchaseIndex = state.purchases.findIndex(item => item.id === id)
            state.purchases.splice(purchaseIndex, 1)
        },
        deleteDonePurchase: (state, action) => {
            const id = action.payload
            const purchaseIndex = state.donePurchases.findIndex(item => item.id === id)
            state.donePurchases.splice(purchaseIndex, 1)
        },
        deleteAllPurchases: (state, action) => {
            state.purchases = []
            state.donePurchases = []
        },
        setPurchaseForEdit: (state, action) => {
            state.purchaseForEdit = action.payload
        },
        changeTrigger: (state, action) => {
            state.trigger = !state.trigger
        }
    }
});

const {reducer: purchaseReducer, actions} = slice;

const purchaseActions = {
    ...actions
}

export {
    purchaseReducer,
    purchaseActions
}