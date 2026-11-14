// ECO GAME HUB: six short, replayable games with practical energy tips.
        const ecoGameContent = {
            runner:{en:{title:"Eco Runner",intro:"Choose the energy-smart route and collect all 5 green stars.",items:[
                ["You reach a bright room on a sunny afternoon. What do you do?","Turn on every light","Open the curtains and use daylight",1,"Daylight can replace electric lighting when a room is bright enough."],
                ["Your washing basket is full. Which cycle is usually more efficient?","Wash at 30°C when suitable","Always use 60°C",0,"Washing at 30°C can use much less energy than a hot cycle when clothes and detergent allow it."],
                ["It is 23:30 and your dishwasher is ready. Your tariff has a cheaper night rate. What is smart?","Run it during the cheaper night period","Run it at peak time",0,"Shift flexible high-energy tasks to your cheaper tariff window when practical."],
                ["You leave the living room. What should happen?","Leave everything on","Switch off lights and unused devices",1,"Switching off lights and unused devices avoids unnecessary electricity use."],
                ["You need one mug of tea. How much water should you boil?","Only the amount you need","Fill the kettle to the top",0,"Boiling only the water you need saves energy and time."]
            ]}},
            home:{en:{title:"Build My Eco Home",intro:"Choose the smarter upgrade for each room in your home.",items:[
                ["KITCHEN · Fridge","Keep the fridge door open while deciding","Keep the door closed and set the fridge around 3–5°C",1,"A sensible fridge temperature and a closed door help avoid wasted cooling."],
                ["LIVING ROOM · Lighting","Use daylight and switch off lights in empty rooms","Leave all lights on for convenience",0,"Use daylight where possible and switch off lights in unoccupied rooms."],
                ["LAUNDRY · Washing machine","Choose a suitable 30°C cycle","Use the hottest cycle for every load",0,"A lower-temperature wash is often enough for everyday laundry."],
                ["BEDROOM · Heating","Heat only the rooms you use and close doors","Heat every room with doors open",0,"Zoning heating and closing doors helps keep warmth where it is needed."]
            ]}},
            rush:{en:{title:"Energy Rush",intro:"The meter is racing! Make 5 quick decisions to keep the bill down.",items:[
                ["It is 18:00, during your peak tariff. Start the tumble dryer now?","Wait until a cheaper period if practical","Run it now anyway",0,"Avoiding flexible high-energy use during peak hours can lower your bill."],
                ["The TV is off but its standby light is glowing. Best move?","Leave it forever","Switch it off at the socket or power strip when appropriate",1,"Standby devices can still draw electricity; switch off safely when not in use."],
                ["You are boiling pasta. What saves heat?","Use a lid on the pot","Leave the pot uncovered",0,"A lid keeps heat in and can reduce cooking time and energy."],
                ["The extractor hood filter is clogged with grease. What now?","Clean it as instructed","Ignore it",0,"Clean filters help appliances move air efficiently; follow the manufacturer's safety guidance."],
                ["You are leaving a room for the day. What do you do?","Leave lights and electronics on","Turn off what is not needed",1,"A quick switch-off routine prevents electricity being used for no benefit."]
            ]}},
            garden:{en:{title:"Eco Garden",intro:"Help your garden thrive with five low-energy choices.",items:[
                ["The garden path is sunny. Which light is a good option?","Solar garden light","A mains light left on all day",0,"Solar lights can use daylight they collect during the day instead of drawing power from the home."],
                ["You want to water plants. What is a sensible habit?","Water at cooler times to reduce evaporation","Water at the hottest time every day",0,"Watering in cooler parts of the day can reduce evaporation and wasted water."],
                ["The shed has a small window. What should you do on a bright day?","Use natural daylight","Turn on several lamps",0,"Natural daylight is free and can replace electric lighting."],
                ["Your outdoor appliances are not being used. What matters?","Leave them running","Switch them off and store them safely",1,"Switch off unused equipment and follow its outdoor safety instructions."],
                ["You are choosing a garden appliance. What should you compare?","Energy use and whether you really need it","Only its colour",0,"Checking energy labels and choosing an appropriately sized appliance helps avoid unnecessary use."]
            ]}},
            escape:{en:{title:"Escape Room · The Dark Room",intro:"First-person mystery. Search the room, discover the clues, unlock the switch and escape.",items:[]}},
            memory:{en:{title:"Memory Match",intro:"Flip the cards and match each energy-saving habit with its benefit.",items:[]}}
        };
        let activeEcoGame = null, ecoGameStep = 0, ecoGameScore = 0, ecoMemoryOpen = [], ecoMemoryMatched = [], ecoGameLearned = [];
        let escapeFound = [], escapeCodeOpen = false, escapeSwitchReady = false;
        function gameLang(){return localStorage.getItem("eco_buddy_language")==="vi"?"vi":"en";}
        function gameText(en,vi){return gameLang()==="vi"?vi:en;}
        function renderGameHub(){
            const vi=gameLang(), title=document.getElementById("game-hub-title"), sub=document.getElementById("game-hub-subtitle");
            if(title)title.textContent=vi?"🎮 Khu trò chơi xanh":"🎮 Eco Game Hub";
            if(sub)sub.textContent=vi?"Chọn một trò, hoàn thành một bàn và học cách tiết kiệm điện qua trải nghiệm.":"Choose a game, play a board, and learn practical ways to save electricity.";
            const labels=vi?[
                ["🏃","Eco Runner","Chạy, né lãng phí và nhặt sao năng lượng"],
                ["🏡","Xây nhà xanh","Nâng cấp từng phòng để tiết kiệm điện"],
                ["⚡","Thử thách năng lượng","Ra quyết định thông minh trước khi hết giờ"],
                ["🌱","Khu vườn xanh","Nuôi khu vườn bằng thói quen tiết kiệm"],
                ["🔐","Phòng thoát hiểm","Khám phá góc nhìn thứ nhất, tìm manh mối và trốn thoát"],
                ['<svg class="memory-hub-logo" viewBox="0 0 140 112" role="img" aria-label="Memory Match"><defs><linearGradient id="mmPink" x2="0" y2="1"><stop stop-color="#ff9fca"/><stop offset="1" stop-color="#f04d91"/></linearGradient><linearGradient id="mmBlue" x2="0" y2="1"><stop stop-color="#8cecff"/><stop offset="1" stop-color="#389ee9"/></linearGradient><linearGradient id="mmGold" x2="0" y2="1"><stop stop-color="#fff18a"/><stop offset="1" stop-color="#ffad32"/></linearGradient><linearGradient id="mmPurple" x2="0" y2="1"><stop stop-color="#c7a4ff"/><stop offset="1" stop-color="#8052e8"/></linearGradient></defs><path d="M18 29Q18 15 32 13L78 7Q92 6 95 20L103 76Q105 90 90 93L43 101Q28 103 25 88Z" fill="url(#mmBlue)" stroke="#fff" stroke-width="5"/><path d="M18 29Q18 15 32 13L78 7Q92 6 95 20L103 76Q105 90 90 93L43 101Q28 103 25 88Z" fill="none" stroke="#287dbd" stroke-width="2"/><path d="M52 21Q52 8 66 8L111 14Q126 16 124 31L115 84Q112 98 98 95L55 88Q41 85 43 71Z" fill="url(#mmPink)" stroke="#fff" stroke-width="5"/><path d="M52 21Q52 8 66 8L111 14Q126 16 124 31L115 84Q112 98 98 95L55 88Q41 85 43 71Z" fill="none" stroke="#c93677" stroke-width="2"/><path d="M69 37Q69 25 82 25L104 28Q114 30 112 42L106 72Q104 82 93 80L72 76Q62 74 64 63Z" fill="url(#mmGold)" stroke="#fff" stroke-width="3"/><text x="87" y="66" text-anchor="middle" font-family="Trebuchet MS,Arial Rounded MT Bold,sans-serif" font-size="31" font-weight="1000" fill="url(#mmPurple)" stroke="#fff" stroke-width="3" paint-order="stroke" transform="rotate(7 87 55)">M</text><path d="M22 13L27 2L32 13L43 18L32 23L27 34L22 23L11 18Z" fill="#ffe65b" stroke="#fff" stroke-width="2"/><path d="M119 5L123 0L127 8L136 11L128 16L125 25L120 17L111 15Z" fill="#9ce96e" stroke="#fff" stroke-width="2"/><circle cx="18" cy="83" r="7" fill="#ffb64c" stroke="#fff" stroke-width="3"/><path d="M16 57Q24 47 32 57Q40 47 48 57Q48 70 32 78Q16 70 16 57Z" fill="#a5e76d" stroke="#fff" stroke-width="2"/></svg>',"Lật thẻ ghi nhớ","Lật thẻ và ghép các cặp mẹo tiết kiệm điện"]
            ]:[["🏃","Eco Runner","Run, dodge waste and collect energy stars"],["🏡","Build My Eco Home","Make each room more energy-efficient"],["⚡","Energy Rush","Make smart energy decisions before time runs out"],["🌱","Eco Garden","Grow a garden with clever energy habits"],["🔐","Escape Room","Explore in first person, find clues and escape"],['<svg class="memory-hub-logo" viewBox="0 0 140 112" role="img" aria-label="Memory Match"><defs><linearGradient id="mmPink" x2="0" y2="1"><stop stop-color="#ff9fca"/><stop offset="1" stop-color="#f04d91"/></linearGradient><linearGradient id="mmBlue" x2="0" y2="1"><stop stop-color="#8cecff"/><stop offset="1" stop-color="#389ee9"/></linearGradient><linearGradient id="mmGold" x2="0" y2="1"><stop stop-color="#fff18a"/><stop offset="1" stop-color="#ffad32"/></linearGradient><linearGradient id="mmPurple" x2="0" y2="1"><stop stop-color="#c7a4ff"/><stop offset="1" stop-color="#8052e8"/></linearGradient></defs><path d="M18 29Q18 15 32 13L78 7Q92 6 95 20L103 76Q105 90 90 93L43 101Q28 103 25 88Z" fill="url(#mmBlue)" stroke="#fff" stroke-width="5"/><path d="M18 29Q18 15 32 13L78 7Q92 6 95 20L103 76Q105 90 90 93L43 101Q28 103 25 88Z" fill="none" stroke="#287dbd" stroke-width="2"/><path d="M52 21Q52 8 66 8L111 14Q126 16 124 31L115 84Q112 98 98 95L55 88Q41 85 43 71Z" fill="url(#mmPink)" stroke="#fff" stroke-width="5"/><path d="M52 21Q52 8 66 8L111 14Q126 16 124 31L115 84Q112 98 98 95L55 88Q41 85 43 71Z" fill="none" stroke="#c93677" stroke-width="2"/><path d="M69 37Q69 25 82 25L104 28Q114 30 112 42L106 72Q104 82 93 80L72 76Q62 74 64 63Z" fill="url(#mmGold)" stroke="#fff" stroke-width="3"/><text x="87" y="66" text-anchor="middle" font-family="Trebuchet MS,Arial Rounded MT Bold,sans-serif" font-size="31" font-weight="1000" fill="url(#mmPurple)" stroke="#fff" stroke-width="3" paint-order="stroke" transform="rotate(7 87 55)">M</text><path d="M22 13L27 2L32 13L43 18L32 23L27 34L22 23L11 18Z" fill="#ffe65b" stroke="#fff" stroke-width="2"/><path d="M119 5L123 0L127 8L136 11L128 16L125 25L120 17L111 15Z" fill="#9ce96e" stroke="#fff" stroke-width="2"/><circle cx="18" cy="83" r="7" fill="#ffb64c" stroke="#fff" stroke-width="3"/><path d="M16 57Q24 47 32 57Q40 47 48 57Q48 70 32 78Q16 70 16 57Z" fill="#a5e76d" stroke="#fff" stroke-width="2"/></svg>',"Memory Match","Flip cards and match energy-saving pairs"]];
            document.querySelectorAll(".eco-game-card").forEach((el,i)=>{if(labels[i]){el.innerHTML='<span class="eco-game-emoji">'+labels[i][0]+'</span><strong>'+labels[i][1]+'</strong><small>'+labels[i][2]+'</small>';}});
            const back=document.getElementById("eco-game-back");if(back)back.textContent=vi?"← Trở lại":"← Back";
        }
        function openEcoGame(id){
            activeEcoGame=id;document.body.classList.toggle("memory-game-playing",id==="memory");ecoGameStep=0;ecoGameScore=0;ecoGameLearned=[];escapeFound=[];escapeCodeOpen=false;escapeSwitchReady=false;ecoMemoryOpen=[];ecoMemoryMatched=[];
            const stage=document.getElementById("eco-game-stage"),hub=document.getElementById("eco-game-hub-panel");
            document.getElementById("eco-game-grid").classList.add("hidden");stage.classList.remove("hidden");
            document.getElementById("eco-game-tip").classList.add("hidden");hub.classList.add("hidden");
            /* Detach the game from tab/main wrappers so mobile browsers cannot clip or hide it. */
            if(stage.parentElement!==document.body){document.body.appendChild(stage);}
            stage.classList.add("eco-game-fullscreen");document.body.classList.add("eco-game-playing");
            if(id==="runner")startEcoRunner();else if(id==="home")renderEcoHome();else if(id==="rush")startEnergyRush();else if(id==="garden")renderEcoGarden();else if(id==="escape")renderEscapeRoom();else if(id==="memory")renderMemoryGame();
        }
        function closeEcoGame(){
            activeEcoGame=null;document.body.classList.remove("memory-game-playing");if(window.ecoRunnerTimer)clearInterval(window.ecoRunnerTimer);if(window.energyRushTimer)clearInterval(window.energyRushTimer);
            const stage=document.getElementById("eco-game-stage"),hub=document.getElementById("eco-game-hub-panel");
            document.body.classList.remove("eco-game-playing");stage.classList.remove("eco-game-fullscreen");stage.classList.add("hidden");
            /* Restore the stage immediately after the hub panel in its original tab. */
            if(hub&&hub.parentNode)hub.parentNode.insertBefore(stage,hub.nextSibling);
            hub.classList.remove("hidden");document.getElementById("eco-game-grid").classList.remove("hidden");
            document.getElementById("eco-game-tip").classList.add("hidden");renderGameHub();
        }

        let ecoRunnerPos=1,ecoRunnerStep=0,ecoRunnerHits=0,ecoHomeDone=[],ecoGardenPlants=[],energyRushDone=[];
        function startEcoRunner(){
            ecoRunnerPos=1;ecoRunnerStep=0;ecoRunnerHits=0;
            const vi=gameLang(),area=document.getElementById("eco-game-play-area");
            area.innerHTML='<div class="eco-playfield space-y-3"><div class="flex justify-between text-xs font-black"><span>🏃 ECO RUNNER</span><span id="runner-score">⭐ 0 / 8</span></div><p class="text-xs">'+(vi?"Chạy qua 8 đoạn đường. Đổi làn để né rác điện và nhặt lá năng lượng!":"Run through 8 lanes. Switch lanes to dodge energy waste and collect green leaves!")+'</p><div id="runner-lanes" class="grid grid-cols-3 gap-2"><div class="eco-lane">🌿</div><div class="eco-lane">🏃</div><div class="eco-lane">⚡</div></div><div class="flex justify-center gap-3"><button class="eco-action" onclick="moveEcoRunner(-1)">←</button><button class="eco-action" onclick="moveEcoRunner(1)">→</button></div><p id="runner-feedback" class="text-center text-xs font-bold text-[#54794f]">'+(vi?"Dùng nút trái/phải để di chuyển.":"Use left/right to move.")+'</p></div>';
            drawEcoRunner();
        }
        function drawEcoRunner(){
            const lanes=document.getElementById("runner-lanes");if(!lanes)return;
            const hazards=["🧺","💡","🔌","🚿","🧊","📺","🌀","🧯"];
            const safe=["🌱","⭐","🍃","🌞","🌿","💚","🌻","🌳"];
            const target=ecoRunnerStep%3,items=[0,1,2].map((_,i)=>i===target?hazards[ecoRunnerStep%hazards.length]:safe[(ecoRunnerStep+i)%safe.length]);
            items[ecoRunnerPos]="🏃";
            lanes.innerHTML=items.map((v,i)=>'<div class="eco-lane" style="'+(i===ecoRunnerPos?'background:#e4ecd9;border:2px solid #54794f;':'')+'">'+v+'</div>').join("");
        }
        function moveEcoRunner(dir){
            if(activeEcoGame!=="runner")return;
            ecoRunnerPos=Math.max(0,Math.min(2,ecoRunnerPos+dir));ecoRunnerStep++;
            const hazardLane=(ecoRunnerStep-1)%3;
            if(ecoRunnerPos===hazardLane)ecoRunnerHits++;else ecoGameScore++;
            const score=document.getElementById("runner-score");if(score)score.textContent="⭐ "+ecoGameScore+" / 8";
            const fb=document.getElementById("runner-feedback");if(fb)fb.textContent=ecoRunnerPos===hazardLane?(gameLang()==="vi"?"Ôi! Bạn va vào thiết bị đang lãng phí điện.":"Oops! You hit an energy-wasting obstacle."):(gameLang()==="vi"?"Tốt! Bạn đã thu thập năng lượng xanh.":"Nice! You collected green energy.");
            drawEcoRunner();
            if(ecoRunnerStep>=8){ecoGameLearned.push(gameLang()==="vi"?"Tắt thiết bị khi không sử dụng và tránh lãng phí điện ở nhà.":"Switch off devices when not in use and avoid wasting electricity at home.");setTimeout(finishEcoGame,350);}
        }
        function renderEcoHome(){
            const vi=gameLang(),rooms=[["kitchen","🍳",vi?"Nhà bếp":"Kitchen",vi?"Tủ lạnh tiết kiệm điện":"Efficient fridge"],["living","💡",vi?"Phòng khách":"Living room",vi?"Đèn LED":"LED lighting"],["laundry","🧺",vi?"Phòng giặt":"Laundry",vi?"Giặt nhiệt độ thấp":"Cool wash"],["bedroom","🌡️",vi?"Phòng ngủ":"Bedroom",vi?"Sưởi theo vùng":"Zoned heating"]];
            ecoHomeDone=[];
            document.getElementById("eco-game-play-area").innerHTML='<div class="eco-playfield space-y-3"><div class="flex justify-between text-xs font-black"><span>🏡 BUILD MY ECO HOME</span><span id="home-progress">0 / 4</span></div><p class="text-xs">'+(vi?"Chạm vào từng phòng để lắp một nâng cấp tiết kiệm năng lượng.":"Tap each room to install an energy-saving upgrade.")+'</p><div class="space-y-2">'+rooms.map(r=>'<button id="home-'+r[0]+'" class="eco-home-room w-full text-left" onclick="upgradeEcoRoom(\''+r[0]+'\')"><span class="text-3xl">'+r[1]+'</span><span class="flex-1"><b class="block text-xs">'+r[2]+'</b><small class="text-[10px] text-[#7a6452]">'+r[3]+'</small></span><span class="text-xl">＋</span></button>').join("")+'</div><div class="rounded-xl bg-[#dce9d1] p-3 text-center"><span class="text-3xl">🏠</span><p id="home-status" class="text-xs font-bold">'+(vi?"Ngôi nhà đang chờ được nâng cấp!":"Your home is waiting for upgrades!")+'</p></div></div>';
        }
        function upgradeEcoRoom(id){
            if(ecoHomeDone.includes(id))return;ecoHomeDone.push(id);ecoGameScore++;
            const b=document.getElementById("home-"+id);b.style.background="#dce9d1";b.querySelector("span:last-child").textContent="✓";
            document.getElementById("home-progress").textContent=ecoHomeDone.length+" / 4";
            document.getElementById("home-status").textContent=gameLang()==="vi"?"Nâng cấp thành công! Ngôi nhà ngày càng xanh.":"Upgrade installed! Your home is getting greener.";
            const tips={kitchen:["Giữ cửa tủ lạnh đóng kín và đặt nhiệt độ hợp lý.","Keep the fridge door closed and set a sensible temperature."],living:["Dùng ánh sáng tự nhiên và tắt đèn khi rời phòng.","Use daylight and switch lights off when leaving."],laundry:["Chọn chu trình giặt mát phù hợp để giảm điện.","Choose a suitable cool wash to reduce electricity."],bedroom:["Chỉ sưởi những phòng đang sử dụng.","Heat only the rooms you are using."]};
            ecoGameLearned.push(tips[id][gameLang()==="vi"?0:1]);
            if(ecoHomeDone.length===4)setTimeout(finishEcoGame,400);
        }
        function startEnergyRush(){
            const vi=gameLang();energyRushDone=[];let seconds=25;
            const devices=[["📺","TV standby"],["🎮","Game console"],["💻","Laptop charger"],["💡","Empty-room light"],["🔊","Speaker"],["🖨️","Printer standby"],["🧺","Washer"],["🍞","Toaster"]];
            window.energyRushItems=devices;
            document.getElementById("eco-game-play-area").innerHTML='<div class="eco-playfield space-y-3"><div class="flex justify-between text-xs font-black"><span>⚡ ENERGY RUSH</span><span id="rush-clock">25s</span></div><p class="text-xs">'+(vi?"Chạm vào 6 thiết bị đang tiêu thụ điện không cần thiết để tắt chúng trước khi hết giờ!":"Tap the 6 devices wasting electricity unnecessarily before time runs out!")+'</p><div id="rush-devices" class="grid grid-cols-2 gap-2">'+devices.map((d,i)=>'<button id="rush-'+i+'" class="eco-home-room flex-col text-center" onclick="switchOffRushDevice('+i+')"><span class="text-3xl">'+d[0]+'</span><b class="text-[10px]">'+d[1]+'</b><small class="text-[9px] text-red-700">● ON</small></button>').join("")+'</div><p id="rush-status" class="text-center text-xs font-bold"></p></div>';
            window.energyRushTimer=setInterval(()=>{seconds--;const c=document.getElementById("rush-clock");if(c)c.textContent=seconds+"s";if(seconds<=0){clearInterval(window.energyRushTimer);finishEcoGame();}},1000);
        }
        function switchOffRushDevice(i){
            if(energyRushDone.includes(i)||activeEcoGame!=="rush")return;energyRushDone.push(i);ecoGameScore++;
            const b=document.getElementById("rush-"+i);b.style.background="#dce9d1";b.querySelector("small").textContent="✓ OFF";b.querySelector("small").style.color="#416b3e";
            document.getElementById("rush-status").textContent=energyRushDone.length+" / 6 "+(gameLang()==="vi"?"đã tắt":"switched off");
            if(energyRushDone.length===6){clearInterval(window.energyRushTimer);ecoGameLearned.push(gameLang()==="vi"?"Tắt các thiết bị ở chế độ chờ khi không cần thiết, nếu an toàn và phù hợp.":"Switch off standby devices when unnecessary, where safe and appropriate.");setTimeout(finishEcoGame,350);}
        }
        function renderEcoGarden(){
            const vi=gameLang();ecoGardenPlants=[];
            document.getElementById("eco-game-play-area").innerHTML='<div class="eco-playfield space-y-3"><div class="flex justify-between text-xs font-black"><span>🌱 ECO GARDEN</span><span id="garden-progress">0 / 6</span></div><p class="text-xs">'+(vi?"Chạm 6 ô đất để trồng cây. Dùng ánh sáng mặt trời và nước mưa, không cần thiết bị điện!":"Tap 6 soil plots to grow plants. Use sunlight and rainwater instead of powered equipment!")+'</p><div id="garden-grid" class="grid grid-cols-3 gap-3">'+Array.from({length:6},(_,i)=>'<button class="eco-garden-tile" onclick="plantEcoGarden('+i+')">🟫</button>').join("")+'</div><p id="garden-status" class="text-center text-xs font-bold">'+(vi?"Khu vườn còn trống.":"Your garden is waiting to grow.")+'</p></div>';
        }
        function plantEcoGarden(i){
            if(ecoGardenPlants.includes(i))return;ecoGardenPlants.push(i);ecoGameScore++;
            const b=document.querySelectorAll(".eco-garden-tile")[i];b.classList.add("planted");b.textContent=["🌻","🌿","🌱","🌼","🍀","🌳"][i];
            document.getElementById("garden-progress").textContent=ecoGardenPlants.length+" / 6";
            document.getElementById("garden-status").textContent=gameLang()==="vi"?"Cây đã lớn nhờ ánh nắng tự nhiên!":"A plant grew using natural sunlight!";
            if(ecoGardenPlants.length===6){ecoGameLearned.push(gameLang()==="vi"?"Tận dụng ánh sáng tự nhiên và các giải pháp không dùng điện khi có thể.":"Use natural daylight and non-electric solutions where practical.");setTimeout(finishEcoGame,350);}
        }

                function renderQuestionGame(){
            const vi=gameLang(),cfg=ecoGameContent[activeEcoGame].en,area=document.getElementById("eco-game-play-area");
            if(ecoGameStep>=cfg.items.length){finishEcoGame();return;}
            const q=cfg.items[ecoGameStep],question=vi?translateGameQuestion(activeEcoGame,ecoGameStep):q[0],opts=vi?translateGameOptions(activeEcoGame,ecoGameStep):[q[1],q[2]];
            area.innerHTML='<div class="flex justify-between text-[11px] font-extrabold text-[#7a6452]"><span>'+gameText("BOARD","BÀN")+' '+(ecoGameStep+1)+' / '+cfg.items.length+'</span><span>⭐ '+ecoGameScore+'</span></div><div class="h-2 rounded-full bg-[#f0e6d6] overflow-hidden"><div class="h-full bg-[#A8C7A0]" style="width:'+((ecoGameStep/cfg.items.length)*100)+'%"></div></div><div class="vint-card p-4 space-y-3"><p class="text-[10px] font-black uppercase tracking-wide text-[#8c7355]">'+(activeEcoGame==="home"?"🏠 ROOM":activeEcoGame==="garden"?"🌿 GARDEN":activeEcoGame==="rush"?"⏱️ QUICK DECISION":"🏃 RUN")+'</p><h4 class="font-extrabold text-sm text-[#4a3b32]">'+question+'</h4><div class="space-y-2">'+opts.map((o,i)=>'<button class="eco-game-option" onclick="answerEcoGame('+i+')">'+(i===0?"A":"B")+' · '+o+'</button>').join("")+'</div></div>';
            document.getElementById("eco-game-tip").classList.add("hidden");
        }
        function translateGameQuestion(id,i){
            const vi={
             runner:["Bạn bước vào căn phòng sáng nắng buổi chiều. Bạn làm gì?","Giỏ đồ giặt đã đầy. Chế độ nào thường tiết kiệm hơn?","Đã 23:30 và máy rửa bát đã sẵn sàng. Bạn chọn gì?","Bạn rời khỏi phòng khách. Bạn nên làm gì?","Bạn chỉ cần một cốc trà. Nên đun bao nhiêu nước?"],
             home:["BẾP · Tủ lạnh","PHÒNG KHÁCH · Chiếu sáng","GIẶT GIŨ · Máy giặt","PHÒNG NGỦ · Sưởi ấm"],
             rush:["Đang 18:00, giờ điện cao điểm. Có nên bật máy sấy ngay?","TV đã tắt nhưng đèn chờ vẫn sáng. Cách tốt nhất?","Bạn đang luộc mì. Cách nào giữ nhiệt tốt hơn?","Lưới lọc máy hút mùi bị bám dầu. Bạn làm gì?","Bạn rời phòng cả ngày. Nên làm gì?"],
             garden:["Lối đi trong vườn có nắng. Loại đèn nào phù hợp?","Bạn muốn tưới cây. Thói quen nào hợp lý?","Nhà kho có cửa sổ nhỏ. Ngày nắng nên làm gì?","Thiết bị ngoài trời không dùng đến. Cần làm gì?","Khi chọn thiết bị làm vườn, bạn nên so sánh điều gì?"]
            };return (vi[id]||[])[i]||ecoGameContent[id].en.items[i][0];
        }
        function translateGameOptions(id,i){
            const vi={
             runner:[["Bật tất cả đèn","Mở rèm và tận dụng ánh sáng tự nhiên"],["Giặt ở 30°C nếu phù hợp","Luôn dùng 60°C"],["Chạy vào khung giờ điện đêm rẻ hơn","Chạy ngay giờ cao điểm"],["Để mọi thứ bật","Tắt đèn và thiết bị không dùng"],["Chỉ đun lượng nước cần dùng","Đổ đầy ấm"],],
             home:[["Để cửa tủ lạnh mở khi suy nghĩ","Đóng cửa và đặt tủ lạnh khoảng 3–5°C"],["Tận dụng ánh sáng tự nhiên và tắt đèn phòng trống","Để mọi đèn sáng cho tiện"],["Chọn chu trình 30°C phù hợp","Dùng nhiệt độ cao nhất cho mọi mẻ"],["Chỉ sưởi phòng đang dùng và đóng cửa","Sưởi mọi phòng, mở cửa"],],
             rush:[["Đợi đến khung giờ rẻ hơn nếu có thể","Bật ngay"],["Kệ đó luôn","Tắt ở ổ điện hoặc ổ chia có công tắc khi phù hợp"],["Đậy nắp nồi","Không đậy nắp"],["Vệ sinh theo hướng dẫn","Bỏ qua"],["Để đèn và thiết bị bật","Tắt những thứ không cần"],],
             garden:[["Đèn sân vườn năng lượng mặt trời","Đèn điện bật cả ngày"],["Tưới lúc trời mát để giảm bay hơi","Tưới lúc nóng nhất mỗi ngày"],["Tận dụng ánh sáng tự nhiên","Bật nhiều đèn"],["Để thiết bị chạy","Tắt và cất giữ an toàn"],["Mức tiêu thụ điện và nhu cầu thực tế","Chỉ chọn theo màu sắc"]]
            };return vi[id][i];
        }
        function answerEcoGame(choice){
            const q=ecoGameContent[activeEcoGame].en.items[ecoGameStep],correct=q[3]===choice,vi=gameLang();
            if(correct)ecoGameScore++;
            ecoGameLearned.push(vi?translateGameTip(activeEcoGame,ecoGameStep):q[4]);
            const tip=document.getElementById("eco-game-tip");tip.classList.remove("hidden");
            document.getElementById("eco-game-tip-heading").textContent=correct?(vi?"✅ Chính xác! Mẹo tiết kiệm:":"✅ Correct! Energy-saving tip:"):(vi?"💡 Ghi nhớ mẹo này:":"💡 Remember this tip:");
            document.getElementById("eco-game-tip-text").textContent=vi?translateGameTip(activeEcoGame,ecoGameStep):q[4];
            const area=document.getElementById("eco-game-play-area");
            area.querySelectorAll("button").forEach(b=>b.disabled=true);
            const next=document.createElement("button");next.className="w-full px-4 py-3 rounded-xl bg-[#A8C7A0] text-[#263a2a] border border-[#5c4738] font-extrabold text-xs";next.textContent=ecoGameStep===ecoGameContent[activeEcoGame].en.items.length-1?(vi?"Xem kết quả":"See results"):(vi?"Tiếp tục →":"Next →");next.onclick=()=>{ecoGameStep++;renderQuestionGame();};area.appendChild(next);
        }
        function translateGameTip(id,i){
            const tips={
             runner:["Tận dụng ánh sáng ban ngày khi phòng đủ sáng.","Giặt ở nhiệt độ thấp hơn thường tiết kiệm điện nếu phù hợp với quần áo và chất giặt.","Chuyển các việc dùng nhiều điện linh hoạt sang khung giờ giá rẻ hơn.","Tắt đèn và thiết bị không cần thiết khi rời phòng.","Chỉ đun lượng nước bạn thực sự cần."],
             home:["Nhiệt độ tủ lạnh hợp lý và đóng cửa giúp tránh thất thoát hơi lạnh.","Tận dụng ánh sáng tự nhiên và tắt đèn ở phòng không có người.","Giặt ở nhiệt độ thấp thường đủ cho quần áo hằng ngày.","Chia vùng sưởi và đóng cửa giúp giữ ấm nơi bạn cần."],
             rush:["Tránh dùng thiết bị tiêu thụ nhiều điện vào giờ cao điểm nếu có thể.","Thiết bị ở chế độ chờ vẫn có thể tiêu thụ điện; hãy tắt an toàn khi không dùng.","Đậy nắp giúp giữ nhiệt và có thể rút ngắn thời gian nấu.","Vệ sinh bộ lọc theo hướng dẫn giúp thiết bị lưu thông khí hiệu quả.","Tắt thiết bị không cần thiết để tránh tiêu thụ điện vô ích."],
             garden:["Đèn năng lượng mặt trời có thể tận dụng ánh nắng ban ngày.","Tưới vào thời điểm mát giúp giảm bay hơi và lãng phí nước.","Ánh sáng tự nhiên có thể thay thế đèn điện.","Tắt thiết bị không dùng và tuân thủ hướng dẫn an toàn ngoài trời.","Kiểm tra nhãn năng lượng và chọn thiết bị đúng nhu cầu."]
            };return (tips[id]||[])[i]||"";
        }
        function finishEcoGame(){
 const vi=gameLang(),id=activeEcoGame,already=localStorage.getItem("eco_game_reward_"+id+"_"+new Date().toDateString())==="1";
 let reward=already?0:10;
 if(reward){currentXP+=10;currentPoints+=10;saveUserData();updateMascotLevel();localStorage.setItem("eco_game_reward_"+id+"_"+new Date().toDateString(),"1");}
 const learned=ecoGameLearned.map(t=>"<li>"+t+"</li>").join("");
 document.getElementById("eco-game-play-area").innerHTML='<div class="text-center eco-playfield space-y-3"><div class="text-5xl">🏆</div><h4 class="font-black text-base">'+(vi?"Hoàn thành!":"Completed!")+'</h4><p class="text-sm font-bold">'+(vi?"Điểm của bạn: ":"Your score: ")+ecoGameScore+'</p><div class="text-left rounded-xl bg-[#e5efdc] p-3"><p class="text-xs font-black mb-2">'+(vi?"💡 Mẹo tiết kiệm điện":"💡 Energy-saving tips")+'</p><ul class="list-disc pl-4 space-y-1 text-[11px]">'+learned+'</ul></div><p class="text-xs font-bold">'+(reward?(vi?"+10 XP · +10 điểm":"+10 XP · +10 points"):(vi?"Đã nhận thưởng hôm nay":"Today's reward already claimed"))+'</p></div>';
 document.getElementById("eco-game-tip").classList.add("hidden");
}
        function renderEscapeRoom(){
         const vi=gameLang(),area=document.getElementById("eco-game-play-area");
         area.innerHTML='<div class="eco-game-scene"><div><p class="text-[10px] uppercase tracking-widest text-[#d8c7b0]">'+(vi?"CĂN PHÒNG TỐI · GÓC NHÌN THỨ NHẤT":"DARK ROOM · FIRST-PERSON VIEW")+'</p><p class="text-3xl mt-3">🌑 🪟</p><h4 class="font-black text-base mt-2">'+(vi?"Bạn tỉnh dậy trong một căn phòng mất điện. Cửa đang khóa.":"You wake in a powerless room. The door is locked.")+'</h4><p class="text-xs mt-2 text-[#e5d8c7]">'+(vi?"Chạm vào các vật thể để quan sát và tìm manh mối.":"Tap objects to inspect them and find clues.")+'</p></div><div class="grid grid-cols-2 gap-2"><button onclick="searchEscapeObject(\'desk\')">🗄️ '+(vi?"Bàn":"Desk")+'</button><button onclick="searchEscapeObject(\'clock\')">🕰️ '+(vi?"Đồng hồ":"Clock")+'</button><button onclick="searchEscapeObject(\'drawer\')">🧰 '+(vi?"Ngăn kéo":"Drawer")+'</button><button onclick="searchEscapeObject(\'door\')">🚪 '+(vi?"Cửa":"Door")+'</button></div></div><div id="escape-result" class="vint-card p-3 text-xs font-bold">'+(vi?"Vật phẩm tìm được: chưa có":"Items found: none")+'</div><div id="escape-puzzle" class="space-y-2"></div>';
        }
        function searchEscapeObject(obj){
         const vi=gameLang(),result=document.getElementById("escape-result"),puzzle=document.getElementById("escape-puzzle");
         const clues={desk:vi?"Dưới bàn có mảnh giấy ghi chữ số 3.":"Under the desk is a note showing the digit 3.",clock:vi?"Đồng hồ dừng ở số 2. Ghi nhớ chữ số đầu tiên: 2.":"The clock stopped at 2. Remember the first digit: 2.",drawer:vi?"Trong ngăn kéo có sơ đồ công tắc và chữ số 4.":"Inside the drawer is a switch diagram and the digit 4.",door:vi?"Bàn phím cửa yêu cầu mã 3 chữ số. Hãy tìm manh mối trước.":"The door keypad needs a 3-digit code. Find the clues first."};
         if(!escapeFound.includes(obj))escapeFound.push(obj);
         result.textContent=clues[obj]+" · "+(vi?"Đã khám phá: ":"Explored: ")+escapeFound.length+"/4";
         if(escapeFound.includes("clock")&&escapeFound.includes("drawer")&&escapeFound.includes("desk")){
          puzzle.innerHTML='<div class="vint-card p-3 space-y-2"><p class="font-extrabold">'+(vi?"Ghép các chữ số theo thứ tự đồng hồ → giấy → sơ đồ. Nhập 234 để mở hộp công tắc.":"Combine the digits in order: clock → note → diagram. Enter 234 to unlock the switch kit.")+'</p><div class="flex gap-2"><input id="escape-code" inputmode="numeric" maxlength="3" placeholder="•••" class="min-w-0 flex-1 rounded-xl border border-[#8c7355] p-2 text-center font-black tracking-widest"><button onclick="submitEscapeCode()" class="rounded-xl bg-[#A8C7A0] border border-[#5c4738] px-4 py-2 font-extrabold">'+(vi?"Mở khóa":"Unlock")+'</button></div></div>';
         }
        }
        function submitEscapeCode(){
         const vi=gameLang(),val=document.getElementById("escape-code")?.value,puzzle=document.getElementById("escape-puzzle");
         if(val!=="234"){puzzle.insertAdjacentHTML("beforeend",'<p class="text-xs font-bold text-red-700">'+(vi?"Mã chưa đúng. Kiểm tra lại manh mối nhé.":"Not quite. Recheck the clues.")+'</p>');return;}
         escapeCodeOpen=true;puzzle.innerHTML='<div class="vint-card p-3 space-y-2"><p class="font-extrabold">'+(vi?"Hộp mở ra! Hãy ghép mặt công tắc với đế công tắc mô phỏng.":"The case opens! Fit the switch faceplate to the simulated switch base.")+'</p><button onclick="assembleEscapeSwitch()" class="w-full rounded-xl bg-[#A8C7A0] border border-[#5c4738] px-3 py-3 font-extrabold">'+(vi?"Lắp công tắc":"Assemble switch")+'</button></div>';
        }
        function assembleEscapeSwitch(){
         const vi=gameLang();escapeSwitchReady=true;ecoGameLearned.push(vi?"Tắt đèn khi rời phòng và tận dụng ánh sáng tự nhiên.":"Switch lights off when leaving and use natural daylight where possible.");
         document.getElementById("eco-game-play-area").innerHTML='<div class="eco-game-scene text-center"><p class="text-4xl">🔘</p><p class="font-black">'+(vi?"Công tắc mô phỏng đã được lắp!":"Simulated switch assembled!")+'</p><button onclick="turnOnEscapeLight()">'+(vi?"BẬT ĐÈN":"TURN ON LIGHT")+'</button></div>';
        }
        function turnOnEscapeLight(){
         const vi=gameLang();document.getElementById("eco-game-play-area").innerHTML='<div class="rounded-2xl border-2 border-[#5c4738] p-5 text-center space-y-3" style="background:linear-gradient(145deg,#fff4c9,#f4e2a4);color:#4a3b32"><div class="text-6xl">💡</div><h4 class="font-black">'+(vi?"Đèn đã sáng! Cửa được mở khóa.":"The light is on! The door unlocks.")+'</h4><p class="text-xs">'+(vi?"Bài học: tắt đèn khi rời phòng và tận dụng ánh sáng tự nhiên.":"Lesson: switch lights off when leaving and use natural daylight where possible.")+'</p><button onclick="finishEscapeGame()" class="w-full rounded-xl bg-[#A8C7A0] border border-[#5c4738] px-4 py-3 text-xs font-extrabold">'+(vi?"Thoát khỏi phòng":"Escape the room")+'</button></div>';
        }
                function finishEscapeGame(){ecoGameScore=1;finishEcoGame();}
        let ecoMemoryLocked=false;
        function renderMemoryGame(){
            const vi=gameLang();
            const pairs=[
                {id:0,icon:"🌙",en:"Off-peak laundry",vi:"Giặt giờ thấp điểm",tipEn:"Shift flexible laundry to off-peak electricity hours.",tipVi:"Chuyển việc giặt linh hoạt sang khung giờ điện thấp điểm."},
                {id:1,icon:"🌡️",en:"30°C wash",vi:"Giặt ở 30°C",tipEn:"A 30°C wash can use less electricity when suitable.",tipVi:"Giặt ở 30°C khi phù hợp có thể giảm điện năng."},
                {id:2,icon:"☀️",en:"Daylight",vi:"Ánh sáng tự nhiên",tipEn:"Use daylight instead of switching on lights.",tipVi:"Tận dụng ánh sáng tự nhiên thay cho đèn điện."},
                {id:3,icon:"🔌",en:"Standby off",vi:"Tắt chế độ chờ",tipEn:"Switch off devices left on standby when not needed.",tipVi:"Tắt thiết bị ở chế độ chờ khi không cần dùng."}
            ];
            const deck=pairs.flatMap(p=>[{...p,uid:p.id+"a"},{...p,uid:p.id+"b"}]).sort(()=>Math.random()-.5);
            window.ecoMemoryDeck=deck;
            ecoMemoryOpen=[];ecoMemoryMatched=[];ecoMemoryLocked=false;window.ecoMemoryMoves=0;
            const area=document.getElementById("eco-game-play-area");
            area.innerHTML='<div class="eco-playfield eco-memory-playfield"><div class="eco-memory-status"><span id="memory-progress">0 / 4</span><span id="memory-moves">0 '+(vi?"lượt":"moves")+'</span></div><div id="eco-memory-grid" class="eco-memory-grid">'+deck.map((c,i)=>'<button type="button" class="eco-memory-card" data-card-index="'+i+'" aria-label="'+(vi?"Lá bài úp":"Face-down card")+'" onclick="flipMemoryCard('+i+')"><span class="eco-memory-inner"><span class="eco-memory-face eco-card-back"><b>☘</b><small>ECO</small></span><span class="eco-memory-face eco-card-front"><b class="eco-memory-icon">'+c.icon+'</b><small>'+(vi?c.vi:c.en)+'</small></span></span></button>').join("")+'</div><p id="memory-feedback" class="eco-memory-feedback">'+(vi?"Tìm đủ 4 cặp thẻ giống nhau nhé!":"Find all 4 matching pairs!")+'</p></div>';
        }
        function flipMemoryCard(i){
            if(ecoMemoryLocked||ecoMemoryMatched.includes(i)||ecoMemoryOpen.includes(i))return;
            const deck=window.ecoMemoryDeck||[],card=deck[i],buttons=document.querySelectorAll("#eco-memory-grid .eco-memory-card");
            if(!card||!buttons[i])return;
            const vi=gameLang(),button=buttons[i];
            button.classList.add("flipped");
            button.setAttribute("aria-label",vi?card.vi:card.en);
            ecoMemoryOpen.push(i);
            if(ecoMemoryOpen.length!==2)return;
            window.ecoMemoryMoves=(window.ecoMemoryMoves||0)+1;
            const moves=document.getElementById("memory-moves");
            if(moves)moves.textContent=window.ecoMemoryMoves+" "+(vi?"lượt":"moves");
            const [a,b]=ecoMemoryOpen,first=deck[a],second=deck[b];
            if(first.id===second.id){
                ecoMemoryMatched.push(a,b);ecoGameScore++;
                [a,b].forEach(n=>{buttons[n].classList.add("matched");buttons[n].disabled=true;});
                ecoGameLearned.push(vi?first.tipVi:first.tipEn);
                const progress=document.getElementById("memory-progress");
                if(progress)progress.textContent=(ecoMemoryMatched.length/2)+" / 4";
                const feedback=document.getElementById("memory-feedback");
                if(feedback)feedback.textContent=vi?"Ghép đúng rồi! +1 cặp":"Match found! +1 pair";
                ecoMemoryOpen=[];
                if(ecoMemoryMatched.length===8)setTimeout(finishEcoGame,450);
            }else{
                ecoMemoryLocked=true;
                const feedback=document.getElementById("memory-feedback");
                if(feedback)feedback.textContent=vi?"Chưa khớp, thử lại nhé":"Not a match — try again";
                setTimeout(()=>{
                    [a,b].forEach(n=>{
                        const btn=document.querySelector('#eco-memory-grid .eco-memory-card[data-card-index="'+n+'"]');
                        if(btn&&!ecoMemoryMatched.includes(n)){
                            btn.classList.remove("flipped");
                            btn.setAttribute("aria-label",gameLang()==="vi"?"Lá bài úp":"Face-down card");
                        }
                    });
                    ecoMemoryOpen=[];ecoMemoryLocked=false;
                    const fb=document.getElementById("memory-feedback");
                    if(fb)fb.textContent=gameLang()==="vi"?"Tìm đủ 4 cặp thẻ giống nhau nhé!":"Find all 4 matching pairs!";
                },850);
            }
        }
