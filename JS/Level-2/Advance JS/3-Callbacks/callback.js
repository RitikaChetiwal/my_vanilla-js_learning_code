

// Advance js
// Asynchronous javascript


// callback functions
function connectedToDiceServer(callback) {
    console.log('connecting...');

    setTimeout(() => {
        console.log('connected');
        callback();

    }, 2000);

}

function exploreCourses(callback) {
    console.log('exploring...');
    setTimeout(() => {
        console.log('explored');
        callback();

    }, 2000);

}

function selectingCourse(callback) {
    console.log('selecting');
    setTimeout(() => {
        console.log('selected');
        callback();

    }, 2000);

}

function onboard(callback) {
    console.log('class chal rhi hai ghazzab');
}

connectedToDiceServer(() => {
    exploreCourses(() => {
        selectingCourse(() => {
            onboard();
        })
    })
})











