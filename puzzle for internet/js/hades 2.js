	var jakhali;
	var dragElemId;
	function allowdrop(event){
	event.preventDefault();
	}
	function takeId(event){
	dragElemId=event.target.id;
	}
	function takeDiv(event){
	jakhali=event.target.id;
	}
	function drop(event){

		if(dragElemId=='one' && jakhali=='div3'){
				event.target.append(document.getElementById(dragElemId));
				div3.style.border="none";
				div3.style.boxShadow=" 0 8px 16px 0 rgba(0, 128, 0, 0.8), 0 12px 40px 0 rgba(0, 0, 0, 0.80)";                                                           
		}
		else if(dragElemId=='two' && jakhali=='div2'){
				event.target.append(document.getElementById(dragElemId));
				div2.style.border="none";
				div2.style.boxShadow=" 0 8px 16px 0 rgba(0, 128, 0, 0.8), 0 12px 40px 0 rgba(0, 0, 0, 0.80)";                                                           
		}
		else if(dragElemId=='three' && jakhali=='div1'){
				event.target.append(document.getElementById(dragElemId));
				div1.style.border="none";
				div1.style.boxShadow=" 0 8px 16px 0 rgba(0, 128, 0, 0.8), 0 12px 40px 0 rgba(0, 0, 0, 0.80)";                                                          
		}
		else if(dragElemId=='five' && jakhali=='div5'){
				event.target.append(document.getElementById(dragElemId));
				div5.style.border="none";
				div5.style.boxShadow=" 0 8px 16px 0 rgba(0, 128, 0, 0.8), 0 12px 40px 0 rgba(0, 0, 0, 0.80)";
		}
		else{

			document.getElementById(jakhali).style.border="none";
			document.getElementById(jakhali).style.boxShadow=" 0 8px 16px 0 rgba(255, 0, 0, 0.8), 0 12px 40px 0 rgba(255, 0, 0, 0.80)";
		}
	}
	div6.style.border="none";
	div6.style.boxShadow=" 0 8px 16px 0 rgba(0, 128, 0, 0.8), 0 12px 40px 0 rgba(0, 0, 0, 0.80)";
	div4.style.border="none";
	div4.style.boxShadow=" 0 8px 16px 0 rgba(0, 128, 0, 0.8), 0 12px 40px 0 rgba(0, 0, 0, 0.80)";


		// timer count

		var timertext=document.getElementById('timer');
		function countTime(secs, elem){
			timertext.innerHTML=secs;
			if(secs<1){
				clearTimeout(timer);
				timertext.innerHTML="";
			}
			secs--;
			var timer=setTimeout('countTime('+secs+',"'+elem+'")',1000);
		}
		countTime(41,"timertext");



		// second timer count

		var secondTimertext=document.getElementById('secondTimer');
		function secondCountTime(secs, elem){
			secondTimertext.innerHTML=secs;
			if(secs<1){
				clearTimeout(secondTimer);
				secondTimertext.innerHTML="";
			}
			secs--;
			var secondTimer=setTimeout('secondCountTime('+secs+',"'+elem+'")',1000);
		}
		secondCountTime(61,"secondTimertext");


		// tarteb Divs


		var audio = new Audio("../sounds/backMusic.m4a");
		audio.play();

		var awal=document.getElementById('parda');
		setTimeout(()=>awal.style.display="none",5000);

		var NameOfHades=document.getElementById('hadesName');
		setTimeout(()=>NameOfHades.style.display="block",5000);
		setTimeout(()=>NameOfHades.style.display="none",11000);

		var dowom=document.getElementById('game');
		setTimeout(()=>dowom.style.display="block",11000);

		var sewom=document.getElementById('timer');
		var chaharom=document.getElementById('curtain');
		var panjom=document.getElementsByClassName('backcurtain1');
		var shashom=document.getElementsByClassName('backcurtain2');
		var haftom=document.getElementById('anim');
		var hashtom=document.getElementById('next');

		setTimeout(()=>sewom.style.display="block",11000);
		setTimeout(function checkComplete(){
			var div1=document.getElementById('div1');
			var div2=document.getElementById('div2');
			var div3=document.getElementById('div3');
			var div4=document.getElementById('div4');
			var div5=document.getElementById('div5');
			var div6=document.getElementById('div6');
				if(div1.hasChildNodes() && div2.hasChildNodes() && div3.hasChildNodes() && div5.hasChildNodes()){
				setTimeout(()=>dowom.style.display="none",0);
				setTimeout(()=>sewom.style.display="none",0);
				
				setTimeout(()=>chaharom.style.display="block",1000);
				setTimeout(()=>chaharom.style.display="none",10000);

				setTimeout(()=>panjom[0].style.display="block",10001);
				setTimeout(()=>panjom[0].style.display="none",15000);

				setTimeout(()=>shashom[0].style.display="block",15001);
				setTimeout(()=>shashom[0].style.display="none",22000);

				setTimeout(function audioAnim(){
					if(shashom[0].style.display="none"){
						var gerda=document.getElementById('gerda');
						gerda.style.display="none";
						audio.pause();
						var NewAudio = new Audio("../sounds/rajeh ba payambar puh.m4a");
						NewAudio.play();
						var video=document.getElementsByTagName('video');
						video[0].style.display="none";
						setTimeout(()=>haftom.style.display="block",0);
					}
					setTimeout(()=>haftom.style.display="none",195600);
					setTimeout(()=>hashtom.style.display="block",195610);
				},22001);
			}
			else{
				setTimeout(()=>dowom.style.display="none",10);
				setTimeout(()=>sewom.style.display="none",0);

				var fail=document.getElementById('failCurtain');
				setTimeout(()=>fail.style.display="block",10);
				setTimeout(()=>fail.style.display="none",10000);
				audio.pause();

				setTimeout(()=>secondTimertext.style.display="block",10010);
				setTimeout(()=>dowom.style.display="block",10010);
				audio.play();
				setTimeout(function checkComplete(){
					if(div1.hasChildNodes() && div2.hasChildNodes() && div3.hasChildNodes() && div5.hasChildNodes()){
						setTimeout(()=>secondTimertext.style.display="none",0);
						setTimeout(()=>dowom.style.display="none",500);
						
						setTimeout(()=>chaharom.style.display="block",1000);
						setTimeout(()=>chaharom.style.display="none",10000);

						
						setTimeout(()=>panjom[0].style.display="block",10001);
						setTimeout(()=>panjom[0].style.display="none",15000);

				
						setTimeout(()=>shashom[0].style.display="block",15001);
						setTimeout(()=>shashom[0].style.display="none",22000);

						
						setTimeout(function audioAnim(){
							if(shashom[0].style.display="none"){
								audio.pause();
								var gerda=document.getElementById('gerda');
								gerda.style.display="none";
								var video=document.getElementsByTagName('video');
								video[0].style.display="none";
								var NewAudio = new Audio("../sounds/rajeh ba payambar puh.m4a");
								NewAudio.play();
								setTimeout(()=>haftom.style.display="block",0);
							}
							setTimeout(()=>haftom.style.display="none",195600);
							setTimeout(()=>hashtom.style.display="block",195610);
						},22010);

					}
					else{
						setTimeout(()=>secondTimertext.style.display="none",0);
						setTimeout(()=>dowom.style.display="none",200);
						setTimeout(()=>sewom.style.display="none",200);
						var fail=document.getElementById('failCurtain');
						setTimeout(()=>fail.style.display="block",1000);
						setTimeout(()=>fail.style.display="none",10000);
						setTimeout(()=>window.location="../html/hades 1.html",10010);
					}
				},20000);

			}
		},41000);