/**
 * Q1.1 (Create a Blueprint): Write a class for a custom error called UnauthorizedAccessError. 
 * The constructor should take a role. Set the error message to say "Access denied for user role: [role]". 
 * Don't forget to set the this.name property correctly.
*/


class UnauthorizedAccessError extends Error {
    constructor(role){
        super(`Access denied for user role: ${role}`)
        this.name = "UnauthorizedAccessError"
    }
}   

/* 
Q1.2 (Business Logic Error): Create a custom error class called OutOfStockError. 
It should take a productName and requestedQty. 
The error message should be: "Cannot fulfill order: Only [requestedQty] units requested for [productName] are currently unavailable.

 */
class OutOfStockError extends Error {
    constructor(productName, requestedQty){
        super(`Cannot fulfill order: Only ${requestedQty} units requested for ${productName} are currently unavailable.`)
        this.name = "OutOfStockError"
    }
}   


/*
Q2.1 (Separating Concerns): Rewrite a function called fetchUserData(userId) so it only handles data and has no code that changes the website UI (DOM).
If the ID is wrong or the fetch fails, how should this function tell the UI handler that something went wrong?

*/

async function fetchUserData(userId) {
    if (!userId){
        throw new Error("userId not found")
    }
 const response = await fetch (`/api/user/${userId}`)

 if (!response.ok){
    throw new Error ("failed to fetch user data")
 }
   return await response.json
}

 /* 
Q2.2 (Moving Errors Up): Create an async function called validateAge(age). 
If the age is under 18, throw a ValidationError. 
Then, write a second function called submitForm() that runs validateAge(15) inside a try/catch block and logs the error it receives.

*/

class validationError extends Error {
    constructor(message){
        super(message)
        this.name = "validationError"
    }
}


async function validateAge(age) {
    if (age<18){
        throw new validationError("age is under 18")
         }
    return true
        }

async function submitForm(){
    try{
       await validateAge(25)
    }
    catch(error){
console.log("error:", error.message)
    }
}


submitForm()
console.log(true)


/*
Q3.1 (Setting Defaults): You have a user object: { name: '', avatar: null, settings: undefined }. 
Use the ?? or || operators to create three variables that provide backup values ('Anonymous', 'default-avatar.png', 
and a light theme object) if the original data is missing.
*/

const user = { name: '', avatar: null, settings: undefined };
const backupName = user.name || "Anonymous";
const backupAvatar = user.avatar || 'default-avatar.png';
const backupSetting = user.settings || {theme:"dark"}


console.log(backupName)
console.log(backupAvatar)
console.log(backupSetting)

/**Q3.2 (Showing Different UI Errors): Write a catch(error) block using instanceof to show different messages: 
 * show an orange warning for InvalidInputError, a red error card for ProductNotFoundError, and a generic banner for any other type of error.
 */
try {

}
catch(error){ 
    if(error instanceof InvalidInputError ){
        // console.log("warning")
        showWarningBanner({ 
            color:"orange",
            message: error.message || "invalid input error"
        })
    }
    else if (error instanceof ProductNotFoundError){
        showProdoctMissing ({
            color: "red",
             message: error.message || "product not found error"
        })

    }
    else {
        showGenericBanner({
            message :"unexpected error occured please try again"
        })
    }
}