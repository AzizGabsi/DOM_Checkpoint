var plus = document.querySelectorAll(".btn-success")
var minus = document.querySelectorAll(".btn-danger")
var deleted = document.querySelectorAll(".btn-warning")
var bill = document.querySelector(".total-price")
var amount = document.querySelectorAll(".quantity")
var heart = document.querySelectorAll(".heart-image")




plus.forEach(element => {
    element.addEventListener("click", () => {
        element.previousElementSibling.innerHTML++
        let pricing = document.getElementsByClassName("price")   
    })
})

minus.forEach(element => {
    element.addEventListener("click", () => {
        if (element.nextElementSibling.innerHTML > 0) {
            element.nextElementSibling.innerHTML--
            bill.innerHTML -= parseInt(pricing.innerHTML, 10)
        }
        
    })
})

deleted.forEach(element => {
    element.addEventListener("click", () => {
        element.parentElement.parentElement.parentElement.remove()
    })
    
})


heart.forEach(element => {
    element.addEventListener("click",() => {
        element.classList.toggle("toggled")
        element.classList.toggle("toggled:hover")
        element.classList.toggle("toggled:active")
    })
})
