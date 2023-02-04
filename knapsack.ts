import weaponData from './data/skyrim_weapons.json' assert { type: 'json' };

function findOptimal (totalweight: number) {
    //Criação do array 2x2 de tamanho fixo
    let Matriz = new Array(weaponData.length+1);

    for (let i; i <= weaponData.length; i++) {
        Matriz[i] = new Array(totalweight+1);
    }

    //Preenchimento da linha que contém 0 itens e que o peso disponível é 0
    for (let w = 0; w <= totalweight; w++) {
        Matriz[0][w] = 0;
    }

    for (let c = 1; c <= weaponData.length; c++) {
        Matriz[c][0] = 0;
    }
}