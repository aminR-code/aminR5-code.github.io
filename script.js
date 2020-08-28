function RollMe () {
    let output = 0

    let randomOne = Math.floor(Math.random()*6+1)
    let randomImageOne = 'images/' + randomOne + '.png'

    // console.log(randomOne)
    // console.log(randomImageOne)

    let randomTwo = Math.floor(Math.random()*6+1)
    let randomImageTwo = 'images/' + randomTwo + '.png'

    let imgOne = document.querySelectorAll('img') [0]
    imgOne.setAttribute('src', randomImageOne)
    
    
    let imgTwo = document.querySelectorAll('img') [1]
    imgTwo.setAttribute('src', randomImageTwo)

    if(randomOne > randomTwo) {
        document.querySelector('h1').innerHTML="YOU WIN"
    }
    
    else if (randomOne < randomTwo) {
        document.querySelector('h1').innerHTML="CPU WIN"
    }

    
    else{
        document.querySelector('h1').innerHTML="DRAW"
    }
}
