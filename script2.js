function participateChallenge(challengeEntry) {
    const completedChallenges = JSON.parse(localStorage.getItem('completedChallenges') || '[]');
    if (!completedChallenges.some(challenge => challenge.name === challengeEntry.name && challenge.type === challengeEntry.type)) {
        completedChallenges.push(challengeEntry); // Сохраняем объект челленджа
        localStorage.setItem('completedChallenges', JSON.stringify(completedChallenges));
        updateCompletedChallenges();
        alert(`Вы приняли участие в: ${challengeEntry.name}`);
    } else {
        alert(`Вы уже участвуете в ${challengeEntry.name}`);
    }
}
function addChallenge() {
    const challengeName = prompt("Введите название нового челленджа:");
    if (challengeName) {
        const challengeType = prompt("Введите тип челленджа (совместный, групповой, одиночный):");
        
        const challengeEntry = {
            name: challengeName,
            type: challengeType
        };
        const challengeList = document.getElementById('challenge-list');
        const listItem = document.createElement('li');     
        const challengeSpan = document.createElement('span');
        challengeSpan.innerText = `${challengeEntry.name} (${challengeEntry.type})`;
        challengeSpan.onclick = () => participateChallenge(challengeEntry);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'Удалить';
        deleteButton.onclick = () => removeChallenge(deleteButton, challengeEntry);
        listItem.appendChild(challengeSpan);
        listItem.appendChild(deleteButton);
        challengeList.appendChild(listItem);
        // Сохраняем челлендж в локальное хранилище
        const existingChallenges = JSON.parse(localStorage.getItem('challenges') || '[]');
        existingChallenges.push(challengeEntry);
        localStorage.setItem('challenges', JSON.stringify(existingChallenges));
    }
}
function removeChallenge(button, challengeEntry) {
    const listItem = button.parentNode;
    listItem.remove();
    // Удаление челленджа из локального хранилища
    let existingChallenges = JSON.parse(localStorage.getItem('challenges') || '[]');
    existingChallenges = existingChallenges.filter(challenge => 
        challenge.name !== challengeEntry.name || challenge.type !== challengeEntry.type
    );
    localStorage.setItem('challenges', JSON.stringify(existingChallenges));
}
function removeChallenge(button) {
    const listItem = button.parentNode;
    listItem.remove();
}
function updateCompletedChallenges() {
    const completedChallenges = JSON.parse(localStorage.getItem('completedChallenges') || '[]');
    
    // Очистка старых данных
    document.getElementById('single-challenges').innerHTML = '';
    document.getElementById('group-challenges').innerHTML = '';
    document.getElementById('joint-challenges').innerHTML = '';

    // Разделение челленджей по категориям
    completedChallenges.forEach(challenge => {
        const listItem = document.createElement('li');
        listItem.innerText = challenge.name; // Отображаем только название челленджа

        if (challenge.type === 'одиночный') {
            document.getElementById('single-challenges').appendChild(listItem);
        } else if (challenge.type === 'групповой') {
            document.getElementById('group-challenges').appendChild(listItem);
        } else if (challenge.type === 'совместный') {
            document.getElementById('joint-challenges').appendChild(listItem);
        }
    });
}