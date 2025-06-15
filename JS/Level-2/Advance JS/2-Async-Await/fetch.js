

// fetch -- Async and Await*****************************************

// fetch picks an API (Application Programming Interface) and makes blob data then convert it into an actual data by using async and await.

async function getData() {
    let jsonData = await fetch('https://randomuser.me/api/')
    let parsedData = await jsonData.json()
    console.log(parsedData);
    // console.log(blobdata);


}
getData();

// Attached in index.html

















































