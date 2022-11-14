export function renderEnemy(enemy) {
    const enemyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const appearanceEl = document.createElement('img');

    appearanceEl.src = '../assets/bat.png';
    appearanceEl.id = `enemy-appearance-${enemy.id}`;
    if (enemy.hp === 0) {
        enemyEl.classList.add('bat');
        appearanceEl.classList.add('dead');
    } else {
        enemyEl.classList.add('bat');
    }

    nameEl.textContent = enemy.name;

    hpEl.textContent = enemy.hp < 0 ? 'DEAD AF' : `HP: ${enemy.hp}`;
    hpEl.id = `enemy-hp-${enemy.id}`;

    enemyEl.append(nameEl, appearanceEl, hpEl);

    return enemyEl;
}
