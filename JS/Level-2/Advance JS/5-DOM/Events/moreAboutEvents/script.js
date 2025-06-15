// Best Way: Handle Multiple Events Dynamically
document.getElementById("parent").addEventListener("event", function (event) {


    if (event.type === "click") {
        if (event.target.tagName === "BUTTON") {
            console.log("Button Clicked:", event.target.textContent);
        }
    } 

    else if (event.type === "keyup") {
        if (event.target.tagName === "INPUT") {
            console.log("Typing:", event.target.value);
        }
    } 
    
    else if (event.type === "change") {
        if (event.target.tagName === "INPUT") {
            console.log("Input Changed:", event.target.value);
        }
    }
});


// Another approach
let parent = document.getElementById("parent");

["click", "keyup", "change"].forEach(eventType => {
    parent.addEventListener(eventType, function (event) {


        if (event.type === "click" && event.target.tagName === "BUTTON") {
            console.log("Button Clicked:", event.target.textContent);
        } 

        else if (event.type === "keyup" && event.target.tagName === "INPUT") {
            console.log("Typing:", event.target.value);
        } 
        
        else if (event.type === "change" && event.target.tagName === "INPUT") {
            console.log("Input Changed:", event.target.value);
        }
    });
});
