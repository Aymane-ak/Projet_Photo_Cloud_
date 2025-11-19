document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const file = document.getElementById("fileInput").files[0];
    if (!file) return alert("Choisis un fichier");

    const token = localStorage.getItem("token");

    const res = await fetch("/images/upload", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: file
    });

    if (!res.ok) return alert("Erreur upload");
    alert("Upload réussi !");
});
