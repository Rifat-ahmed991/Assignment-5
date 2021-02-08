
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayFoods(data.categories));

const displayFoods = foods => {
    
     const foodListDiv = document.getElementById('foodList');
    for (let i = 0; i< foods.length; i++) {
      const food = foods[i];
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        const foodInfo = `
            <img src=${food.strCategoryThumb}>
            <h3 class="food-name">${food.strCategory}</h3>   
        `
        foodDiv.innerHTML = foodInfo;
        foodListDiv.appendChild(foodDiv);
       
    }

}



