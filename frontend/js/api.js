export async function apiFetch(url, opts = {}) {
    const token = localStorage.getItem("token");

    const res = await fetch(url, {
        ...opts,
        headers: {
            ...(opts.headers || {}),
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined
        }
    });

    if (!res.ok) throw new Error(`Erreur API: ${res.status}`);
    return res.json();
}
