document.querySelector(".urlBtn").addEventListener("click", getValue);
let result =  document.querySelector(".result");
let navbar =  document.querySelector(".navbar");


 document.querySelector(".menu").addEventListener("click", ()=> {

 navbar.style.display = ((navbar.style.display!='none') ? 'none' : 'block');
});

async function getValue(){
  const value = document.querySelector(".input").value;
  const url = `https://api.shrtco.de/v2/shorten?url=${value}`;

  await fetch(url).then(res =>{
    return res.json()
  }).then(data => {
    var addSpace =  document.querySelector(".advancedStat");
    addSpace.style.paddingTop = "350px";
    
    result.innerHTML += `
    <div class="urlList">
    <span>${data.result.original_link}</span>
    <span class="green">
    <span id="result">${data.result.full_short_link2}</span>
    <button class="copyBtn copy btnS">Copy</button>
    </span>
    </div>
    `;

    document.querySelector(".input").value = "";
  });

  let copyTextBtn = document.querySelector('.copyBtn');

    copyTextBtn.addEventListener('click', () => {
      var r = document.createRange();
      r.selectNode(document.getElementById('result'));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();;
      copyTextBtn.textContent = "copied";
      });

};