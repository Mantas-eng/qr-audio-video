window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");

  records.forEach((rec) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm p-3 text-center">
        <div style="font-size:3rem;">
          ${
            rec.file.includes(".mp4") || rec.file.includes(".avi") ? "🎬" : "🎵"
          }
        </div>
        <h5 class="card-title mt-2">${rec.title}</h5>
        <div id="qrcode-${
          rec.id
        }" class="mt-3 d-flex justify-content-center"></div>
      </div>
    `;
    list.appendChild(col);

    new QRCode(document.getElementById(`qrcode-${rec.id}`), {
      text: `https://example.com/player.html?id=${rec.id}`,
      width: 80,
      height: 80,
    });
  });

  if (window.innerWidth < 768) {
    const reader = document.getElementById("reader");
    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 250,
      },
      (decodedText, decodedResult) => {
        window.location.href = decodedText;
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    );
  }
});
