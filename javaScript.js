const foodDiv = document.getElementById("foodBlock")
let submitButton = document.getElementById("submitFood")
let currentTotal = document.getElementById("macroTotal")
let totalProtein = 0
let totalCarbs = 0
let totalFats = 0
let calories = 0

function addNewFood(){
    let newFood = document.createElement("div")
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.classList.add("deleteButton")
    newFood.classList.add("gridSquare")

    const inputs = document.getElementsByClassName("macros")
    let multiplier = inputs[4].value
    console.log(inputs)
    for(i in inputs){
        if(inputs[i].value != undefined){
            if(inputs[i].id === "nameInput"){
                let name = document.createElement("p")
                name.innerText = `${inputs[i].value}`
                newFood.appendChild(name)
            }
            if(inputs[i].id === "protein"){
                let protein = document.createElement("p")
                totalProtein += (inputs[i].value*multiplier)
                calories += ((inputs[i].value*multiplier)*4)
                protein.innerText = `${(inputs[i].value*multiplier)} Protein`
                newFood.appendChild(protein)
            }
            if(inputs[i].id === "carbohydrates"){
                let carbs = document.createElement("p")
                totalCarbs += (inputs[i].value*multiplier)
                calories += ((inputs[i].value*multiplier)*4)
                carbs.innerText = `${(inputs[i].value*multiplier)} Carbohydrates`
                newFood.appendChild(carbs)
            }
            if(inputs[i].id === "fats"){
                let fats = document.createElement("p")
                totalFats += (inputs[i].value*multiplier)
                calories += ((inputs[i].value*multiplier)*9)
                fats.innerText = `${(inputs[i].value*multiplier)} Fats`
                newFood.appendChild(fats)
            }
            if(inputs[i].id === "servings"){
                let servs = document.createElement("p")
                servs.innerText = `${inputs[i].value} Servings`
                newFood.appendChild(servs)     
            }
        }
    }
    deleteButton.addEventListener("click", removeFood)
    newFood.appendChild(deleteButton)
    currentTotal.innerText = `Calories: ${calories} - Protein: ${totalProtein} - Carbs: ${totalCarbs} - Fats: ${totalFats}`
    foodDiv.appendChild(newFood)
}

function removeFood(){
    let foodToRemove = this.parentNode
    console.log(foodToRemove)
    let i = 1
    while(i <= 3){
        if(i === 1){
            totalProtein -= foodToRemove.childNodes[i].innerText.split(" ")[0]
            calories -= ((foodToRemove.childNodes[i].innerText.split(" ")[0])*4)
        }
        else if(i === 2){
            totalCarbs -= foodToRemove.childNodes[i].innerText.split(" ")[0]
            calories -= ((foodToRemove.childNodes[i].innerText.split(" ")[0])*4)
        }
        else if(i === 3){
            totalFats -= foodToRemove.childNodes[i].innerText.split(" ")[0]
            calories -= ((foodToRemove.childNodes[i].innerText.split(" ")[0])*9)
        }
        i++
    }
    currentTotal.innerText = `Calories: ${calories} - Protein: ${totalProtein} - Carbs: ${totalCarbs} - Fats: ${totalFats}`
    foodToRemove.remove()
}

submitButton.addEventListener("click", addNewFood)