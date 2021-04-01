'use strict';

{
	const words=[
	{'en':'run', 'ja':'走る'},
	{'en':'read', 'ja':'読む'},
	{'en':'study', 'ja':'勉強する'},
	{'en':'write', 'ja':'書く'},
	{'en':'make', 'ja':'作る'}];
	let word=words[Math.floor(Math.random() * words.length)];
	const front=document.getElementById('front');
	const back=document.getElementById('back');
	const target=document.getElementById('target');
	const btn=document.getElementById('btn');

	btn.addEventListener('click', ()=>{
		target.textContent=word;
	});
	card.addEventListener{

	}
}