async function initUsers() {
    const data = await ApiClient.get('/users');
    const container = document.getElementById('users-container');

    if (data.error) {
        container.innerHTML = '<p class="error-msg">Erro ao carregar usuários.</p>';
        return;
    }

    container.innerHTML = data.map(user => `
        <div class="list-item" onclick="showPosts(${user.id})">
            <strong>${user.name}</strong><br>
            <small>${user.email} | ${user.company.name}</small>
        </div>
    `).join('');
}
window.onload = initUsers;