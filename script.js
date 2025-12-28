// ===== SNIPPETS =====
const snippetsList = document.getElementById('snippets-list');
fetch('snippets.json')
  .then(res => res.json())
  .then(snippets => {
    snippets.forEach(snippet => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${snippet.title}: <code>${snippet.code}</code></span>`;
      const btn = document.createElement('button');
      btn.textContent = 'Copy'; btn.classList.add('copy-btn');
      btn.onclick = () => {
        navigator.clipboard.writeText(snippet.code);
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy', 1000);
      };
      li.appendChild(btn);
      snippetsList.appendChild(li);
    });
  });

// ===== QUIZ =====
const quizContainer = document.getElementById('quiz-container');
 const quiz = [
      {question: "Which keyword declares a constant in JavaScript?", options:["let","var","const","define"], answer:"const"},
      {question: "How do you reverse a string in Python?", options:["s.reverse()","s[::-1]","reverse(s)","s.reverse"], answer:"s[::-1]"},
      {question: "Which HTML tag is used for a line break?", options:["<br>","<lb>","<break>","<hr>"], answer:"<br>"},
      {question: "Which CSS property changes text color?", options:["color","background","font-style","text-decoration"], answer:"color"},
      {question: "Which Git command shows commit history?", options:["git log","git status","git show","git diff"], answer:"git log"}
    ];
quiz.forEach((q)=>{
  const qDiv=document.createElement('div'); qDiv.classList.add('quiz-question');
  qDiv.innerHTML=`<p>${q.question}</p>`;
  q.options.forEach(opt=>{
    const optDiv=document.createElement('div');
    optDiv.classList.add('quiz-option'); optDiv.textContent=opt;
    optDiv.onclick=()=>{ if(opt===q.answer) optDiv.classList.add('correct'); else optDiv.classList.add('wrong'); }
    qDiv.appendChild(optDiv);
  });
  quizContainer.appendChild(qDiv);
});

// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="dark"){ document.body.classList.add("dark"); toggleBtn.textContent="☀️"; }
toggleBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  const isDark=document.body.classList.contains("dark");
  toggleBtn.textContent=isDark?"☀️":"🌙";
  localStorage.setItem("theme", isDark?"dark":"light");
});

// ===== SHARE BUTTON =====
function shareSite(){
  if(navigator.share){ navigator.share({ title:document.title, url:window.location.href }); }
  else{ navigator.clipboard.writeText(window.location.href); }
}
