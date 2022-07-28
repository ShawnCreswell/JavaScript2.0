let codersDiv = document.getElementById('coders');

function getUsername(element) {
    console.log(element.value)
    getData(element.value);
}

async function getData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const coderData = await response.json();
    console.log(coderData);
    codersDiv.innerHTML += createCard(coderData);
}

function createCard(coderData) {
    const output = `
    <div class="card flexed">
        <div class="leftt">
            <img class ="userCard" src="${coderData.avatar_url}" alt="="${coderData.login}">
        </div>
        <div class="right">
            <h2>${coderData.name}</h2>
            <p><strong>login: </strong>${coderData.login}/p>
            <p><strong>location: </strong>${coderData.location}</p>
            <p><strong>Repos: </strong>${coderData.repo}</p>
        </div>
</div>
`;
return output;
}
