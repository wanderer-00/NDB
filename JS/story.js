var cluster_story = document.querySelector('.story');

var n = 0; // кол-во заполненных ячеек


// подсчет заполненных ячеек
for (i=0; i<data_story.length; i++){
    if (data_story[i].name !== ''){
        n++;
    }
};

for (i=0; i<n; i++){
    cluster_story.innerHTML += `
    <div class="row">
        <div class="box_icon">
            <div style="background-image: url(IMG/FOTO/${data_story[i].icon})"></div>
        </div>

        <div class="box_note">
            <a class="name" href="#">${data_story[i].name}</a>
            <a class="manufacturer" href="${data_story[i].link}">производитель</a>
            <div class="prise1">${data_story[i].price[0]}</div>
            <div class="prise2">${data_story[i].price[1]}</div>
        </div>
    </div>
    `;
}