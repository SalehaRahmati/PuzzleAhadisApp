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

		if(dragElemId=='two' && jakhali=='div2'){
				event.target.append(document.getElementById(dragElemId));
				div2.style.border="none";
				div2.style.boxShadow="none";
		}
		else if(dragElemId=='four' && jakhali=='div6'){
				event.target.append(document.getElementById(dragElemId));
				div6.style.border="none";
				div6.style.boxShadow="none";
		}
		else if(dragElemId=='five' && jakhali=='div5'){
				event.target.append(document.getElementById(dragElemId));
				div5.style.border="none";
				div5.style.boxShadow="none";
		}
		else if(dragElemId=='six' && jakhali=='div4'){
				event.target.append(document.getElementById(dragElemId));
				div4.style.border="none";
				div4.style.boxShadow="none";
		}
		else if(dragElemId=='seven' && jakhali=='div9'){
				event.target.append(document.getElementById(dragElemId));
				div9.style.border="none";
				div9.style.boxShadow="none";
		}
		else if(dragElemId=='nine' && jakhali=='div7'){
				event.target.append(document.getElementById(dragElemId));
				div7.style.border="none";
				div7.style.boxShadow="none";
		}
		else if(dragElemId=='ten' && jakhali=='div12'){
				event.target.append(document.getElementById(dragElemId));
				div12.style.border="none";
				div12.style.boxShadow="none";
		}
		else if(dragElemId=='eleven' && jakhali=='div11'){
				event.target.append(document.getElementById(dragElemId));
				div11.style.border="none";
				div11.style.boxShadow="none";
		}
		else if(dragElemId=='twelve' && jakhali=='div10'){
				event.target.append(document.getElementById(dragElemId));
				div10.style.border="none";
				div10.style.boxShadow="none";
		}
		else if(dragElemId=='fourten' && jakhali=='div14'){
				event.target.append(document.getElementById(dragElemId));
				div14.style.border="none";
				div14.style.boxShadow="none";
		}
		else{

			document.getElementById(jakhali).style.border="none";
			document.getElementById(jakhali).style.boxShadow=" 0 8px 16px 0 rgba(255, 0, 0, 0.8), 0 12px 40px 0 rgba(255, 0, 0, 0.80)";
		}
	}
	div15.style.border="none";
	div1.style.border="none";
	div8.style.border="none";
	div3.style.border="none";
	div13.style.border="none";



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
		countTime(111,"timertext");



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
		secondCountTime(181,"secondTimertext");


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
			var div2=document.getElementById('div2');
			var div4=document.getElementById('div4');
			var div5=document.getElementById('div5');
			var div6=document.getElementById('div6');
			var div7=document.getElementById('div7');
			var div10=document.getElementById('div10');
			var div9=document.getElementById('div9');
			var div11=document.getElementById('div11');
			var div12=document.getElementById('div12');
			var div14=document.getElementById('div14');
				if(div2.hasChildNodes() && div4.hasChildNodes() && div5.hasChildNodes()
			 	&& div6.hasChildNodes() && div7.hasChildNodes()
			  	&& div9.hasChildNodes() && div10.hasChildNodes() && div11.hasChildNodes()
			   	&& div12.hasChildNodes() && div14.hasChildNodes()){
				setTimeout(()=>dowom.style.display="none",0);
				setTimeout(()=>sewom.style.display="none",0);
				
				setTimeout(()=>chaharom.style.display="block",1000);
				setTimeout(()=>chaharom.style.display="none",10000);

				setTimeout(()=>panjom[0].style.display="block",10001);
				setTimeout(()=>panjom[0].style.display="none",17000);

				setTimeout(()=>shashom[0].style.display="block",17001);
				setTimeout(()=>shashom[0].style.display="none",32000);

				setTimeout(function audioAnim(){
					if(shashom[0].style.display="none"){
						var gerda=document.getElementById('gerda');
						gerda.style.display="none";
						audio.pause();
						var NewAudio = new Audio("../sounds/lezat namaz.m4a");
						NewAudio.play();
						var video=document.getElementsByTagName('video');
						video[0].style.display="none";
						setTimeout(()=>haftom.style.display="block",0);
						setTimeout(()=>haftom.style.display="none",456000);
						setTimeout(()=>hashtom.style.display="block",456010);
					}
				},32001);
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
					if(div2.hasChildNodes() && div4.hasChildNodes() && div5.hasChildNodes()
				 	&& div6.hasChildNodes() && div7.hasChildNodes()
				  	&& div9.hasChildNodes() && div10.hasChildNodes() && div11.hasChildNodes()
				   	&& div12.hasChildNodes() && div14.hasChildNodes()){
						setTimeout(()=>secondTimertext.style.display="none",0);
						setTimeout(()=>dowom.style.display="none",500);
						
						setTimeout(()=>chaharom.style.display="block",1000);
						setTimeout(()=>chaharom.style.display="none",10000);

						
						setTimeout(()=>panjom[0].style.display="block",10001);
						setTimeout(()=>panjom[0].style.display="none",17000);

				
						setTimeout(()=>shashom[0].style.display="block",17001);
						setTimeout(()=>shashom[0].style.display="none",32000);

						
						setTimeout(function audioAnim(){
							if(shashom[0].style.display="none"){
								var gerda=document.getElementById('gerda');
								gerda.style.display="none";
								audio.pause();
								var NewAudio = new Audio("../sounds/lezat namaz.m4a");
								NewAudio.play();
								var video=document.getElementsByTagName('video');
								video[0].style.display="none";
								setTimeout(()=>haftom.style.display="block",0);
								setTimeout(()=>haftom.style.display="none",456000);
								setTimeout(()=>hashtom.style.display="block",456010);
							}
						},32001);

					}
					else{
						setTimeout(()=>secondTimertext.style.display="none",0);
						setTimeout(()=>dowom.style.display="none",200);
						setTimeout(()=>sewom.style.display="none",200);
						var fail=document.getElementById('failCurtain');
						setTimeout(()=>fail.style.display="block",1000);
						setTimeout(()=>fail.style.display="none",10000);
						setTimeout(()=>window.location="../html/hades 21.html",10010);
					}
				},70000);

			}
		},111000);