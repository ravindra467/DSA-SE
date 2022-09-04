//about:config
//security.fileuri.strict_origin_policy set to false
var reader = new XMLHttpRequest() || new ActiveXObject("MSXML2.XMLHTTP");
var info = [];
function loadFile() {
  reader.overrideMimeType("text/plain");
  reader.open("get", "./src/test.txt", true);
  reader.onreadystatechange = displayContents;
  reader.send(null);
}

function displayContents() {
  if (reader.readyState == 4) {
    // var el = document.getElementById('main');
    // el.innerHTML = reader.responseText;
    str = reader.responseText;
    arr = str.split("\r\n");
    for (let i in arr) {
      if (arr[i].length > 0) info.push(arr[i]);
    }
    // info.push(str);
    createcards();
  }
}

function createcards() {
  console.log("creating cards");
  console.log(info);

  // document.getElementById('timestamps').innerHTML = `
  // ${info.map(function(cont){
  //     return `
  //     <div class="card">
  //     <a href="https://codeforces.com/contests/${cont.id}" style="text-decoration: none; color: inherit;" target="_blank"><p>${cont.name}</p></a>
  //     <p id="time">${readTime(cont.startTimeSeconds)}<br>( ${daysleft(cont.startTimeSeconds)})</p>
  //     </div>
  //      `
  // }).join('')

  document.getElementById("problems").innerHTML = `
    ${info
      .map(function (cont) {
        return `
        <div class="card">
        <p class="qtitle"> <a href="https://www.codechef.com/problems/TADELIVE" class="qtitle"> ${
          cont.split(",")[0]
        }</a></p>
        <p class="qdesc">${cont.split(",").slice(1).join()}</p>
        </div>
         `;
      })
      .join("")}`;
}

// info = ["A boy and his apple ninja schoola jdlfjalksjdfk adfkjasdklfj asdkfj ", "batman"];
loadFile();
// createcards();
