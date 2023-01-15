/*
если в филтре отметить пункт, то
    убрать check с ALL
    убрать все элементы
    построить элементы с типом пункта
        отследить click
        проверить состояние input (checked или нет)
        если пункт == checked, то
            cluster.innerHTML += 
        иначе
            cluster.innerHTML -=
*/


var data_filter = ["CPU", "GPU", "PSU", "RAM", "HDD", "SSD", "FAN", "ALL"];

var filter = document.querySelector(".filter");

for (i=0; i<data_filter.length; i++){
    
//    filter.innerHTML += `<div class="filter_element"><input type="checkbox" data-f="${data_filter[i]}"><div>${data_filter[i]}</div></div>`
    filter.innerHTML += `<button data-f="${data_filter[i]}">${data_filter[i]}</button>`
}

// отслеживание click по фильтру контента
filter.addEventListener("click", event => {
    if (event.target.tagName !== "BUTTON") return false;
    
    var filterType = event.target.dataset["f"];
    
    check(filterType);
});

// значения фильтра
//let Array = {
//    "CPU": false,
//    "GPU": false,
//    "PSU": false,
//    "RAM": false,
//    "HDD": false,
//    "SSD": false,
//    "FAN": false,
//    "ALL": false
//};

// логика смены значений фильтра
function check(arg1){
    
    if (Array[arg1] == true){
        Array[arg1] = false
    } else {
        Array[arg1] = true
    };
    
    let red = Array[arg1];
    
    console.log(arg1, " =", red);
    clean();
    building(arg1);
}

////////////////////////////////////////////////////////////////


function clean(){
    cluster_story.innerHTML = ''
}

function building(arg1){
    
    for( i=0; i<data_story.length; i++ ){
        if( data_story[i].type == arg1 ){
            cluster_story.innerHTML += `
            <div class="row">
                <div class="box_icon">
                    <div style="background-image: url(IMG/FOTO/${icon})"></div>
                </div>

                <div class="box_note">
                    <a class="name" href="#">${data_story[i].name}</a>
                    <a class="manufacturer" href="${data_story[i].link}">производитель</a>
                    <div class="prise1">${data_story[i].price[0]}</div>
                    <div class="prise2"><s>${data_story[i].price[1]}</s></div>
                </div>
            </div>`;
        }
    }
}