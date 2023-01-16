import { Food } from '../models/food.js'

function index(req, res) {
    Food.find({})
    .then(foods => {
        res.render('foods/index', {
            title: "All Foods",
            foods: foods
        })
    })
    .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}
function choiceFood(req, res) {
  res.render("foods/choice", {
    title: "Add Food",
  })
}

export {
  index,
  choiceFood as choice,
}