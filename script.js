const tamList = document.querySelector(".tam");
const engList = document.querySelector(".eng");
const kuralNum = document.querySelector("#number");
const firstLine = document.querySelector("#line1");
const secondLine = document.querySelector("#line2");
const enline1 = document.querySelector("#en-line1");
const taChapter = document.querySelector("#tachapter");
const enChapter = document.querySelector("#enchapter");
const taExp = document.querySelector("#tam_exp");
const enExp = document.querySelector("#eng_exp");
const taSec = document.querySelector("#tamsec");
const enSec = document.querySelector("#ensec");

const getData = async (n) => {
  let data;
  try {
    console.log("data fetched");
    let res = await fetch(`https://api-thirukkural.vercel.app/api?num=${n}`);
    data = await res.json();
    console.log(data);
    kuralNum.textContent = n;
    firstLine.innerHTML = `<b>குறள்</b> : ${data.line1}`;
    secondLine.textContent = data.line2;
    enline1.innerHTML = `<b>Kural</b> : ${data.eng}`;
    taChapter.innerHTML = `<b>அதிகாரம்</b> : ${data.chap_tam}`;
    enChapter.innerHTML = `<b>Chapter</b> : ${data.chap_eng}`;
    enExp.innerHTML = `<b>Explanation</b> : ${data.eng_exp}`;
    taExp.innerHTML = `<b>விளக்கம்</b> : ${data.tam_exp}`;
    enSec.innerHTML = `<b>Division</b> : ${data.sect_eng}`;
    taSec.innerHTML = `<b>பிரிவு</b> : ${data.sect_tam}`;
  } catch (error) {
    console.log(error);
  }
};

/* console.log(arr);
    for (let d of arr) {
      let liElement = document.createElement("li");
      liElement.textContent = `${d.name} ${d.count}`;
      liElement.setAttribute("onclick", `getAnimeList('${d.name}')`);
      aniList.appendChild(liElement);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAnimeList = async (e) => {
  console.log("anime clicked", e);
  try {
    console.log("data fetched");
    let res = await fetch("https://myanimelist.net/anime/genre/1/" + e);
    data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};*/

const calcNum = () => {
  let num = Math.floor(Math.random() * 1330) + 1;
  console.log(num);
  getData(num);
};

getData((num = 1));
