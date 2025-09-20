window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");

  records.forEach((rec) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm p-3 text-center position-relative">
        <div style="font-size:3rem;">${
          rec.file.endsWith(".mp4") || rec.file.endsWith(".avi") ? "🎬" : "🎵"
        }</div>
        <h5 class="card-title mt-2">${rec.title}</h5>
        <div id="qrcode-${
          rec.id
        }" class="mt-3 d-flex justify-content-center qrcode-container"></div>
        <div class="overlay-text">Peržiūrėti tik nuskenavus QR kodą</div>
      </div>
    `;
    list.appendChild(col);

    new QRCode(document.getElementById(`qrcode-${rec.id}`), {
      text: "https://qr-audio-video.vercel.app/player.html?id=" + rec.id,
      width: 80,
      height: 80,
    });
  });
});
