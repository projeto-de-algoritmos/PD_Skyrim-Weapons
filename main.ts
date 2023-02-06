import { clear } from "https://deno.land/x/clear/mod.ts";
import weaponData from './data/skyrim_weapons.json' assert { type: 'json' };
import Knapsack from "./knapsack.ts";
import printMenu from "./menu.ts";
import Weapon from './weaponModel.ts';
import showItemList from './showItemList.ts';

let using = true;
const knp = new Knapsack();
let weaponsList: Weapon[] = [];
let weaponCount: number;
let result: [number, Weapon[]] = [0,[]];

function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

function showResults (result: [number, Weapon[]]): void {
  console.log('\n\n\n\n\n');
  console.clear();
  if (result[0] === 0 && result[1].length === 0) {
    console.log('%c Nenhum item foi obtido :(', 'color: #D00000');
    console.log(`Valor total obtido: %c${result[0]}\n`, 'color: #D00000');
    prompt('Pressione enter para continuar...');
  } else if (result[0] === 0 && result[1].length !== 0){
    console.log('%cLista de armas colocadas na mochila:\n', 'color: #A2AEBB');
    showItemList(result[1]);
    console.log(`Valor total obtido: %c${result[0]}\n`, 'color: #3F88C5');
    prompt('Pressione enter para continuar...');
  } else {
    console.log('%cLista de armas colocadas na mochila:\n', 'color: #A2AEBB');
    showItemList(result[1]);
    console.log(`Valor total obtido: %c${result[0]}\n`, 'color: #FFBA08');
    prompt('Pressione enter para continuar...');
  }
}

do {
  weaponsList = [];
  let maxWeight = 0;
  let question: string | null;
  await printMenu();
  const opt = Math.floor(Number(prompt('\n\n:')));
  console.clear();

  switch (opt) {
    case 1:
      showItemList(weaponData);
      prompt('Pressione enter para continuar...');
      break;
    case 2:
      console.log('%cExplicação:', 'color: #2B50AA');
      console.log('%cEsta funcionalidade realiza o cálculo de quantos itens o jogador pode colocar em sua mochila', 'color: #EDD83D');
      console.log('%cPara calcular a quantidade total e quais itens serão selecionados, utiliza-se uma função de randomização, assim, deixando a calculadora sempre dinâmica.\n', 'color: #EDD83D');
      console.log('%cPara utilizar a calculadora, apenas digite o peso máximo (em número inteiro) da mochila.\n\n', 'color: #6AB547');
      
      weaponCount = getRandomIndex(weaponData.length);
      for (let i = 0; i < weaponCount; i++) {
        weaponsList.push(weaponData[getRandomIndex(weaponData.length)]);
      }
      maxWeight = Math.floor(Number(prompt('Digite o peso máximo da mochila: ')));

      question = prompt('Deseja ver a lista de itens ? (S|N): ');
      if (question === 'S' || question === 's') {
        showItemList(weaponsList);
        result = knp.findOptimal(maxWeight, weaponsList);
        showResults(result);
      } else {
        console.clear();
        result = knp.findOptimal(maxWeight, weaponsList);
        showResults(result);
      }
      break;
    default:
      using = false;
      console.clear();
      break;
  }
   

} while (using);