!function(){var e={shops__listEl:document.querySelector(".shops__list"),mealsCart__listEl:document.querySelector(".mealsCart__list")},t=["Mc Donny","CFK","THIRD","FOURTH"];var n=[{name:"Burger",price:100},{name:"Hot-Dog",price:200},{name:"Big Burger",price:100},{name:"Small Burger",price:200},{name:"Double Hot-Dog",price:150}];e.shops__listEl.insertAdjacentHTML("beforeend",t.map((function(e){return'<li><button type="button">'.concat(e,"</button></li>")})).join("")),e.mealsCart__listEl.insertAdjacentHTML("beforeend",n.map((function(e){return'<li>\n  <img src="" alt="" />\n  <p class="name__meal">'.concat(e.name,'</p>\n  <p class="price__meal">').concat(e.price,'</p>\n  <button class="btn__meal" type="button">add to Cart</button>\n</li>')})).join(""))}();
//# sourceMappingURL=index.77519d97.js.map