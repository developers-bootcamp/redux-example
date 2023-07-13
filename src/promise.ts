// import axios from 'axios';

console.log(1)
sentHttp()
    .then((res: number) => {
        console.log("done")
    }).catch(() => {
        console.log("error")
    })

async function sentHttp(): Promise<number> {
    try {
        const response = await sendHttpPromise()
        return 1
    } catch (err) {
        throw new Error("failed")
    }
}

function sendHttpPromise() {
    return new Promise((resolve, reject) => {
        resolve(1)
        // axios.get("http://localhost", (res: any, err: any) => {
        //     if (err) {
        //         reject()
        //     } else {
        //         resolve(1)
        //     }
        // })
    })
}