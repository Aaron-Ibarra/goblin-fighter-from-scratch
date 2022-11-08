export function renderEnemy(enemy) {
    const enemyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const appearanceEl = document.createElement('div');

    //appearanceEl.classList.add('bat');

    nameEl.textContent = enemy.name;

    hpEl.textContent = enemy.hp < 0 ? 0 : enemy.hp;
    hpEl.id = `enemy-hp-${enemy.id}`;

    enemyEl.append(appearanceEl, hpEl, nameEl);

    return enemyEl;
}
