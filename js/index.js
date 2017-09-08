const getBeersAPI = () => fetch('https://api.punkapi.com/v2/beers')
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
    let obj = response;
    let txt = "<table style='width: 70%;margin: auto;' >"; 
    txt += "<tr style='background-color: #00cccc;'>";
    txt += "<th>" + "Beer name" + "</th>";
    txt += "<th>" + "ABV" + "</th>";
    txt += "<th>" + "Description" + "</th>";
    txt += "<th>" + "Food pairing" + "</th>";
    txt += "<th>" + "Yeast" + "</th>";
    txt += "<th>" + "Image" + "</th>";
    txt += "</tr>";
    for (let i = 0; i < obj.length; i++) {
        txt += "<tr>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].abv + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
        txt += "<td>" + obj[i].food_pairing  + "</td>";
        txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:30%;height:auto;'/></td>";
        txt += "</tr>";

    }
    txt += "</table>";
    document.getElementById("result").innerHTML = txt;
})

const getBeerAPIByName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
    let obj = response;
    let txt = "<table style='width: 70%;margin: auto;' >"; 
    txt += "<tr style='background-color: #00cccc;'>";
    txt += "<th>" + "Beer name" + "</th>";
    txt += "<th>" + "ABV" + "</th>";
    txt += "<th>" + "Description" + "</th>";
    txt += "<th>" + "Food pairing" + "</th>";
    txt += "<th>" + "Yeast" + "</th>";
    txt += "<th>" + "Image" + "</th>";
    txt += "</tr>";
    for (let i = 0; i < obj.length; i++) {
        txt += "<tr>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].abv + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
        txt += "<td>" + obj[i].food_pairing  + "</td>";
        txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:30%;height:auto;'/></td>";
        txt += "</tr>";

    }
    txt += "</table>";
    document.getElementById("result").innerHTML = txt;
})

const getBeerAPIByFood = (food) => fetch(`https://api.punkapi.com/v2/beers/?food=${food}`)
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
  let obj = response;
  let txt = "<table style='width: 70%;margin: auto;' >"; 
  txt += "<tr style='background-color: #00cccc;'>";
  txt += "<th>" + "Beer name" + "</th>";
  txt += "<th>" + "ABV" + "</th>";
  txt += "<th>" + "Description" + "</th>";
  txt += "<th>" + "Food pairing" + "</th>";
  txt += "<th>" + "Yeast" + "</th>";
  txt += "<th>" + "Image" + "</th>";
  txt += "</tr>";
  for (let i = 0; i < obj.length; i++) {
    txt += "<tr>";
    txt += "<td>" + obj[i].name + "</td>";
    txt += "<td>" + obj[i].abv + "</td>";
    txt += "<td>" + obj[i].description + "</td>";
    txt += "<td>" + obj[i].food_pairing + "</td>";
    txt += "<td>" + obj[i].ingredients.yeast + "</td>";
    txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:30%;height:auto;'/></td>";
    txt += "</tr>";

}
txt += "</table>";
document.getElementById("result").innerHTML = txt;
})

const getBeerAPIByYeast = (yeast) => fetch(`https://api.punkapi.com/v2/beers/?yeast=${yeast}`)
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
  let obj = response;
  let txt = "<table style='width: 70%;margin: auto;' >"; 
  txt += "<tr style='background-color: #00cccc;'>";
  txt += "<th>" + "Beer name" + "</th>";
  txt += "<th>" + "ABV" + "</th>";
  txt += "<th>" + "Description" + "</th>";
  txt += "<th>" + "Food pairing" + "</th>";
  txt += "<th>" + "Yeast" + "</th>";
  txt += "<th>" + "Image" + "</th>";
  txt += "</tr>";
  for (let i = 0; i < obj.length; i++) {
    txt += "<tr>";
    txt += "<td>" + obj[i].name + "</td>";
    txt += "<td>" + obj[i].abv + "</td>";
    txt += "<td>" + obj[i].description + "</td>";
    txt += "<td>" + obj[i].food_pairing + "</td>";
    txt += "<td>" + obj[i].ingredients.yeast + "</td>";
    txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:30%;height:auto;'/></td>";
    txt += "</tr>";

}
txt += "</table>";
document.getElementById("result").innerHTML = txt;
})

