import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface ICountersState {
    counter: number
    isLoading: boolean
    errorMessage: string
}

const initialState: ICountersState = {
    counter: 0,
    isLoading: false,
    errorMessage: '',
}

export const countersSlice = createSlice({
    name: 'countersReducrer',
    initialState,
    reducers: {
        addOne: (state: ICountersState, action: PayloadAction<void>) => {
            state.counter += 1;
        },
        subtractOne: (state: ICountersState, action: PayloadAction<void>) => {
            state.counter -= 1;
        },
        add: (state: ICountersState, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        subtract: (state: ICountersState, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
        setIsLoading: (state: ICountersState, action: PayloadAction<void>) => {
            state.isLoading = true;
            state.errorMessage = '';
        },
        counterUpdateFinished: (state: ICountersState, action: PayloadAction<void>) => {
            state.counter += 1;
            state.isLoading = false;
            state.errorMessage = '';
        },
        counterUpdateFailed: (state: ICountersState, action: PayloadAction<void>) => {
            state.isLoading = false;
            state.errorMessage = 'failed to update';
        },
    }
})

export const {
    addOne, 
    subtractOne,
    add,
    subtract,
    setIsLoading, 
    counterUpdateFinished, 
    counterUpdateFailed,
} = countersSlice.actions;

export default countersSlice.reducer;



