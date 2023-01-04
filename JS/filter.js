var data_filter = ["CPU", "GPU", "PSU", "RAM", "HDD", "SSD", "FAN", "ALL"];

var filter = document.querySelector(".filter");

for (i=0; i<data_filter.length; i++){
    
    filter.innerHTML += `<div class="filter_element"><input type="checkbox" onclick="check('CPU')"><div>${data_filter[i]}</div></div>`
}

function check(arg1){
    
    let Array = {
        "CPU": false,
        "GPU": false,
        "PSU": false,
        "RAM": false,
        "HDD": false,
        "SSD": false,
        "FAN": false,
        "ALL": false
    };
    
    var red = Array;
    
    console.log(red)
    
}


function clean(){
    cluster_story.innerHTML = ''
}

function CPU(){
    clean();
    
    for( i=0; i<data_story.length; i++ ){
        if( data_story[i].type == "CPU" ){
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