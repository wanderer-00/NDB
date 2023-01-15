var cluster_story = document.querySelector('.story');

var n = 0; // кол-во заполненных ячеек


// подсчет заполненных ячеек
for (i=0; i<data_story.length; i++){
    if (data_story[i].name !== ''){
        n++;
    }
};

for (i=0; i<n; i++){
    
var icon = data_story[i].name.toLowerCase().replace(/ /g, '_') + ".webp"; // нижний регистр, замена пробела на нижний прочерк
    
    if (data_story[i].type == "CPU"){
        icon = "ryzen_3_1200.svg"
    }
    
    
    cluster_story.innerHTML += `
    <div class="row" data-f="${data_story[i].type}">
        <div class="box_icon">
            <div style="background-image: url(IMG/FOTO/${icon})"></div>
        </div>

        <div class="box_note">
            <a class="name" href="#">${data_story[i].name}</a>
            <a class="manufacturer" href="${data_story[i].link}">${data_story[i].vend}</a>
            <div class="prise1">${data_story[i].price[0]}</div>
            <div class="prise2"><s>${data_story[i].price[1]}</s></div>
        </div>
    </div>
    `;
}