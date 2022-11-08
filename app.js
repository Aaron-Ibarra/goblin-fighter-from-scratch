/* Imports */
import { renderEnemy } from './render-utils.js';

/* Get DOM Elements */
const hitPointEl = document.querySelector('#hit-points');
const enemiesEl = document.querySelector('.enemies');

/* State */
let hitPoints = 10;
let defeatedEnemies = 0;
let currentId = 4;
const enemies = [
    { id: 1, name: 'Ganon', hp: 3 },
    { id: 2, name: 'Stinker', hp: 1 },
];

/* Events */
function enemyHandler(enemy) {
    if (enemy.hp <= 0) return;

    if (Math.random() < 0.5) {
        enemy.hp--;
        alert(`You hit ${enemy.name}! NOICE!!!`);
    } else {
        alert('Lanky MISSED. What will Zolder think of you now...');
    }

    if (Math.random() < 0.5) {
        hitPoints--;
        alert(`Aw no! AEEYUHUHAUUH. ${enemy.name} slapped you across the face :/`);
    } else {
        alert(`${enemy.name} tried to hit you but MISSED. Nice roll Lanky :)`);
    }
}

/* Display Functions */
function displayEnemies() {
    enemiesEl.textContent = '';

    for (let enemy of enemies) {
        const currentEnemy = renderEnemy(enemy);
        currentEnemy.addEventListener('click', () => {
            enemyHandler(enemy);
        });
        enemiesEl.append(currentEnemy);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayEnemies();
