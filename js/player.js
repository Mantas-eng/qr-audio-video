window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const rec = records.find((r) => r.id === id);

  const player = document.getElementById("player");

  if (!rec) {
    player.innerHTML = `
      <div class="alert alert-danger text-center">Įrašas nerastas</div>
      <div class="text-center mt-3"><a href="index.html" class="btn btn-outline-primary">Grįžti</a></div>
    `;
    return;
  }

  document.title = rec.title;

  const ext = rec.file.split(".").pop().toLowerCase();
  let mediaHTML = "";
  if (ext === "mp4" || ext === "avi") {
    mediaHTML = `<video controls src="${rec.file}"></video>`;
  } else if (ext === "wav" || ext === "m4a") {
    mediaHTML = `<audio controls src="${rec.file}"></audio>`;
  }

  player.innerHTML = `
    <h2 class="mb-4 text-center">${rec.title}</h2>
    ${mediaHTML}
    <div class="text-center">
      <a href="index.html" class="btn btn-outline-primary">← Grįžti į sąrašą</a>
    </div>
  `;
});
