/* Provinces and territories */
var pt = [
  {
    x: 40,
    y: 200,
    text: "yukon territories"
  },
  {
    x: 130,
    y: 240,
    text: "northwest territories"
  },
  {
    x: 280,
    y: 260,
    text: "nunavut"
  },
  {
    x: 60,
    y: 300,
    text: "british columbia"
  },
  {
    x: 130,
    y: 340,
    text: "alberta"
  },
  {
    x: 200,
    y: 370,
    text: "saskatchewan"
  },
  {
    x: 260,
    y: 410,
    text: "manitoba"
  },
  {
    x: 330,
    y: 450,
    text: "ontario"
  },
  {
    x: 470,
    y: 450,
    text: "quebec"
  },
  {
    x: 570,
    y: 380,
    text: "newfoundland and labrador"
  },
  {
    x: 570,
    y: 495,
    text: "new brunswick"
  },
  {
    x: 610,
    y: 510,
    text: "nova scotia"
  },
  {
    x: 620,
    y: 470,
    text: "prince edward island"
  }
];
document.querySelector("#prov_terr").onclick = generate(pt);
