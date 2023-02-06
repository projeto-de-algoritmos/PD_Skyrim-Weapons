import Weapon from "./weaponModel.ts";

class Knapsack {
    findOptimal (totalWeight: number, weaponsList: Weapon[]): [number, Weapon[]] {
        if (weaponsList.length === 0) {
            return [0, []];
        }
        //Criação do array 2x2 de tamanho fixo
        const Matrix = new Array(weaponsList.length+1);

        for (let i = 0; i <= weaponsList.length; i++) {
            Matrix[i] = new Array(totalWeight+1);
        }

        //Preenchimento da linha que contém 0 itens e que o peso disponível é 0
        for (let w = 0; w <= totalWeight; w++) {
            Matrix[0][w] = 0;
        }

        for (let c = 1; c <= weaponsList.length; c++) {
            Matrix[c][0] = 0;
        }

        // Função Knapsack PD
        weaponsList.map((weapon, index) => {
            for (let w = 1; w <= totalWeight; w++) {
                if (Math.floor(weapon.Weight) > w) {
                    Matrix[index+1][w] = Matrix[index][w];
                } else {
                    Matrix[index+1][w] = Math.max(
                        Matrix[index][w], weapon.Gold + Matrix[index][w-Math.floor(weapon.Weight)]);
                }
            }
        })

        const solution: Weapon[] = this.findSolution(Matrix, weaponsList);
        return [Matrix[weaponsList.length][totalWeight], solution];
    }

    private findSolution(Matrix: number[][], weaponsList: Weapon[]): Weapon[] {
        const solution: Weapon[] = [];
        let currentWeapon = weaponsList.length - 1;
        let remainingWeight: number = Matrix[0].length - 1;
        for (let i = Matrix.length - 1; i >= 0; i--) {
            const currentWeight = remainingWeight - Math.floor(weaponsList[currentWeapon].Weight);
            if (currentWeight < 0) {
                currentWeapon -= 1;
                if (currentWeapon < 0) {
                    currentWeapon = 0;
                }
                continue;
            }
            if (Matrix[i][remainingWeight] === (weaponsList[currentWeapon].Gold + Matrix[i-1][currentWeight])) {
                solution.push(weaponsList[currentWeapon]);
                remainingWeight -= Math.floor(weaponsList[currentWeapon].Weight);            
            }
            currentWeapon -= 1;
            if(currentWeapon < 0) {
                currentWeapon = 0;
            }
        }

        return solution;
    }
}

export default Knapsack;