const userResult = document.getElementById('user-result')


fetch('data.json').then((response) => {
    response.json().then((results) => {
        for (let i = 0; i < results.length; i++) {

            const userScore = document.getElementById(`score-${i}`)
            userScore.textContent = results[i].score

            const categorys = document.getElementById(`category-${i}`)
            const categoryTitle = document.getElementById(`category-title-${i}`)
            const img = document.createElement('img')
            img.setAttribute('src', results[i].icon)
            img.setAttribute('alt', `${results[i].category} icon`)
            categoryTitle.appendChild(img)
            categorys.innerText = results[i].category
            
        }
        
        let reactionScore = results[0].score
        let memoryScore = results[1].score
        let verbalScore = results[2].score
        let visualScore = results[3].score
        const userAverage = (reactionScore + memoryScore + verbalScore + visualScore) / results.length

        userResult.textContent = parseInt(userAverage)
        

    })
})

