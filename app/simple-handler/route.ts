
// Possible ways to stop caching:
// 1. using dynamic constant
// 2. Using headers and cookies or setting them
// 3. using request object in params
// 4. Except in POST,PATCH,DELETE
export const dynamic= "force-dynamic"
// by default value is auto
export async function GET(){
    return  Response.json({
        date: new Date().toLocaleTimeString()
    })
}

