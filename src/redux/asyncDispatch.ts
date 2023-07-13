import { counterUpdateFailed, counterUpdateFinished, setIsLoading } from "./countersSlice"
import { AppDispatch } from "./store"

async function wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 3000)
    })
}

export function updateCounter() {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setIsLoading())
            await wait();
            dispatch(counterUpdateFinished())
        } catch (err) {
            dispatch(counterUpdateFailed())
        }
    }
}

