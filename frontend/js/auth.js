export async function login(username, password) {
    const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erreur login");

    localStorage.setItem("token", data.token);
    return data;
}

export function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login.html";
}

export function isLoggedIn() {
    return !!localStorage.getItem("token");
}
