var wait = document.querySelector(".wait");


// кол-во товаров (цифра на корзине)
if (data_wait.length !== ""){
    var n = 0;
    for (i=0; i<data_wait.length; i++){
        if (data_wait[i].name !== ""){
            n++
        }
    }
    wait.innerHTML = `<div class="number_wait">${n}</div>`;
}
