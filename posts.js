async function showPosts(userId) {
    const container = document.getElementById('posts-container');
    const commContainer = document.getElementById('comments-container');
    
    container.innerHTML = "Buscando postagens...";
    commContainer.innerHTML = "Aguardando postagem...";

    const posts = await ApiClient.get(`/posts?userId=${userId}`);
    
    if (posts.error) {
        container.innerHTML = '<p class="error-msg">Erro ao carregar posts.</p>';
        return;
    }

    container.innerHTML = posts.map(post => `
        <div class="list-item" onclick="showComments(${post.id})">
            <strong>${post.title}</strong>
            <p style="font-size: 0.8rem; color: #666">${post.body.substring(0, 60)}...</p>
        </div>
    `).join('');
}