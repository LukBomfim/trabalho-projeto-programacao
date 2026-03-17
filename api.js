const API_URL = "https://jsonplaceholder.typicode.com";

const ApiClient = {
    async get(endpoint) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), 6000); // 6 segundos de timeout

        try {
            const response = await fetch(`${API_URL}${endpoint}`, { signal: controller.signal });
            clearTimeout(id);
            if (!response.ok) throw new Error("Erro na rede.");
            return await response.json();
        } catch (err) {
            console.error("Erro no consumo:", err);
            return { error: true };
        }
    }
};