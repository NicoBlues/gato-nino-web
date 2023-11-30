//---------------------------- NAVBAR SCRIPTS------------------------------------------||
document.getElementById('open-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    if(sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
    } else if(!sidebar.classList.contains('hidden')) {
        sidebar.classList.add('hidden');
    } else {
        sidebar.classList.add('hidden');
    }
});
//---------------------------- END NAVBAR SCRIPTS------------------------------------------||
//---------------------------- FEATURED PRODUCTS SCRIPTS------------------------------------------||
//Featured Products Functions
const productContainers = document.querySelectorAll('.product-container');
const container = document.querySelector('.container');

// Add heart to product

const heartIcon = container.querySelector('.heart-icon');

heartIcon.addEventListener('click', function(event){
    event.preventDefault();
    isHeartActive = !isHeartActive;
});
//---------------------------- END FEATURED PRODUCTS SCRIPTS------------------------------------------||