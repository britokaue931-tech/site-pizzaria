/* Sophia Pizzaria & Esfiharia - comportamento do site */
const WHATS="5583996747088";
const PRECOS=Object.freeze({pizzaPequenaBase:40,pizzaPequena:40.49,pizzaPequenaFrango:40,pizzaGrande:45.49,pizzaMetro:249.99,comboPizzaP:49.9,comboPizzaG:49.9,comboPizzaGuarana:59.99});
const COMBO_GUARANA_PIZZA_SIZE="Pizza Grande 35 cm";
const COMBO_G_FLAVORS_ONE=["Vegetariana","Tropical","Mussarela","Marguerita","Milho Verde","Mexicana","Paulista","Pepperoni","Portuguesa","4 Queijos","5 Queijos","Ricord","Salame","Siciliana","Tomate Seco"];
const COMBO_G_FLAVORS_TWO=["Vegetariana","Tropical","Mussarela","Marguerita","Milho Verde","Mexicana","Paulista","Pepperoni","Portuguesa","4 Queijos","5 Queijos","Ricord","Salame","Frango com Cream Cheese","Frango com Catupiry","Calabresa Especial","Calabresa","Caipira","Baiana","Bacon","Americana","Alho","A Moda"];
const F=`Vitória|Linguiça toscana Perdigão, mussarela e palmito|60.49|salgada
Vegetariana|Palmito, ervilha, milho, tomate e mussarela|55.49|salgada
Tropical|Lombo defumado, palmito, cebola, tomate e mussarela|55.49|salgada
Tomate Seco|Mussarela e tomate seco|55.49|salgada
Sophia|Carne de sol, mussarela e nata|60.49|salgada
Siciliana|Champignon, mussarela e bacon|55.49|salgada
Salame|Salame fatiado e mussarela|55.49|salgada
Romeu e Julieta|Goiabada com mussarela|55.49|doce
Ricord|Frango, bacon, milho e mussarela|55.49|salgada
Prestígio|Chocolate, mussarela e coco ralado|55.49|doce
Portuguesa|Presunto, ovo, cebola e mussarela|55.49|salgada
Pepperoni|Pepperoni e mussarela|54.99|salgada
Paulista|Palmito, ovo, cebola e catupiry|55.49|salgada
Ovomaltine|Chocolate e Ovomaltine|55.49|doce
Nordestina|Charque desfiada com cream cheese|60.49|salgada
Mussarela|Mussarela, azeitona e orégano|45.49|salgada
Milho Verde|Mussarela e milho verde|45.49|salgada
Mexicana|Presunto, milho e cobertura de mussarela|50.49|salgada
Marguerita|Mussarela, parmesão e tomate|55.49|salgada
M&M|Chocolate com M&M's|55.49|doce
Laka Oreo|Chocolate branco com Oreo|55.49|doce
Goiabada|Goiabada e cream cheese|55.49|doce
Gaúcha|Lombo canadense, cebola e catupiry|60.49|salgada
Frango com Cream Cheese||55.49|salgada
Frango com Catupiry||55.49|salgada
Frango|Frango com mussarela|55.00|salgada
Dois Amores|Chocolate branco e preto|55.49|doce
Cupim||55.00|salgada
Carne de Sol II|Carne de sol desfiada, catupiry, parmesão, mussarela e provolone|60.49|salgada
Carne de Sol I|Carne de sol desfiada com cebola e mussarela|60.49|salgada
Canadense|Mussarela, cebola e lombo defumado|60.49|salgada
Camarão com 4 Queijos|Camarão, mussarela, parmesão, catupiry e gorgonzola|60.49|salgada
Camarão|Camarão e mussarela|60.99|salgada
Calabresa Especial|Calabresa, mussarela e catupiry|54.99|salgada
Calabresa|Mussarela, calabresa e cebola|54.99|salgada
Caipira|Frango, milho, catupiry e mussarela|55.49|salgada
Brigadeiro|Chocolate e granulado|55.49|doce
Batata Palha Especial|Brócolis, palmito, milho, cebola, catupiry, batata palha e mussarela|60.49|salgada
Banana Nevada|Banana, chocolate branco, mussarela, canela e leite condensado|55.49|doce
Banana com Chocolate|Banana e chocolate|55.49|doce
Baiana|Mussarela, calabresa e ovo|55.49|salgada
Bacon|Mussarela, ovo e bacon|55.49|salgada
Atum|Atum, cebola e mussarela|60.49|salgada
Americana|Mussarela, presunto, bacon e ovo|55.49|salgada
Alho|Mussarela, parmesão e alho frito|55.49|salgada
A Moda|Mussarela, presunto, ovo, milho e ervilha|55.49|salgada
5 Queijos|Mussarela, catupiry, provolone, parmesão e gorgonzola|55.49|salgada
4 Queijos|Mussarela, catupiry, provolone e parmesão|55.49|salgada`.split("\n").map(l=>{const a=l.split("|");return[a[0],a[1],+a[2],a[3]==="doce"]});
const IMAGE_PATHS=Object.freeze({
  files:Object.freeze({logo:"img/logo.jpg",pizza:"img/pizza-principal.jpeg",pizzaPreview:"img/monte-sua-pizza.jpeg",marguerita:"img/marguerita.jpeg",otherPizza:"img/outras-pizzas.jpeg",savoryEsfihas:"img/esfilhas-salgadas.jpeg",sweetEsfihas:"img/esfilhas-doces.jpeg",water:"img/agua.jpeg",beer:"img/cerveja.jpeg",beerZero:"img/cerveja-zero.jpeg",monster:"img/monster.jpeg",h2o:"img/h2o-limoneto.jpeg",liter:"img/litro.jpeg",can:"img/lata.jpeg"}),
  menu:Object.freeze({"Marguerita":"marguerita","Cerveja":"beer","Cerveja Zero":"beerZero","Energético Monster":"monster","H2O Limoneto":"h2o","Água sem Gás 500ml":"water","Água com Gás 500ml":"water","Coca Zero Lata":"can","Coca Lata":"can","Refrigerante 1L":"liter","Coca Zero 1L":"liter","Coca 1L":"liter"}),
  fallback:Object.freeze({Combos:"pizza",Pizzas:"pizza",Sabores:"pizza",Esfihas:"savoryEsfihas",EsfihasDoces:"sweetEsfihas",Bebidas:"liter"})
});
const M={
Combos:[["10 Esfihas de Nutella","De R$ 65,90 por R$ 55,90.",55.9],["Pizza P + esfiha doce + Guaraná L","Pizza P (4 fatias), 1 esfiha doce e 1 Guaraná L. Só delivery.",PRECOS.comboPizzaP],["Pizza G + 2 esfihas (Banana Nevada)","Pizza G com 2 sabores e 2 esfihas doces Banana Nevada. Só delivery, não disponível para consumo em loja.",PRECOS.comboPizzaG],["Pizza + Guaraná + 2 Banana Nevada",`${COMBO_GUARANA_PIZZA_SIZE} com até 2 sabores, 1 Guaraná litro e 2 esfihas doces Banana Nevada. Só delivery, não disponível para consumo em loja.`,PRECOS.comboPizzaGuarana],["10 Esfihas de carne + Guaraná","10 esfihas de carne e 1 Guaraná litro.",39.9]],
Pizzas:[["Pizza Pequena 25cm","1 sabor, 4 fatias.",PRECOS.pizzaPequenaBase,1],["Pizza Grande 35cm","Até 2 sabores, 8 fatias.",PRECOS.pizzaGrande,1],["Pizza Metro","Até 6 sabores, 70 fatias. Agende com 3 horas de antecedência.",PRECOS.pizzaMetro]],
Sabores:F.map(f=>[f[0],f[1],f[2]]),
Esfihas:[["4 Queijos - Especial","Muss. catupiry, cheddar e parmesão.",5.49],["Alho - Tradicional","Alho frito e mussarela.",4.49],["Atum - Tradicional","Atum e mussarela.",5.49],["Bacon - Tradicional","Bacon e mussarela.",5.49],["Bauru - Tradicional","Presunto e mussarela.",5.49],["Brócolis - Tradicional","Brócolis e mussarela.",5.49],["Calabresa com Cream Cheese - Especial","",6.49],["Camarão com Cream Cheese","",6.49],["Calabresa Especial - Especial","Calabresa, molho e tomate.",5.49],["Camarão com 4 Queijos - Especial","",6.99],["Camarão com Mussarela - Especial","",6.49],["Carioca - Tradicional","Calabresa e mussarela.",4.49],["Carne - Tradicional","Carne, tomate e cebola.",4.49],["Cheddar - Tradicional","Queijo cheddar.",5.49],["Cupim - Especial","Cupim com creme cheese.",5.99],["Frango - Tradicional","Frango e mussarela.",5.49],["Frango com Catupiry - Especial","",5.49],["Frango com Cream Cheese - Especial","",6.49],["Matuta - Tradicional","Frango com milho verde e mussarela.",5.49],["Mussarela - Tradicional","Queijo mussarela.",4.49],["Nordestina - Especial","Charque com mussarela e creme cheese.",6.49],["Palmito - Tradicional","Palmito e mussarela.",5.49],["Salame com Mussarela - Especial","",6.49],["Tomate Seco - Tradicional","Tomate seco e mussarela.",4.49]],
EsfihasDoces:[["Beijinho","Mussarela, coco e leite condensado.",5.49],["Brigadeiro","Chocolate com granulado.",5.49],["Banana Nevada","Banana, chocolate branco, mussarela, canela e leite condensado.",6.49],["Cartola","Banana, mussarela e leite condensado.",5.49],["Chocolate","",5.49],["Chocolate Branco","Chocolate branco.",5.49],["Doce de Leite","Doce de leite.",5.49],["Romeu e Julieta","Goiabada com mussarela.",5.49],["M&M","Chocolate com M&M's.",6.49],["Nutella","Chocolate, avelã e nutella tradicional.",6.49],["Prestígio","Chocolate, mussarela e coco ralado.",6.49],["Ovomaltine","Chocolate e Ovomaltine.",6.49],["Laka Oreo","Chocolate branco com Oreo.",6.49],["Dois Amores","Chocolate branco e preto.",6.49],["Vitória","Chocolate Baton.",6.49],["Sophia","Chocolate e Kitkat.",6.49]],
Bebidas:[["Água sem Gás 500ml","",4.99],["Água com Gás 500ml","",4.99],["Cerveja","",12],["Cerveja Zero","",12.99],["Energético Monster","",16],["H2O Limoneto","",8.99],["Refrigerante 1L","",10],["Coca Zero 1L","",11],["Coca 1L","",11],["Coca Zero Lata","",6.99],["Coca Lata","",6.99]]};
const pt=(p,f)=>p==null?"Consulte":(f?"a partir de ":"")+R(p);
const $=id=>document.getElementById(id),R=v=>"R$ "+v.toFixed(2).replace(".",",");
document.querySelectorAll("[data-image-key]").forEach(image=>{const path=IMAGE_PATHS.files[image.dataset.imageKey];if(path)image.src=path});
$("combo-price-p").textContent=R(PRECOS.comboPizzaP);$("combo-price-g").textContent=R(PRECOS.comboPizzaG);$("promo-combo-price").textContent=R(PRECOS.comboPizzaGuarana);
$("nota").textContent=`Na Pequena 25cm, sabores custam ${R(PRECOS.pizzaPequena)}, exceto Frango e Cupim (${R(PRECOS.pizzaPequenaFrango)}). Na Grande 35cm, o preço varia por sabor. Pizza Metro: ${R(PRECOS.pizzaMetro)}. Toque em + para escolher o sabor.`;
const OPEN_START=18*60,OPEN_END=23*60+30,OPENING_TIME_ZONE="America/Sao_Paulo";
const ORDER_HOURS_BYPASS_FOR_TESTING=true;
const CART_STORAGE_KEY="sophia-order-v1";
function readSavedCart(){try{const saved=JSON.parse(localStorage.getItem(CART_STORAGE_KEY)||"[]");return Array.isArray(saved)?saved.filter(item=>item&&typeof item.n==="string"&&Number.isFinite(item.p)&&Number.isInteger(item.q)&&item.q>0):[]}catch{return[]}}
let cart=readSavedCart();
function getBrasiliaMinutes(){const parts=new Intl.DateTimeFormat("en-GB",{timeZone:OPENING_TIME_ZONE,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date());return Number(parts.find(part=>part.type==="hour").value)*60+Number(parts.find(part=>part.type==="minute").value)}
function isWithinOpeningHours(){if(ORDER_HOURS_BYPASS_FOR_TESTING)return true;const minutes=getBrasiliaMinutes();return minutes>=OPEN_START&&minutes<OPEN_END}
function updateOrderButtonState(){const isOpen=isWithinOpeningHours(),label=ORDER_HOURS_BYPASS_FOR_TESTING?"Modo teste · pedidos liberados":isOpen?"Aberto agora":"Fechado · abre às 18h",banner=$("horario"),btn=$("abre"),status=btn?.querySelector(".cb-status");if(banner)banner.textContent=label;if(!btn||!status)return;btn.classList.toggle("locked",!isOpen);status.textContent=label;btn.setAttribute("aria-label","Abrir pedido. "+label);}
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("on"),1800)}
function canOrder(){if(isWithinOpeningHours())return true;toast("Estamos fechados. Os pedidos abrem às 18h, horário de Brasília.");return false}
function escapeHtml(value){return value.replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
function add(nome,preco,f){if(!canOrder())return;const i=cart.find(x=>x.n===nome);i?i.q++:cart.push({n:nome,p:preco,f:f,q:1});draw();toast(nome+" no pedido");const b=$("n");b.classList.remove("up");void b.offsetWidth;b.classList.add("up")}
function draw(){
 const count=cart.reduce((sum,item)=>sum+item.q,0),total=cart.reduce((sum,item)=>sum+(item.p||0)*item.q,0),formattedTotal=R(total);
 $("n").textContent=count;
 $("soma").textContent=formattedTotal;
 $("mobile-order-summary").textContent=count+` ${count===1?"item":"itens"} · `+formattedTotal;
 $("mobile-order").hidden=count===0;
 $("clear-order").hidden=count===0;
 $("mobile-order").setAttribute("aria-label",`Ver pedido com ${count} ${count===1?"item":"itens"}, total ${formattedTotal}`);
 $("lista").innerHTML=cart.length?cart.map((x,i)=>`<li><strong>${escapeHtml(x.n)}</strong><span>${pt(x.p&&x.p*x.q,x.f)}</span><div class="q"><button data-i="${i}" data-d="-1" aria-label="Diminuir">−</button>${x.q}<button data-i="${i}" data-d="1" aria-label="Aumentar">+</button><button class="remove-item" data-remove="${i}" aria-label="Remover ${escapeHtml(x.n)}" title="Remover item">×</button></div></li>`).join(""):'<li class="vz">Seu pedido está vazio. Adicione itens do cardápio.</li>';
 try{localStorage.setItem(CART_STORAGE_KEY,JSON.stringify(cart))}catch{}
 updateCheckoutFields();
}
$("lista").onclick=e=>{const remove=e.target.closest("[data-remove]");if(remove){cart.splice(+remove.dataset.remove,1);draw();return}const b=e.target.closest("button[data-d]");if(!b)return;const x=cart[b.dataset.i];x.q+=+b.dataset.d;if(x.q<1)cart.splice(b.dataset.i,1);draw()};
const tabs=document.querySelector(".tabs"),menu=$("menu");
const norm=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
let cur="Combos";
$("bus").oninput=()=>show(cur);
function show(c){cur=c;
 tabs.querySelectorAll("button").forEach(b=>b.setAttribute("aria-selected",b.textContent===c));
 const searchable=["Sabores","Esfihas","EsfihasDoces"].includes(c),sb=c==="Sabores";
 $("bus").hidden=!searchable;$("nota").hidden=!sb;
 if(!searchable)$("bus").value="";
 $("bus").placeholder=sb?"Pesquise um sabor de pizza":c==="EsfihasDoces"?"Pesquise uma esfiha doce":"Pesquise uma esfiha salgada";
 const q=searchable?norm($("bus").value):"";
 menu.innerHTML=M[c].map((i,n)=>[i,n]).filter(x=>!q||norm(x[0][0]+" "+x[0][1]).includes(q)).map(([i,n],k)=>{
  const itemName=i[0];
  const itemPrice=Number(i[2]);
  const imageKey=IMAGE_PATHS.menu[itemName]||IMAGE_PATHS.fallback[c];
  const itemImage=IMAGE_PATHS.files[imageKey];
  const itemFlag=typeof i[3]==="boolean"?i[3]:undefined;
  const imageMarkup=itemImage?`<img class="item-image" src="${itemImage}" alt="${itemName}" loading="lazy" width="72" height="72">`:"";
  return `<li class="it ${itemImage?"has-image":"text-only"}" data-c="${c}" data-n="${n}" style="animation-delay:${Math.min(k,8)*.05}s">${imageMarkup}<div class="item-main"><h3>${itemName}</h3><span class="pr">${pt(itemPrice,itemFlag)}</span><p>${i[1]||"Ingredientes a confirmar."}</p></div><button class="add" data-c="${c}" data-n="${n}" aria-label="Adicionar ${itemName}">+</button></li>`;
 }).join("")||'<li class="vz">Nenhum sabor encontrado.</li>';
}
menu.onclick=e=>{const addBtn=e.target.closest(".add");const card=e.target.closest(".it");const target=addBtn||card;if(!target)return;const c=target.dataset.c,i=M[c][target.dataset.n];
 if(!canOrder())return;
 document.querySelectorAll(".it.selected").forEach(el=>el.classList.remove("selected"));
 if(card){card.classList.add("selected");}
 if(c==="Pizzas"){$("tam").value=target.dataset.n;mm();$("meio").scrollIntoView({behavior:"smooth"})}
 else if(c==="Sabores"){const ss=[...$("fl").querySelectorAll("select")],v=ss.find(x=>!x.value)||ss[ss.length-1];v.value=i[0];pick();toast(i[0]+" escolhida");$("meio").scrollIntoView({behavior:"smooth"})}
 else if(i[0]==="Pizza P + esfiha doce + Guaraná L")openComboConfigurator();
 else if(i[0]==="Pizza G + 2 esfihas (Banana Nevada)")openGComboConfigurator();
 else if(i[0]==="Pizza + Guaraná + 2 Banana Nevada")openPromoComboConfigurator();
 else add(i[0],i[2],0)};
Object.keys(M).forEach(c=>{const b=document.createElement("button");b.textContent=c;b.setAttribute("role","tab");b.onclick=()=>show(c);tabs.appendChild(b)});
show("Combos");
const comboDialog=$("combo-dialog"),comboForm=$("combo-form"),comboSweet=$("combo-sweet");
M.EsfihasDoces.forEach(([name])=>comboSweet.add(new Option(name,name)));
function openComboConfigurator(){comboForm.reset();comboDialog.showModal()}
$("combo-cancel").onclick=()=>comboDialog.close();
comboForm.onsubmit=e=>{
 e.preventDefault();
 const data=new FormData(comboForm),pizza=data.get("pizza"),sweet=data.get("sweet"),note=data.get("note").trim();
 const name="Pizza P + esfiha doce + Guaraná L (Pizza: "+pizza+"; Esfiha doce: "+sweet+")"+(note?" (Obs. do combo: "+note+")":"");
 add(name,PRECOS.comboPizzaP,0);
 comboDialog.close();
};
const comboGDialog=$("combo-g-dialog"),comboGForm=$("combo-g-form"),comboGPizza1=$("combo-g-pizza-1"),comboGPizza2=$("combo-g-pizza-2");
COMBO_G_FLAVORS_ONE.forEach(name=>comboGPizza1.add(new Option(name,name)));
COMBO_G_FLAVORS_TWO.forEach(name=>comboGPizza2.add(new Option(name,name)));
function openGComboConfigurator(){comboGForm.reset();comboGDialog.showModal()}
$("combo-g-cancel").onclick=()=>comboGDialog.close();
comboGForm.onsubmit=e=>{
 e.preventDefault();
 const data=new FormData(comboGForm),first=data.get("pizza-1"),second=data.get("pizza-2"),note=data.get("note").trim();
 const name="Pizza G + 2 esfihas (Banana Nevada) (Sabores: "+first+" / "+second+"; 2 esfihas Banana Nevada)"+(note?" (Obs. do combo: "+note+")":"");
 add(name,PRECOS.comboPizzaG,0);
 comboGDialog.close();
};
const promoComboDialog=$("promo-combo-dialog"),promoComboForm=$("promo-combo-form"),promoComboPizza=$("promo-combo-pizza"),promoComboFlavor=$("promo-combo-flavor");
COMBO_G_FLAVORS_TWO.forEach(name=>promoComboPizza.add(new Option(name,name)));
COMBO_G_FLAVORS_ONE.forEach(name=>promoComboFlavor.add(new Option(name,name)));
function openPromoComboConfigurator(){promoComboForm.reset();promoComboDialog.showModal()}
$("promo-combo-cancel").onclick=()=>promoComboDialog.close();
promoComboForm.onsubmit=e=>{
 e.preventDefault();
 const data=new FormData(promoComboForm),pizza=data.get("pizza"),flavor=data.get("flavor"),note=data.get("note").trim();
 const flavors=[pizza,flavor].filter(Boolean).join(" / ");
 const name=COMBO_GUARANA_PIZZA_SIZE+" + Guaraná + 2 Banana Nevada (Sabores: "+flavors+"; 1 Guaraná litro; 2 esfihas Banana Nevada)"+(note?" (Obs. do combo: "+note+")":"");
 add(name,PRECOS.comboPizzaGuarana,0);
 promoComboDialog.close();
};
/* montar pizza */
const TAM=[["Pizza Pequena 25cm",1,PRECOS.pizzaPequenaBase,"1 sabor · 4 fatias"],["Pizza Grande 35cm",2,PRECOS.pizzaGrande,"Até 2 sabores · 8 fatias · o valor é o do sabor mais caro"],["Pizza Metro",6,PRECOS.pizzaMetro,"Até 6 sabores · 70 fatias · agende com 3 horas de antecedência"]];
const srt=(d,ti)=>F.filter(f=>f[3]===d&&!(ti==2&&(f[0]==="Frango"||f[0]==="Cupim"))).sort((a,b)=>a[0].localeCompare(b[0],"pt")).map(f=>`<option>${f[0]}</option>`).join("");
const flv=n=>F.find(f=>f[0]===n),sels=()=>[...$("fl").querySelectorAll("select")];
const PREVIEW_COLORS=["#9f252c","#d6ad65","#6c1f27","#b78a54","#792d2b","#cfbb91"];
function updatePizzaPreview(segmentCount){const preview=$("pz"),photo=preview.querySelector(".pizza-preview-photo"),names=sels().map(select=>select.value),segments=Array.from({length:segmentCount},(_,index)=>({name:names[index]||`Sabor ${index+1}`,color:PREVIEW_COLORS[index%PREVIEW_COLORS.length]}));
 preview.style.background=`conic-gradient(${segments.map((segment,index)=>`${segment.color} ${index*100/segmentCount}% ${(index+1)*100/segmentCount}%`).join(",")})`;
 preview.replaceChildren();
 if(photo)preview.append(photo);
 segments.forEach((segment,index)=>{const label=document.createElement("span"),angle=((index+.5)/segmentCount)*Math.PI*2-Math.PI/2,radius=segmentCount===1?0:segmentCount===2?25:29;label.className="pizza-preview-label";label.textContent=segment.name;label.style.left=`${50+Math.cos(angle)*radius}%`;label.style.top=`${50+Math.sin(angle)*radius}%`;preview.append(label)});
}
const bp=t=>t==2?19.99:9.99;
const pz=(f,ti)=>ti==2?PRECOS.pizzaMetro:ti==1?f[2]:(f[0]==="Frango"||f[0]==="Cupim"?PRECOS.pizzaPequenaFrango:PRECOS.pizzaPequena);
function pick(){const ti=+$("tam").value,t=TAM[ti];
 sels().forEach((s,k)=>{const f=flv(s.value);$("d"+k).textContent=f?f[1]+(ti<2?" · "+R(pz(f,ti)):""):""});
 const ch=sels().map(s=>flv(s.value)).filter(Boolean),b=$("bd").value?bp(ti):0;
 $("tot").textContent=ti==2?R(PRECOS.pizzaMetro+b):ch.length?R(Math.max(...ch.map(f=>pz(f,ti)))+b):"a partir de "+R(t[2]);updatePizzaPreview(t[1])}
function mm(){const ti=+$("tam").value,t=TAM[ti],n=t[1],c=["#3a0606","#4a3208"],g=[],old=sels().map(s=>s.value);
 $("fl").innerHTML=Array.from({length:n},(_,k)=>`<label for="f${k}">Sabor ${k+1}${k?" (opcional)":""}</label><select id="f${k}"><option value="">${k?"Nenhum":"Escolha o sabor"}</option><optgroup label="Salgadas">${srt(false,ti)}</optgroup><optgroup label="Doces">${srt(true,ti)}</optgroup></select><small class="ds" id="d${k}"></small>`).join("");
 sels().forEach((s,k)=>{if(old[k])s.value=old[k]});
 $("bdl").textContent="Borda recheada (opcional, + "+R(bp(ti))+")";$("info").textContent=t[3];
 pick()}
$("tam").onchange=mm;$("fl").onchange=$("bd").onchange=pick;
$("addm").onclick=()=>{if(!canOrder())return;const ti=+$("tam").value,t=TAM[ti],ch=sels().map(s=>flv(s.value)).filter(Boolean);
 if(!ch.length){toast("Escolha pelo menos um sabor");return}
 const b=$("bd").value,nome=t[0]+": "+ch.map(f=>f[0]).join(" / ")+(b?" (borda de "+b+")":"");
 add(nome,(ti==2?PRECOS.pizzaMetro:Math.max(...ch.map(f=>pz(f,ti))))+(b?bp(ti):0),0)};
mm();
/* gaveta do pedido */
const dr=$("dr"),ov=$("ov");
let orderTrigger=null;
function gav(open,trigger){dr.classList.toggle("on",open);ov.classList.toggle("on",open);dr.setAttribute("aria-hidden",String(!open));dr.inert=!open;if(open){orderTrigger=trigger||document.activeElement;$("fecha").focus()}else if(orderTrigger?.isConnected&&!orderTrigger.hidden)orderTrigger.focus();else $("abre").focus()}
function localDateValue(date){return date.getFullYear()+"-"+String(date.getMonth()+1).padStart(2,"0")+"-"+String(date.getDate()).padStart(2,"0")}
function updateCheckoutFields(){const delivery=$("recebimento").value==="Entrega",cash=$("pagamento").value==="Dinheiro",needsMetroTime=cart.some(item=>item.n.startsWith("Pizza Metro")),metroDate=$("metro-data"),metroTime=$("metro-hora");
 $("endereco-group").hidden=!delivery;$("endereco").required=delivery;$("troco-group").hidden=!cash;$("metro-schedule").hidden=!needsMetroTime;metroDate.required=metroTime.required=needsMetroTime;
 if(needsMetroTime)metroDate.min=localDateValue(new Date(Date.now()+3*60*60*1000));
}
function validateCheckout(){if(!canOrder()||!cart.length){if(!cart.length)toast("Adicione um item primeiro");return false}updateCheckoutFields();
 if($("recebimento").value==="Entrega"&&!$("endereco").reportValidity())return false;
 if(!$("pagamento").reportValidity())return false;
 if(cart.some(item=>item.n.startsWith("Pizza Metro"))){const date=$("metro-data"),time=$("metro-hora");if(!date.reportValidity()||!time.reportValidity())return false;
  const scheduledAt=new Date(date.value+"T"+time.value+":00"),minutes=Number(time.value.slice(0,2))*60+Number(time.value.slice(3,5));
  if(scheduledAt.getTime()<Date.now()+3*60*60*1000){toast("A Pizza Metro precisa ser agendada com pelo menos 3 horas de antecedência.");time.focus();return false}
  if(minutes<OPEN_START||minutes>OPEN_END){toast("Escolha um horário entre 18h e 23h30 para a Pizza Metro.");time.focus();return false}
 }
 return true}
function openOrderDrawer(trigger){if(!isWithinOpeningHours())toast("Fechado agora. Os pedidos abrem às 18h, horário de Brasília.");gav(true,trigger)}
$("abre").onclick=e=>openOrderDrawer(e.currentTarget);$("abre2").onclick=e=>openOrderDrawer(e.currentTarget);$("mobile-order").onclick=e=>openOrderDrawer(e.currentTarget);
$("fecha").onclick=ov.onclick=()=>gav(false);
$("recebimento").onchange=updateCheckoutFields;$("pagamento").onchange=updateCheckoutFields;
$("clear-order").onclick=()=>{cart=[];draw();toast("Pedido limpo")};
addEventListener("keydown",e=>e.key==="Escape"&&gav(false));
updateOrderButtonState();
setInterval(updateOrderButtonState,60000);
$("envia").onclick=()=>{if(!validateCheckout())return;
 const delivery=$("recebimento").value==="Entrega",payment=$("pagamento").value;
 const orderDate=new Intl.DateTimeFormat("pt-BR",{timeZone:OPENING_TIME_ZONE,dateStyle:"short",timeStyle:"short"}).format(new Date());
 const details=["Olá, Sophia! Quero fazer um pedido.","Pedido do site em "+orderDate,"Recebimento: "+$("recebimento").value];
 if(delivery)details.push("Endereço: "+$("endereco").value.trim());
 details.push("Pagamento: "+payment);
 if(payment==="Dinheiro"&&$("troco").value)details.push("Troco para: "+R(Number($("troco").value)));
 if(cart.some(item=>item.n.startsWith("Pizza Metro")))details.push("Agendamento da Pizza Metro: "+$("metro-data").value+" às "+$("metro-hora").value);
 details.push("Itens:\n"+cart.map(item=>`${item.q}x ${item.n} (${R(item.p*item.q)})`).join("\n"),"Total estimado: "+$("soma").textContent);
 if($("obs").value.trim())details.push("Observações: "+$("obs").value.trim());
 window.open("https://wa.me/"+WHATS+"?text="+encodeURIComponent(details.join("\n")),"_blank","noopener")};
$("obs").placeholder="Observações (ex.: sem cebola)";
draw();updateCheckoutFields();
/* header, círculo do scroll, paralaxe da cúpula */
const fx=$("faixa"),circ=$("circ"),tx=$("tx"),red=matchMedia("(prefers-reduced-motion: reduce)").matches;
function sc(){$("hd").classList.toggle("s",scrollY>40);if(red)return;
 const r=fx.getBoundingClientRect(),t=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));
 circ.style.clipPath=`circle(${6+t*100}% at 50% 50%)`;tx.classList.toggle("on",t>.55)}
addEventListener("scroll",sc,{passive:true});addEventListener("resize",sc);sc();
const dm=$("dome");
if(!red)addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5,k=dm.children;
 k[0].style.transform=`translate(${x*-18}px,${y*-14}px)`;k[1].style.transform=`translate(${x*-8}px,${y*-6}px)`;k[2].style.transform=`translate(${x*10}px,${y*8}px)`});