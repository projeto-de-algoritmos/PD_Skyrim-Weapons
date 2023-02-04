import weaponData from './data/skyrim_weapons.json' assert { type: 'json' };

function findOptimal (totalWeight: number): number {
    //Criação do array 2x2 de tamanho fixo
    let Matriz = new Array(weaponData.length+1);

    for (let i; i <= weaponData.length; i++) {
        Matriz[i] = new Array(totalWeight+1);
    }

    //Preenchimento da linha que contém 0 itens e que o peso disponível é 0
    for (let w = 0; w <= totalWeight; w++) {
        Matriz[0][w] = 0;
    }

    for (let c = 1; c <= weaponData.length; c++) {
        Matriz[c][0] = 0;
    }

    // Função Knapsack PD
    weaponData.map((weapon, index) => {
        for (let w = 1; w <= totalWeight; w++) {
            if (Math.floor(weapon.Weight) > w) {
                Matriz[index+1][w] = Matriz[index][w];
            } else {
                Matriz[index+1][w] = Math.max(
                    Matriz[index][w], weapon.Gold + Matriz[index][w-Math.floor(weapon.Weight)]);
            }
        }
    })
    
    // console.log(Matriz[weaponData.length][totalWeight]);
    return Matriz[weaponData.length][totalWeight];
}

findOptimal(1);