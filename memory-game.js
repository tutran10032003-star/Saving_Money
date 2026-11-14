/* Eco-Buddy Memory Match extension.
 * Replaces only the Memory Match renderer/flip handler; keeps existing game shell and rewards.
 */
(function(){
  "use strict";
  const BANK = () => Array.isArray(window.ecoMemoryTips) ? window.ecoMemoryTips : [];
  const KEY = "eco_buddy_memory_tips_unlocked_v1";
  const ROUND_KEY = "eco_buddy_memory_round_v1";
  const readUnlocked = () => { try { const v=JSON.parse(localStorage.getItem(KEY)||"[]"); return Array.isArray(v)?v:[]; } catch(e){ return []; } };
  const saveUnlocked = ids => { try { localStorage.setItem(KEY,JSON.stringify(ids)); } catch(e){} };
  const language = () => (typeof gameLang==="function" ? gameLang() : (localStorage.getItem("eco_buddy_language")==="vi"?"vi":"en"));
  const text = (en,vi) => language()==="vi"?vi:en;
  const escapeHtml = value => String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const getRound = () => { try{return Math.max(0,Number(localStorage.getItem(ROUND_KEY))||0);}catch(e){return 0;} };
  const setRound = n => { try{localStorage.setItem(ROUND_KEY,String(n));}catch(e){} };
  const pairCountForRound = n => n<=2?4:(n<=5?6:8);
  let open=[],matched=[],locked=false,deck=[],currentTips=[];

  function renderVault(){
    const unlocked=readUnlocked(),all=BANK(),pct=all.length?Math.round(unlocked.length/all.length*100):0;
    const items=all.map(t=>{
      const seen=unlocked.includes(t.id);
      return '<div class="rounded-xl border p-2 text-left '+(seen?'bg-[#e8f1e3] border-[#9eb995]':'bg-[#f1ece3] border-[#d8cbb8 opacity-70')+'"><div class="flex items-center gap-2"><span class="text-lg">'+(seen?t.icon:'🔒')+'</span><span class="text-[10px] font-extrabold">'+escapeHtml(seen?(language()==="vi"?t.vi:t.en):text("Locked tip","Mẹo chưa mở"))+'</span></div><p class="text-[9px] mt-1 opacity-70">'+escapeHtml(seen?(language()==="vi"?t.categoryName.vi:t.categoryName.en):text("Match a pair to discover this tip","Ghép đúng cặp để mở mẹo này"))+'</p></div>';
    }).join("");
    const panel=document.getElementById("eco-memory-vault");
    if(panel)panel.innerHTML='<div class="flex items-center justify-between gap-2"><b>📚 '+text("Tip Library","Kho mẹo")+'</b><b class="text-xs">'+unlocked.length+' / '+all.length+'</b></div><div class="h-2 rounded-full bg-[#e8dfd1] overflow-hidden mt-2"><div class="h-full bg-[#83a77d]" style="width:'+pct+'%"></div></div><p class="text-[10px] mt-1 mb-2">'+pct+'% '+text("discovered","đã khám phá")+'</p><div class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto">'+items+'</div>';
  }
  window.toggleEcoMemoryVault=function(){
    let panel=document.getElementById("eco-memory-vault");
    if(!panel)return;
    const opening=panel.classList.contains("hidden");
    panel.classList.toggle("hidden");
    if(opening)renderVault();
  };
  window.renderMemoryGame=function(){
    const round=getRound()+1;setRound(round);
    const count=pairCountForRound(round),all=BANK(),unlocked=readUnlocked();
    const unseen=all.filter(t=>!unlocked.includes(t.id));
    const seen=all.filter(t=>unlocked.includes(t.id));
    const shuffled=a=>a.slice().sort(()=>Math.random()-.5);
    let chosen=shuffled(unseen).slice(0,count);
    if(chosen.length<count)chosen=chosen.concat(shuffled(seen).slice(0,count-chosen.length));
    currentTips=chosen;
    deck=shuffled(chosen.flatMap((tip,index)=>[{...tip,uid:tip.id+"-a",pairId:tip.id},{...tip,uid:tip.id+"-b",pairId:tip.id}]));
    open=[];matched=[];locked=false;window.ecoMemoryDeck=deck;ecoMemoryOpen=[];ecoMemoryMatched=[];window.ecoMemoryMoves=0;
    const area=document.getElementById("eco-game-play-area"),vi=language()==="vi";
    if(!area)return;
    area.innerHTML='<div class="eco-playfield eco-memory-playfield space-y-3"><div class="flex flex-wrap items-center justify-between gap-2"><div class="eco-memory-status !m-0"><span id="memory-progress">0 / '+count+'</span><span id="memory-moves">0 '+(vi?"lượt":"moves")+'</span></div><button type="button" class="eco-action" onclick="toggleEcoMemoryVault()">📚 '+(vi?"Kho mẹo":"Tip Library")+'</button></div><div id="eco-memory-vault" class="hidden rounded-xl border border-[#cdbb9f] bg-[#fffaf1] p-3"></div><div class="text-[10px] font-extrabold text-[#7a6452]">'+(vi?"VÁN ":"ROUND ")+round+' · '+count+' '+(vi?"CẶP":"PAIRS")+'</div><div id="eco-memory-grid" class="eco-memory-grid">'+deck.map((card,i)=>'<button type="button" class="eco-memory-card" data-card-index="'+i+'" aria-label="'+(vi?"Lá bài úp":"Face-down card")+'" onclick="flipMemoryCard('+i+')"><span class="eco-memory-inner"><span class="eco-memory-face eco-card-back"><b>☘</b><small>ECO</small></span><span class="eco-memory-face eco-card-front"><b class="eco-memory-icon">'+card.icon+'</b><small>'+(vi?escapeHtml(card.categoryName.vi):escapeHtml(card.categoryName.en))+'</small></span></span></button>').join("")+'</div><div id="memory-feedback" class="eco-memory-feedback rounded-xl bg-[#f5efe4] p-3 text-center text-xs font-bold">'+(vi?"Tìm các cặp biểu tượng giống nhau để khám phá mẹo tiết kiệm điện!":"Match identical icons to discover energy-saving tips!")+'</div><div id="memory-tip-reveal" class="rounded-xl border border-[#c7d8bd] bg-[#edf4e8] p-3 text-xs hidden"></div></div>';
  };
  window.flipMemoryCard=function(i){
    if(locked||matched.includes(i)||open.includes(i))return;
    const card=deck[i],buttons=document.querySelectorAll("#eco-memory-grid .eco-memory-card");
    if(!card||!buttons[i])return;
    const vi=language()==="vi",button=buttons[i];button.classList.add("flipped");button.setAttribute("aria-label",vi?card.categoryName.vi:card.categoryName.en);open.push(i);
    if(open.length!==2)return;
    window.ecoMemoryMoves=(window.ecoMemoryMoves||0)+1;
    const moves=document.getElementById("memory-moves");if(moves)moves.textContent=window.ecoMemoryMoves+" "+(vi?"lượt":"moves");
    const [a,b]=open,first=deck[a],second=deck[b];
    if(first.pairId===second.pairId){
      matched.push(a,b);ecoMemoryMatched=matched.slice();ecoGameScore=(ecoGameScore||0)+1;
      [a,b].forEach(n=>{buttons[n].classList.add("matched");buttons[n].disabled=true;});
      const unlocked=readUnlocked(),isNew=!unlocked.includes(first.id);
      if(isNew){
        unlocked.push(first.id);saveUnlocked(unlocked);
        try{currentXP+=2;saveUserData();updateMascotLevel();}catch(e){}
      }
      const progress=document.getElementById("memory-progress");if(progress)progress.textContent=(matched.length/2)+" / "+(deck.length/2);
      const feedback=document.getElementById("memory-feedback");
      if(feedback)feedback.textContent=vi?"Ghép đúng! "+(isNew?"✨ Mẹo mới đã được lưu!":"Mẹo này đã có trong kho."):"Match! "+(isNew?"✨ New tip saved!":"This tip is already in your library.");
      const reveal=document.getElementById("memory-tip-reveal");
      if(reveal){reveal.classList.remove("hidden");reveal.innerHTML='<div class="font-black mb-1">'+(isNew?"✨ "+(vi?"MẸO MỚI":"NEW TIP"): "💡 "+(vi?"MẸO TIẾT KIỆM":"ENERGY TIP"))+' · +'+(isNew?2:0)+' XP</div><div class="font-extrabold">'+escapeHtml(vi?first.vi:first.en)+'</div>';}
      open=[];ecoMemoryOpen=[];
      if(matched.length===deck.length)setTimeout(()=>{renderVault();finishEcoGame();},500);
    }else{
      locked=true;const feedback=document.getElementById("memory-feedback");if(feedback)feedback.textContent=vi?"Chưa khớp, thử lại nhé!":"Not a match — try again!";
      setTimeout(()=>{
        [a,b].forEach(n=>{const btn=document.querySelector('#eco-memory-grid .eco-memory-card[data-card-index="'+n+'"]');if(btn&&!matched.includes(n)){btn.classList.remove("flipped");btn.setAttribute("aria-label",text("Face-down card","Lá bài úp"));}});
        open=[];ecoMemoryOpen=[];locked=false;
        const fb=document.getElementById("memory-feedback");if(fb)fb.textContent=text("Keep matching pairs to discover more tips!","Tiếp tục ghép cặp để khám phá thêm mẹo nhé!");
      },850);
    }
  };
  const originalFinish=window.finishEcoGame;
  if(typeof originalFinish==="function"){
    window.finishEcoGame=function(){
      originalFinish.apply(this,arguments);
      if(typeof activeEcoGame!=="undefined"&&activeEcoGame==="memory"){
        const area=document.getElementById("eco-game-play-area");
        if(area){const button=document.createElement("button");button.type="button";button.className="eco-action w-full mt-3";button.textContent=text("📚 Open Tip Library","📚 Mở kho mẹo");button.onclick=()=>{const existing=document.getElementById("eco-memory-vault-result");if(existing){existing.remove();return;}const box=document.createElement("div");box.id="eco-memory-vault-result";box.className="rounded-xl border border-[#cdbb9f] bg-[#fffaf1] p-3 mt-3";area.appendChild(box);const all=BANK(),ids=readUnlocked();box.innerHTML='<b>📚 '+text("Tip Library","Kho mẹo")+' · '+ids.length+' / '+all.length+'</b><div class="grid grid-cols-2 gap-2 mt-2">'+all.map(t=>'<div class="rounded-lg p-2 text-[10px] '+(ids.includes(t.id)?"bg-[#e8f1e3]":"bg-[#f1ece3]")+'">'+(ids.includes(t.id)?t.icon:"🔒")+' '+escapeHtml(ids.includes(t.id)?(language()==="vi"?t.vi:t.en):text("Not discovered","Chưa mở"))+'</div>').join("")+'</div>';};area.appendChild(button);}
      }
    };
  }
})();