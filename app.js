/* Imports */
import { renderEnemy } from './render-utils.js';

/* Get DOM Elements */
const hitPointEl = document.querySelector('#hit-points');
const enemiesEl = document.querySelector('#enemies');
const lankyEl = document.querySelector('#lanky');
const killsEl = document.querySelector('#kills');
const formEl = document.querySelector('form');
const defeatsEl = document.querySelector('defeated');

/* State */
let hitPoints = 10;
let defeatedEnemies = 0;
let currentId = 3;
const enemies = [
    { id: 1, name: 'Ganon', hp: 3 },
    { id: 2, name: 'Stinker', hp: 1 },
];

/* Events */
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (hitPoints === 0) {
        alert('NO LANKY, NO ENEMY');
        return;
    }

    const name = new FormData(formEl);

    const newEnemy = {
        id: currentId,
        name: name.get('enemy-name'),
        hp: Math.ceil(Math.random() * 5),
    };

    currentId++;

    enemies.push(newEnemy);

    displayEnemies();
});

function enemyHandler(enemy) {
    if (enemy.hp <= 0 || hitPoints === 0) return;

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

    if (enemy.hp === 0) {
        defeatedEnemies++;
        const appearanceEl = document.getElementById(`enemy-appearance-${enemy.id}`);
        appearanceEl.classList.add('dead');
    }

    if (hitPoints === 0) {
        document.getElementById('lanky').src = '../assets/dead.jpg';
        alert('GAME OVER, LANKY');
    }

    hitPointEl.textContent = hitPoints;
    killsEl.textContent = defeatedEnemies;

    const hpEl = document.getElementById(`enemy-hp-${enemy.id}`);
    hpEl.textContent = enemy.hp <= 0 ? `DEAD AF` : `HP: ${enemy.hp}`;
}

/* Display Functions */
function displayEnemies() {
    enemiesEl.textContent = '';
    killsEl.textContent = defeatedEnemies;

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
