function showRandomSong() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!songs || songs.length === 0) {
    resultDiv.textContent = "曲リストが読み込まれていません。";
    return;
  }

  const randomIndex = Math.floor(Math.random() * songs.length);
  const songName = songs[randomIndex];

  const nameElement = document.createElement("h2");
  nameElement.textContent = `選ばれた曲：${songName}`;

  const link = document.createElement("a");
  const encodedName = encodeURIComponent(songName);
  link.href = `https://www.nicovideo.jp/tag/${encodedName}`;
  link.target = "_blank";
  link.textContent = "ニコニコでタグ検索する";

  resultDiv.appendChild(nameElement);
  resultDiv.appendChild(link);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("show-button").addEventListener("click", showRandomSong);
});
