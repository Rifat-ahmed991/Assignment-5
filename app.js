
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayFoods(data.categories));



const displayFoods = foods => {
    const ul = document.getElementById('foodList');
    for (let i = 0; i< foods.length; i++) {
      const food = foods[i];
       const li = document.createElement('li');
       li.innerHTML = foods.idCategories;
       ul.appendChild(li); 
       
    }

}


