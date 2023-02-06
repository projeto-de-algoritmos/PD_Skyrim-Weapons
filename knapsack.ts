import weaponData from './data/skyrim_weapons.json' assert { type: 'json' };
interface Weapon {
    "Name": string,
    "Damage": number,
    "Weight": number,
    "Gold": number,
    "Upgrade": string,
    "Perk": string,
    "Type": string,
    "Category": string,
    "Speed": string | number
}


function findOptimal (totalWeight: number): [number, number[]] {
    //Criação do array 2x2 de tamanho fixo
    let Matrix = new Array(weaponData.length+1);

    for (let i = 0; i <= weaponData.length; i++) {
        Matrix[i] = new Array(totalWeight+1);
    }

    //Preenchimento da linha que contém 0 itens e que o peso disponível é 0
    for (let w = 0; w <= totalWeight; w++) {
        Matrix[0][w] = 0;
    }

    for (let c = 1; c <= weaponData.length; c++) {
        Matrix[c][0] = 0;
    }

    // Função Knapsack PD
    weaponData.map((weapon, index) => {
        for (let w = 1; w <= totalWeight; w++) {
            if (Math.floor(weapon.Weight) > w) {
                Matrix[index+1][w] = Matrix[index][w];
            } else {
                Matrix[index+1][w] = Math.max(
                    Matrix[index][w], weapon.Gold + Matrix[index][w-Math.floor(weapon.Weight)]);
            }
        }
    })
    
    return [Matrix[weaponData.length][totalWeight], Martix];
}

findOptimal(1);