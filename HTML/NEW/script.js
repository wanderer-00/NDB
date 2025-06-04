let items = document.body.getElementsByClassName('items')[0];

for (i = 0; i < data_items.length; i++) {
    if (data_items[i].have == true) {
        items.innerHTML += `
                <div style="grid-column: span ${data_items[i].icon[2]}; grid-row: span ${data_items[i].icon[1]}">
                    <div class="icon" style="background-image: url(../../IMG/FOTO/${data_items[i].icon[0]}); aspect-ratio: ${data_items[i].icon[2]}/${data_items[i].icon[1]}">
                        <div class="number">1</div>
                    </div>
                </div>
            `
    }
}