const getBeerAPIByNameAndYeast = (name,yeast) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}&?yeast=${yeast}`)
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
    let obj = response;
    let txt = "<table style='width: 70%;margin: auto;' >"; 
    txt += "<tr style='background-color: #00cccc;'>";
    txt += "<th>" + "Beer name" + "</th>";
    txt += "<th>" + "ABV" + "</th>";
    txt += "<th>" + "Description" + "</th>";
    txt += "<th>" + "Food pairing" + "</th>";
    txt += "<th>" + "Yeast" + "</th>";
    txt += "<th>" + "Image" + "</th>";
    txt += "</tr>";
    for (let i = 0; i < obj.length; i++) {
        txt += "<tr>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].abv + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
        txt += "<td>" + obj[i].food_pairing + "</td>";
        txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:30%;height:auto;'/></td>";
        txt += "</tr>";

    }
    txt += "</table>";
    document.getElementById("result").innerHTML = txt;
})

const getBeerAPIByFoodAndYeast = (food,yeast) => fetch(`https://api.punkapi.com/v2/beers/?food=${food}&?yeast=${yeast}`)
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
    let obj = response;
    let txt = "<table style='width: 70%;margin: auto;' >"; 
    txt += "<tr style='background-color: #00cccc;'>";
    txt += "<th>" + "Beer name" + "</th>";
    txt += "<th>" + "ABV" + "</th>";
    txt += "<th>" + "Description" + "</th>";
    txt += "<th>" + "Food pairing" + "</th>";
    txt += "<th>" + "Yeast" + "</th>";
    txt += "<th>" + "Image" + "</th>";
    txt += "</tr>";
    for (let i = 0; i < obj.length; i++) {
        txt += "<tr>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].abv + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
        txt += "<td>" + obj[i].food_pairing + "</td>";
        txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:30%;height:auto;'/></td>";
        txt += "</tr>";
    }
    txt += "</table>";
    document.getElementById("result").innerHTML = txt;
})

const getBeerAPIByNameAndFood = (name,food) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}&?food=${food}`)
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
    let obj = response;
    let txt = "<table style='width: 70%;margin: auto;' >"; 
    txt += "<tr style='background-color: #00cccc;'>";
    txt += "<th>" + "Beer name" + "</th>";
    txt += "<th>" + "ABV" + "</th>";
    txt += "<th>" + "Description" + "</th>";
    txt += "<th>" + "Food pairing" + "</th>";
    txt += "<th>" + "Yeast" + "</th>";
    txt += "<th>" + "Image" + "</th>";
    txt += "</tr>";
    for (let i = 0; i < obj.length; i++) {
        txt += "<tr>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].abv + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
        txt += "<td>" + obj[i].food_pairing + "</td>";
        txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:30%;height:auto;'/></td>";
        txt += "</tr>";

    }
    txt += "</table>";
    document.getElementById("result").innerHTML = txt;
})

const getBeerAPIByNameAndFoodAndYeast = (name,food,yeast) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}&food=${food}&yeast=${yeast}`)
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
    let obj = response;
    let txt = "<table style='width: 70%;margin: auto;' >"; 
    txt += "<tr style='background-color: #00cccc;'>";
    txt += "<th>" + "Beer name" + "</th>";
    txt += "<th>" + "ABV" + "</th>";
    txt += "<th>" + "Description" + "</th>";
    txt += "<th>" + "Food pairing" + "</th>";
    txt += "<th>" + "Yeast" + "</th>";
    txt += "<th>" + "Image" + "</th>";
    txt += "</tr>";
    for (let i = 0; i < obj.length; i++) {
        txt += "<tr>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].abv + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
        txt += "<td>" + obj[i].food_pairing + "</td>";
        txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:30%;height:auto;'/></td>";
        txt += "</tr>";

    }
    txt += "</table>";
    document.getElementById("result").innerHTML = txt;
})

getBeersAPI()

const toSearch = (name,food,yeast) => {
    if (name != ""  &&  food != "" && yeast != "") {
        getBeerAPIByNameAndFoodAndYeast(name,food,yeast)
    } else if (yeast != "" && food != "") {
        getBeerAPIByFoodAndYeast(food,yeast)
    } else if (name != "" && food != "") {
        getBeerAPIByNameAndFood(name,food)
    } else if ( name != ""  && yeast != "") {
        getBeerAPIByNameAndYeast(name,yeast)
    }  else if (food != "") {
        getBeerAPIByFood(food)
    } else if (name != "") {
        getBeerAPIByName(name)
    } else if (yeast != "") {
        getBeerAPIByYeast(yeast)
    } else {
        let result = let txt = "<table style='width: 70%;margin: auto;' >"; 
        txt += "<tr style='background-color: #00cccc;'>";
        txt += "<th>" + "Beer name" + "</th>";
        txt += "<th>" + "ABV" + "</th>";
        txt += "<th>" + "Description" + "</th>";
        txt += "<th>" + "Food pairing" + "</th>";
        txt += "<th>" + "Yeast" + "</th>";
        txt += "<th>" + "Image" + "</th>";
        txt += "</tr>";
        document.getElementById("result").innerHTML = result
    }
}