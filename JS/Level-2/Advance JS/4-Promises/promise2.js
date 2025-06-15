
// Solutions to issue with callbacks----------------------------------------->
/*
task 1 - server se connect kro
task 2 - course explore
task 3 - course selection 
task 4 - class enroll
*/

function connectToDiceServer() {
    console.log("connecting to dice server ...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let connected = true;
            if (connected == true) {
                console.log("connected to dice server");
                resolve("resolve-connected")
            } else {
                reject("connection failed .. please try again error 404")
            }
        }, 3000);
    })

}

function courseExplore() {
    console.log("exploring the courses .......")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let courseFound = true;
            if (courseFound == true) {
                console.log("course founded ")
                resolve(["resolve-", "js", "advance js", "DSA", "SYSTEM DESIGN"])
            } else {
                reject("no course available for me --meri aukaat bht badi h , dice k paas nahi h jo m dhund rha hu")
            }

        }, 3000);


    })
}

function courseSelection(courseName) {
    console.log("selecting courses.....")
    return new Promise((resolve, reject) => {
        // console.log("course selected is", courseName)

        setTimeout(() => {
            if (courseName) {
                console.log("course selected ---", courseName)
                resolve(courseName)
            } else {
                reject("please select a valid course name")
            }

        }, 3000);
    })

}

function classEnroll() {
    console.log("enrolling class....")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let enrollmentsucess = true;
            if (enrollmentsucess == true) {
                console.log("taking live interactive class")
                resolve("enrolled in class")
            } else {
                reject("enrollment nahi krna mujhe , m khud se pdhnga ")
            }

        }, 3000);
    })
}


connectToDiceServer().then((connectStatus) => {
    console.log(connectStatus)
    return courseExplore()
}).then((courses) => {
    console.log(courses)
    return courseSelection(courses[2]);
}).then((selectedCourse) => {
    console.log("your selected course is -", selectedCourse)
    return classEnroll()
}).then((enrollmentSucess) => {
    console.log("process done", enrollmentSucess)
}).catch((error) => {
    console.log("error ye wala aaya h", error)
})









