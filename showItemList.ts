import Weapon from "./weaponModel.ts";

function showItemList(weaponsList: Weapon[]) {
    if(weaponsList.length === 0) {
        console.log('\n%cNão houve loot gerado!\n', 'color: #D00000');
        return;
    }
    console.log('<---------------------------------->\n');
    weaponsList.map((weapon, index) => {
        console.log(`Arma ${index+1}:\n`);
        console.log(`\t. Nome: ${weapon.Name}`);
        console.log(`\t. Dano: ${weapon.Damage}`);
        console.log(`\t. Peso: ${weapon.Weight}`);
        console.log(`\t. Valor: ${weapon.Gold}\n`);
        console.log('<---------------------------------->\n');
    });
    prompt('Pressione enter para continuar...');
    console.clear();
}

export default showItemList;