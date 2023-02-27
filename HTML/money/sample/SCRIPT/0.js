var AREA = document.getElementsByClassName('AREA')[0];

var n = 0;


/* COLUMN */
while(n < DATA.length){
    AREA.innerHTML += `
        <div class="COLUMN">
            <div class="HEAD">${DATA[n].HEAD}</div>
        </div>
`;
n++;
};n=0;


/* создание ячеек */
while(n < DATA.length){
    var COLUMN = document.getElementsByClassName('COLUMN')[n];
    /* ADD CELL */
    var b = 0;
    while(b < DATA[n].CLUSTER.length){
        COLUMN.innerHTML += `<div class="BOX"><div>${DATA[n].CLUSTER[b]}</div></div>`;
        b++;
    };
    n++;
};n=0;


/* покраска ячеек */
while(n < DATA.length){
    var COLUMN = document.getElementsByClassName('COLUMN')[n];
    /* ADD CELL */
    var b = 0;
    while(b < DATA[n].CLUSTER.length){
        var BOX = document.getElementsByClassName('COLUMN')[n].getElementsByClassName('BOX')[b].getElementsByTagName('div')[0];
        console.log(BOX);
        
        try{
            if(DATA[n].CLUSTER[b] === true){
                console.log('true');
                BOX.classList.add('TRUE');
            } else {
                if(DATA[n].CLUSTER[b] === false){
                    console.log('false');
                    BOX.classList.add('FALSE');
                }
            }
        } catch { console.log('no') }
        b++;
    };
    n++;
};n=0;