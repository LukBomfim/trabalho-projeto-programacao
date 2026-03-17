async function showComments(postId) {
    const container = document.getElementById('comments-container');
    container.innerHTML = "Carregando comentários...";

    const comments = await ApiClient.get(`/comments?postId=${postId}`);

    if (comments.error) {
        container.innerHTML = '<p class="error-msg">Erro ao carregar comentários.</p>';
        return;
    }

    container.innerHTML = comments.map(c => `
        <div class="list-item" style="cursor: default">
            <strong style="color: #007bff">${c.email}</strong>
            <p style="font-size: 0.9rem">${c.body}</p>
        </div>
    `).join('');
}