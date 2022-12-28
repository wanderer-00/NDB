var vender_cluster = document.querySelector('.vender_cluster');

var n = 0; // кол-во заполненных ячеек

// подсчет заполненных ячеек
for (i=0; i<venders_data.length; i++){
    if (venders_data[i].name !== ''){
        n++;
    }
};

// иконочный режим
//for (b=0; b<n; b++){
//    vender_cluster.innerHTML += `
//    <a href="${venders_data[b].link}">
//        <div class="element">
//            <div style="background-image: url(IMG/${venders_data[b].logo})"></div>
//        </div>
//    </a>
//    `;
//}

for (b=0; b<n; b++){
    vender_cluster.innerHTML += `
    <a href="${venders_data[b].link}">
        <div style="
        padding: 4px 8px;
        margin: 4px;
        background-color: #DDD;
        "
        >${venders_data[b].name}</div>
    </a>
    `;
}