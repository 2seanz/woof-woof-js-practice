// //document.addEventListener("DOMContentLoaded", init)

// const pupURl = 'http://localhost:3000/pups/'

// getPups()


// // function renderPupNames(pups) {
// // const pupName = document.createElement('span')
// // pupName.innerText = pups.pupName
// // }

// function getPups() {
//     fetch(pupURl)
//     .then(res => res.json())
//     .then(pupObj => pupObj.forEach(renderPup))
// }

// function renderPup(pupObj) {
//     const pupSpan = document.createElement('span')
//     pupSpan.innerHTML = pupObj.name
//     pupSpan.classList.add('dog-bar', 'span')

//     //document.addEventListener('click', (e) => {

//     const pupImg = document.createElement('img')
//     pupImg.src = pupObj.image
//     pupImg.classList.add('dog-info', 'img')
    
//     const pupName = document.createElement('h2')
//     pupName.innerText = pupObj.name 
    

//     const pupButton = document.createElement('button')
//     pupButton.addEventListener('click', () => {
//         if (isGoodDog = true) {
//             button.innerText = "Good Dog!"
//         }   else {
//             button.innerText = "Bad Dog!"
//         }
        
//     })
    
    //dont read this stuff
    // pupButton.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
    // pupButton.dataset.id = pupObj.id

    // button.addEventListener('click', (e) => {
    //     const reqObj = {
    //         headers: {"Content-Type": "application/json"},
    //         method: "PATCH",
    //         body: JSON.stringify(button)
    //     }
    //     fetch(pupURl+e.target.id, reqObj)
    //     .then(res => res.json())
    //     .then((updatedPup) => {
    //         document.getElementById(updatedPup.id)
    //     })

   // })

// pupSpan.append(pupName, pupImg, pupButton)

// document.querySelector("#dog-bar").appendChild(pupSpan)

// }

//       ADAMS WAYY!!!!!!!

// const BASE_URL = 'http://localhost:3000/pups/'

// getPups()


// function getPups() {
//     fetch(BASE_URL)
//     .then(res => res.json())
//     .then((pupData) => pupData.forEach(makeSpan))
// }

// function makeSpan(pup){
//     const span = document.createElement('span')
//     span.innerText = pup.name
    
//     document.getElementById('dog-bar').appendChild(span)

//     span.addEventListener('click', (e) => {
//         const pupImg = document.createElement('img')
//         pupImg.src = pup.image
        
//         const pupName = document.createElement('h2')
//         pupName.innerText = pup.name
        
//         const pupBtn = document.createElement('button')
//         pupBtn.id = pup.id
//         pupBtn.addEventListener('click', toggleDog)
        
//         if(pup.isGoodDog){
//             pupBtn.innerText = 'Good Dog!'
//         } else {
//             pupBtn.innerText = "Bad Dog!"
//         }
//         //another way 
//         //pup.isGoodDog ? pupBtn.innerText = "Good Dog" : pupBtn.innerText = "Bad Dog!"

//     document.getElementById('dog-info').innerHTML = ""
//     document.getElementById('dog-info').append(pupImg, pupName, pupBtn)
   
//     })

// }

// function toggleDog(e) {
//     const pupId = e.target.id

//     //console.log(e.target.innerText);

//     const newVal = e.target.innerText === 'Good Dog!' ? false : true

//     const dogObj = {
//         isGoodDog: newVal
//     }

//     const reqObj = {
//         headers: {'Content-Type': 'application/json'},
//         method: "PATCH",
//         body: JSON.stringify(dogObj)
//     }

//     console.log(reqObj)

//     fetch(BASE_URL+pupId, reqObj)
//     .then(res => res.json())
//     .then(updatedDog => updatedDog.isGoodDog ? e.target.innerText = "Good Dog" : e.target.innerText = "Bad Dog!")
//     //another way
//     //.then(updatedDOg => document.getElementById(updatedDog.id).innerText = updatedDog.isGoodDog ? "Good Dog!" : "Bad Dog")
    
// }


// new attempt 
const BASE_URL = 'http://localhost:3000/pups/'

fetchPup()

function fetchPup() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then((pupData) => pupData.forEach(makeSpan))
}

function makeSpan(pup) {
   const span = document.createElement('span')
   span.innerText = pup.name

    document.getElementById('dog-bar').appendChild(span)

    span.addEventListener('click', (e) => {
        
        const pupImg = document.createElement('img')
        pupImg.src = pup.image
        
        const pupName = document.createElement('h2')
        pupName.innerText = pup.name
        
        const pupBtn = document.createElement('button')
        pupBtn.id = pup.id 
        
        pupBtn.addEventListener('click', toggleDog)
        if (pup.isGoodDog) {
            pupBtn.innerText = "Good Boy!"
        } else {
            pupBtn.innerText= "Bad Boy!"
        }
        
        document.getElementById('dog-info').innerHTML = ''
        document.getElementById('dog-info').append(pupImg, pupName, pupBtn)
    })

}

function toggleDog(e) {
    const pupId = e.target.id

    const newVal = e.target.innerText === 'Good Dog!' ? false : true

    const dogObj = {
        isGoodDog: newVal
    }
    const reqObj = {
        headers: {'Content-Type': "application/json"},
        method: 'PATCH',
        body: JSON.stringify(dogObj)
    }
console.log(reqObj)

    fetch(BASE_URL+pupId, reqObj)
    .then(res => res.json())
    .then(updatedDog => updatedDog.isGoodDog ? e.target.innerText = "Good Dog" : e.target.innerText = "Bad Dog!")
}


