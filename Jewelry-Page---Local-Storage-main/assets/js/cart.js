"use strict";

let tBody = document.querySelector("tbody")
let products = JSON.parse(localStorage.getItem("products"))
let totalPrice = document.querySelector(".total-price")

