const searchFood = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php/${searchText}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.categories))
        .catch(error => displayError('Something Went Wrong!! Please try again later!'));
}


const displayFoods = foods => {
    const songContainer = document.getElementById('foodList');
    songContainer.innerHTML = '';
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result row align-items-center my-3 p-3';
        foodDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="food-name">${food.strCategory}</h3>
            <img src="${food.strCategoryThumb}">
        </div>
        `;
        foodList.appendChild(foodDiv);
    })
}

const getFood = async (foodItem) => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php/${foodItem}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayFood(data.strCategories);
    }
    catch (error) {
        displayError('Sorry! I failed to load lyrics, Please try again later!!!')
    }
}

const displayFood = details => {
    const detailsDiv = document.getElementById('foodList');
    detailsDiv.innerText = details;
}

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}


