document.getElementById("open-sidebar").addEventListener("click",(function(){const e=document.querySelector(".sidebar");e.classList.contains("hidden")?e.classList.remove("hidden"):(e.classList.contains("hidden"),e.classList.add("hidden"))}));const productContainers=document.querySelectorAll(".product-container"),container=document.querySelector(".container"),heartIcon=container.querySelector(".heart-icon");heartIcon.addEventListener("click",(function(e){e.preventDefault(),isHeartActive=!isHeartActive}));