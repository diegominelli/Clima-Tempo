document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    showWarning("Carregando...");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=b33ade8b26c63da3057c68921b79cd0b&units=metric&lang=pt_br`;

    let results = await fetch(url);
    let json = await results.json();

    console.log(json);
  }
});

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
