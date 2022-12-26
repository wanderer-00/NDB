var cluster_venders = document.querySelector('.venders');

var n = 0; // кол-во заполненных ячеек

// подсчет заполненных ячеек
for (i=0; i<venders_data.length; i++){
    if (venders_data[i].name !== ''){
        n++;
    }
};

for (b=0; b<n; b++){
    console.log(venders_data[b].name);
    cluster_venders.innerHTML += `
    <a href="${venders_data[b].link}">
        <div class="element">
            <div style="background-image: url(IMG/${venders_data[b].logo})"></div>
        </div>
    </a>
    `;
}