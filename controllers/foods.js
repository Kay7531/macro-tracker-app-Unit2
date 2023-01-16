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

function newFood(req, res) {
    res.render("foods/new", {
      title: "Manually log Food Item",
    })
  }
function create(req, res) {
    Food.create(req.body)
    .then(food => {
        res.redirect('/foods')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/foods/new')
      })
}

function show(req, res) {
    Food.findById(req.params.id)
    .then(food => {
        res.render('foods/show', {
            title: 'Food Item Detail',
            food: food,
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
      }) 
}

function deleteFood(req, res) {
    Food.findByIdAndDelete(req.params.id)
    .then(food => {
        res.redirect('/foods')
    })
    .catch(err => {
        console.log(err)
        res.redirect("/movies")
      })
}

function edit(req, res) {
    Food.findById(req.params.id)
    .then(food => {
        res.render("foods/edit", {
            food,
            title: "Edit Food"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
      })

}


export {
  index,
  choiceFood as choice,
  newFood as new,
  create,
  show,
  deleteFood as delete,
  edit,
}