import figlet from 'https://x.nest.land/deno-figlet@0.0.5/mod.js';

const printMenu = async () => {
    console.clear();
    const title = await figlet('SkyLoot');
    console.log(`${title}\n`);
    console.log('A calculadora de carregamento de loots para Skyrim!\n');
    console.log('Selecione a opção desejada:');
    console.log('1) Ver lista total de itens');
    console.log('2) Calcular quanto loot posso levar');
    console.log('0) Sair\n');
}

export default printMenu;