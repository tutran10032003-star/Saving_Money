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
  const LEVEL_KEY="eco_buddy_memory_levels_v1";
  const LEVELS=[4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10];
  let activeLevel=1;
  const readLevels=()=>{try{const v=JSON.parse(localStorage.getItem(LEVEL_KEY)||"[1]");return Array.isArray(v)?v:[1];}catch(e){return [1];}};
  const saveLevels=v=>{try{localStorage.setItem(LEVEL_KEY,JSON.stringify(v));}catch(e){}};
  window.showMemoryHome=function(){
    const area=document.getElementById("eco-game-play-area");if(!area)return;
    const vi=language()==="vi",done=readLevels(),completed=done.filter(n=>n<0).length,unlocked=done.filter(n=>n>0).length;
    area.innerHTML='<div class="eco-playfield space-y-5"><div class="text-center py-3"><div class="text-6xl mb-3">🃏</div><h3 class="text-2xl font-black">'+text("Memory Match","Lật thẻ ghi nhớ")+'</h3><p class="text-sm opacity-75 mt-2">'+text("Match pairs, discover energy-saving tips and build your collection.","Ghép các cặp thẻ, khám phá mẹo tiết kiệm điện và xây dựng bộ sưu tập của m nhé.")+'</p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><button type="button" class="eco-action p-5 text-base" onclick="showMemoryTips()">📚 '+text("Tip Library","Thư viện mẹo")+'<small class="block text-xs font-semibold mt-2">'+readUnlocked().length+' / '+BANK().length+' '+text("tips discovered","mẹo đã khám phá")+'</small></button><button type="button" class="eco-action p-5 text-base" onclick="showMemoryLevels()">🃏 '+text("Play / View levels","Bàn chơi")+'<small class="block text-xs font-semibold mt-2">'+completed+' / 30 '+text("levels completed","bàn đã hoàn thành")+' · '+unlocked+' '+text("unlocked","đã mở")+'</small></button></div></div>';
  };
  window.showMemoryTips=function(){
    const area=document.getElementById("eco-game-play-area");if(!area)return;
    const vi=language()==="vi";
    area.innerHTML='<div class="eco-playfield space-y-3"><div class="flex items-center justify-between gap-2"><h3 class="text-lg font-black">📚 '+text("Tip Library","Thư viện mẹo")+'</h3><button type="button" class="eco-action" onclick="showMemoryHome()">← '+text("Back","Quay lại")+'</button></div><div id="eco-memory-vault" class="rounded-xl border border-[#cdbb9f] bg-[#fffaf1] p-3"></div></div>';
    renderVault();
  };
  window.showMemoryLevels=function(){
    const area=document.getElementById("eco-game-play-area");if(!area)return;
    const done=readLevels(),vi=language()==="vi";
    area.innerHTML='<div class="eco-playfield space-y-4"><div class="flex items-center justify-between gap-2"><div><h3 class="text-lg font-black">🃏 '+text("Choose a level","Chọn bàn chơi")+'</h3><p class="text-xs opacity-70">'+text("Complete a level to unlock the next.","Hoàn thành bàn để mở bàn tiếp theo.")+'</p></div><button type="button" class="eco-action" onclick="showMemoryHome()">← '+text("Back","Quay lại")+'</button></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-3">'+LEVELS.map((pairs,i)=>{const n=i+1,unlocked=done.includes(n),complete=done.includes(-n);return '<button type="button" '+(unlocked?'':'disabled')+' onclick="startMemoryLevel('+n+')" class="rounded-2xl border-2 p-4 text-center '+(complete?'bg-[#e8f1e3] border-[#8bad80]':unlocked?'bg-white border-[#cbb99f]':'bg-[#eee9e0] border-[#ddd4c8] opacity-60')+'"><div class="text-2xl">'+(complete?'🏆':unlocked?'🃏':'🔒')+'</div><b class="block mt-1">'+text("Level ","Bàn ")+n+'</b><small>'+pairs+' '+text("pairs","cặp")+'</small><small class="block mt-1">'+(complete?text("Completed","Đã hoàn thành"):unlocked?text("Play now","Chơi ngay"):text("Locked","Đã khóa"))+'</small></button>';}).join("")+'</div></div>';
  };
  window.startMemoryLevel=function(level){
    if(level<1||level>30||!readLevels().includes(level))return;
    activeLevel=level;
    const count=LEVELS[level-1],all=BANK(),unlocked=readUnlocked();
    const shuffled=a=>a.slice().sort(()=>Math.random()-.5);
    const uniqueTips=Array.from(new Map(all.filter(t=>t&&t.id).map(t=>[t.id,t])).values());
    const unseen=uniqueTips.filter(t=>!unlocked.includes(t.id)),seen=uniqueTips.filter(t=>unlocked.includes(t.id));
    let chosen=shuffled(unseen).slice(0,count);
    if(chosen.length<count)chosen=chosen.concat(shuffled(seen).slice(0,count-chosen.length));
    if(chosen.length<count){console.error("Memory Match: not enough unique tips for this level.");return;}
    currentTips=chosen;
    deck=shuffled(chosen.flatMap((t,index)=>[{...t,uid:t.id+"-a",pairId:t.id,pairNo:index+1},{...t,uid:t.id+"-b",pairId:t.id,pairNo:index+1}]));
    open=[];matched=[];locked=false;window.ecoMemoryDeck=deck;ecoMemoryOpen=[];ecoMemoryMatched=[];window.ecoMemoryMoves=0;
    const area=document.getElementById("eco-game-play-area"),vi=language();if(!area)return;
    area.innerHTML='<div class="eco-playfield eco-memory-playfield space-y-3"><div class="flex flex-wrap items-center justify-between gap-2"><div class="eco-memory-status !m-0"><span id="memory-progress">0 / '+count+'</span><span id="memory-moves">0 '+(vi==="vi"?"lượt":"moves")+'</span></div><button type="button" class="eco-action" onclick="showMemoryHome()">⌂ '+(vi==="vi"?"Trang chủ":"Home")+'</button><button type="button" class="eco-action" onclick="toggleEcoMemoryVault()">📚 '+(vi==="vi"?"Kho mẹo":"Tip Library")+'</button></div><div id="eco-memory-vault" class="hidden rounded-xl border border-[#cdbb9f] bg-[#fffaf1] p-3"></div><div class="text-[10px] font-extrabold text-[#7a6452]">'+(vi==="vi"?"VÒNG ":"LEVEL ")+level+' / 30 · '+count+' '+(vi==="vi"?"CẶP":"PAIRS")+'</div><div id="eco-memory-grid" class="eco-memory-grid">'+deck.map((card,i)=>'<button type="button" class="eco-memory-card" data-card-index="'+i+'" aria-label="'+(vi==="vi"?"Lá bài úp":"Face-down card")+'" onclick="flipMemoryCard('+i+')"><span class="eco-memory-inner"><span class="eco-memory-face eco-card-back"><b>☘</b><small>ECO</small></span><span class="eco-memory-face eco-card-front"><b class="eco-memory-icon">'+card.icon+'</b><small class="memory-pair-number" style="display:inline-flex;align-items:center;justify-content:center;min-width:30px;height:22px;border-radius:7px;background:#f0d9a9;border:1px solid #9a7445;font-size:13px!important;font-weight:1000!important;color:#50351d!important;letter-spacing:1px;margin:4px auto 2px;padding:0 5px">#'+String(card.pairNo).padStart(2,"0")+'</small><small>'+(vi==="vi"?escapeHtml(card.categoryName.vi):escapeHtml(card.categoryName.en))+'</small></span></span></button>').join("")+'</div><div id="memory-feedback" class="eco-memory-feedback rounded-xl bg-[#f5efe4] p-3 text-center text-xs font-bold">'+(vi==="vi"?"Tìm các cặp biểu tượng giống nhau để khám phá mẹo tiết kiệm điện!":"Match identical icons to discover energy-saving tips!")+'</div><div id="memory-tip-reveal" class="rounded-xl border border-[#c7d8bd] bg-[#edf4e8] p-3 text-xs hidden"></div></div>';
  };
  window.renderMemoryGame=function(){window.showMemoryHome();};
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
      if(typeof ecoGameLearned!=="undefined")ecoGameLearned.push(vi?first.vi:first.en);
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
      const isMemory=typeof activeEcoGame!=="undefined"&&activeEcoGame==="memory";
      if(!isMemory){return originalFinish.apply(this,arguments);}
      originalFinish.apply(this,arguments);
      const area=document.getElementById("eco-game-play-area");if(!area)return;
      const done=readLevels();if(!done.includes(-activeLevel))done.push(-activeLevel);
      if(activeLevel<30&&!done.includes(activeLevel+1))done.push(activeLevel+1);
      saveLevels(done);
      const isLast=activeLevel===30,vi=language()==="vi";
      area.innerHTML='<div class="eco-playfield text-center space-y-4"><div class="text-5xl">🏆</div><h3 class="text-xl font-black">'+(vi?"Hoàn thành vòng "+activeLevel+"!":"Level "+activeLevel+" completed!")+'</h3><p class="text-sm">'+(vi?"Bạn đã ghép đúng tất cả các cặp.":"You matched every pair.")+'</p><p class="text-xs font-bold text-[#54794f]">+'+(vi?"XP đã nhận":"XP earned")+'</p><div class="rounded-xl bg-[#e8f1e3] p-3 text-sm font-bold">'+(isLast?(vi?"🎉 Bạn đã hoàn thành cả 30 vòng!":"🎉 You completed all 30 levels!"):(vi?"Mở khóa vòng "+(activeLevel+1):"Level "+(activeLevel+1)+" unlocked!"))+'</div>'+(isLast?'<button type="button" class="eco-action w-full" onclick="showMemoryHome()">'+(vi?"Trang chủ":"Home")+'</button>':'<button type="button" class="eco-action w-full" onclick="startMemoryLevel('+(activeLevel+1)+')">'+(vi?"➡️ Vòng tiếp theo":"➡️ Next level")+'</button>')+'<button type="button" class="eco-action w-full" onclick="showMemoryHome()">'+(vi?"Trang chủ":"Home")+'</button><button type="button" class="eco-action w-full" onclick="showMemoryTips()">📚 '+(vi?"Kho mẹo":"Tip Library")+'</button><div id="eco-memory-vault" class="hidden rounded-xl border border-[#cdbb9f] bg-[#fffaf1] p-3"></div></div>';
    };
  }
})();