import weaponData from './data/skyrim_weapons.json' assert { type: 'json' };

function findOptimal (totalweight: number) {
    //Criação do array 2x2 de tamanho fixo
    let Matriz = new Array(weaponData.length+1);

    for (let i; i <= weaponData.length; i++) {
        Matriz[i] = new Array(totalweight+1);
    }
}