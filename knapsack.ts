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
    
    return [Matrix[weaponData.length][totalWeight], Matrix];
}

function findSolution(Matrix): Weapon[] {
    let solution: Weapon[] = [];
    let currentWeapon = weaponData.length - 1;
    let remainingWeight: number = Matrix[0].length - 1;
    for (let i = Matrix.length - 1; i >= 0; i--) {
        let currentWeight = remainingWeight - Math.floor(weaponData[currentWeapon].Weight);
        if (currentWeight < 0) {
            currentWeapon -= 1;
            if (currentWeapon < 0) {
                currentWeapon = 0;
            }
            continue;
        }
        if (Matrix[i][remainingWeight] === (weaponData[currentWeapon].Gold + Matrix[i-1][currentWeight])) {
            solution.push(weaponData[currentWeapon]);
            remainingWeight -= Math.floor(weaponData[currentWeapon].Weight);            
        }
        currentWeapon -= 1;
        if(currentWeapon < 0) {
            currentWeapon = 0;
        }
    }
    
    return solution;
}

const result = findOptimal(1);
const solution = findSolution(result[1]);

console.log(solution);