var threshold = randint(1, 30);
var bombcount = 0;
var player =1;
function randint(min, max) {
	return Math.floor(Math.random()*max+min);
}
function boom(){
	document.getElementById("bomb").src = "boom.png";
	var rmhold = document.getElementById('hold'); 
	var rmnext = document.getElementById('next');
	rmhold.parentNode.removeChild(rmhold);
	rmnext.parentNode.removeChild(rmnext);
	let mkretry = document.createElement("button");
	mkretry.innerHTML = "Try Again";
	mkretry.id = 'retry';
	mkretry.onclick = retry;
	document.body.appendChild(mkretry);
}
function plus() {
	bombcount++;
	console.log(bombcount);
	if (bombcount>threshold){
		boom();
	}
}
function next() {
	if (player === 1){
		document.getElementById("player").src = "2p.png";
		player = 2;
	}else{
		document.getElementById("player").src = "1p.png";
		player = 1;
	}
	
}
function retry(){
	var rmretry = document.getElementById('retry');
	rmretry.parentNode.removeChild(rmretry);
	document.getElementById("bomb").src = "BOMB.png";
	let mkhold = document.createElement("button");
	mkhold.innerHTML = "Hold";
	mkhold.id = 'hold';
	mkhold.onclick = plus;
	document.body.appendChild(mkhold);
	let mknext = document.createElement("button");
	mknext.innerHTML = "Next Player";
	mknext.id = 'next';
	mknext.onclick = next;
	document.body.appendChild(mknext);
	threshold = randint(1, 30);
	bombcount = 0;
	document.getElementById("player").src = "1p.png";
	player = 1;

}
function start(){
	let mkplayer = document.createElement("img");
	mkplayer.id = "player";
	mkplayer.src = "1p.png"
	document.body.appendChild(mkplayer);
	let mkbomb = document.createElement("img");
	mkbomb.id = "bomb";
	mkbomb.src = "BOMB.png"
	document.body.appendChild(mkbomb);
	let mkhold = document.createElement("button");
	mkhold.innerHTML = "Hold";
	mkhold.id = 'hold';
	mkhold.onclick = plus;
	document.body.appendChild(mkhold);
	let mknext = document.createElement("button");
	mknext.innerHTML = "Next Player";
	mknext.id = 'next';
	mknext.onclick = next;
	document.body.appendChild(mknext);
	threshold = randint(1, 30);
	bombcount = 0;
	player = 1;
	let rmstart = document.getElementById('start');
	rmstart.parentNode.removeChild(rmstart);
	let rmrules = document.getElementById('rules');
	rmrules.parentNode.removeChild(rmrules);
	let rmintro = document.getElementById('intro');
	rmintro.parentNode.removeChild(rmintro);
	
}

function rules(){
	let mkrulesintro = document.createElement("div");
	mkrulesintro.innerHTML = `
	<b>遊戲規則</b>
	<br>
	<p>炸彈會在5~30秒後爆炸，
	<br>每按下一次Hold時間就會增加一秒，
	<br>按下Next Player則可以把炸彈丟給對方。
	<br>試著讓炸彈在對方手中爆炸吧!</p>
	`
	mkrulesintro.id = "rulesintro";
	document.body.appendChild(mkrulesintro);
	let rmstart = document.getElementById('start');
	rmstart.parentNode.removeChild(rmstart);
	let rmrules = document.getElementById('rules');
	rmrules.parentNode.removeChild(rmrules);
	let rmintro = document.getElementById('intro');
	rmintro.parentNode.removeChild(rmintro);
	let mkback = document.createElement("button");
	mkback.onclick = back;
	mkback.id = "back";
	mkback.innerHTML = "Back";
	document.body.appendChild(mkback);
}

function back(){
	let rmrulesintro = document.getElementById("rulesintro");
	rmrulesintro.parentNode.removeChild(rmrulesintro);
	let mkintro = document.createElement("div");
	mkintro.innerHTML = `
	<b>炸彈危機</b>
	<br>
	<p>在一個月黑風高的夜晚，你來到了一間廢墟尋寶。
	<br>探索了N個房間卻一無所獲的你，赫然發現已經早上了。
	<br>就在你要放棄時，居然發現了一個寶箱!
	<br>就在你要打開寶箱之際，你的死對頭迎面走來，
	<br>「哼哼，交出寶箱!」，他手上的槍指著你說道。
	<br>豁出去的你，不管三七二十一決定打開寶箱——
	<br>沒想到，裡面居然是一顆炸彈!!!
	<br>於是你和你的死對頭開始了拋接炸彈的遊戲...</p> 
	`
	mkintro.id = "intro";
	document.body.appendChild(mkintro);
	let mkstart = document.createElement("button");
	mkstart.id = "start";
	mkstart.innerHTML = "Start";
	mkstart.onclick = start;
	document.body.appendChild(mkstart);
	let mkrules = document.createElement("button");
	mkrules.id = "rules";
	mkrules.innerHTML = "How to play"
	mkrules.onclick = rules;
	document.body.appendChild(mkrules);
	let rmback = document.getElementById("back");
	rmback.parentNode.removeChild(rmback);

}



