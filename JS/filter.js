var data_filter = ["CPU", "GPU", "PSU", "RAM", "HDD", "SSD"];

var filter = document.querySelector(".filter");

for (i=0; i<data_filter.length; i++){
    
    filter.innerHTML += `<div class="filter_element"><input type="checkbox"><div>${data_filter[i]}</div></div>`
}