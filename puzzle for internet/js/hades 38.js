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

		if(dragElemId=='two' && jakhali=='div3'){
				event.target.append(document.getElementById(dragElemId));
				div3.style.boxShadow="none";
		}
		else if(dragElemId=='four' && jakhali=='div1'){
				event.target.append(document.getElementById(dragElemId));
				div1.style.boxShadow="none";
		}
		else if(dragElemId=='five' && jakhali=='div8'){
				event.target.append(document.getElementById(dragElemId));
				div8.style.boxShadow="none";
		}
		else if(dragElemId=='seven' && jakhali=='div6'){
				event.target.append(document.getElementById(dragElemId));
				div6.style.boxShadow="none";
		}
		else if(dragElemId=='ten' && jakhali=='div11'){
				event.target.append(document.getElementById(dragElemId));
				div11.style.boxShadow="none";
		}
		else if(dragElemId=='twelve' && jakhali=='div9'){
				event.target.append(document.getElementById(dragElemId));
				div9.style.boxShadow="none";
		}
		else if(dragElemId=='thirten' && jakhali=='div16'){
				event.target.append(document.getElementById(dragElemId));
				div16.style.boxShadow="none";
		}
		else if(dragElemId=='twenty' && jakhali=='div17'){
				event.target.append(document.getElementById(dragElemId));
				div17.style.boxShadow="none";
		}
		else if(dragElemId=='eightten' && jakhali=='div19'){
				event.target.append(document.getElementById(dragElemId));
				div19.style.boxShadow="none";
		}
		else if(dragElemId=='fiften' && jakhali=='div14'){
				event.target.append(document.getElementById(dragElemId));
				div14.style.boxShadow="none";
		}
		else if(dragElemId=='twentyThree' && jakhali=='div22'){
				event.target.append(document.getElementById(dragElemId));
				div22.style.boxShadow="none";
		}
		else if(dragElemId=='twentyOne' && jakhali=='div24'){
				event.target.append(document.getElementById(dragElemId));
				div24.style.boxShadow="none";
		}
		else{

			document.getElementById(jakhali).style.border="none";
			document.getElementById(jakhali).style.boxShadow=" 0 8px 16px 0 rgba(255, 0, 0, 0.8), 0 12px 40px 0 rgba(255, 0, 0, 0.80)";
		}
	}
	div2.style.boxShadow="none";
	div4.style.boxShadow="none";
	div5.style.boxShadow="none";
	div15.style.boxShadow="none";
	div10.style.boxShadow="none";
	div7.style.boxShadow="none";
	div12.style.boxShadow="none";
	div18.style.boxShadow="none";
	div20.style.boxShadow="none";
	div21.style.boxShadow="none";
	div23.style.boxShadow="none";




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
		countTime(131,"timertext");



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
		secondCountTime(211,"secondTimertext");


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
				var div3=document.getElementById('div3');
				var div6=document.getElementById('div6');
				var div8=document.getElementById('div8');
				var div9=document.getElementById('div9');
				var div11=document.getElementById('div11');
				var div14=document.getElementById('div14');
				var div16=document.getElementById('div16');
				var div17=document.getElementById('div17');
				var div19=document.getElementById('div19');
				var div22=document.getElementById('div22');
				var div24=document.getElementById('div24');
				if(div1.hasChildNodes() && div3.hasChildNodes() && div6.hasChildNodes()
				&& div8.hasChildNodes() && div9.hasChildNodes() && div11.hasChildNodes()
				&& div14.hasChildNodes() && div16.hasChildNodes() && div17.hasChildNodes()
				&& div19.hasChildNodes() && div22.hasChildNodes() && div24.hasChildNodes()){
				setTimeout(()=>dowom.style.display="none",0);
				setTimeout(()=>sewom.style.display="none",0);
				
				setTimeout(()=>chaharom.style.display="block",1000);
				setTimeout(()=>chaharom.style.display="none",10000);

				setTimeout(()=>panjom[0].style.display="block",10001);
				setTimeout(()=>panjom[0].style.display="none",18000);

				setTimeout(()=>shashom[0].style.display="block",18001);
				setTimeout(()=>shashom[0].style.display="none",37000);

				setTimeout(function audioAnim(){
					if(shashom[0].style.display="none"){
						var gerda=document.getElementById('gerda');
						gerda.style.display="none";
						audio.pause();
						var video=document.getElementsByTagName('video');
						video[0].style.display="none";
						haftom.style.display="block";
						var myVideo=document.createElement('video');
						myVideo.src="../videos/baqara.mp4";
						myVideo.setAttribute('controls',true);
						myVideo.setAttribute('autoplay',true);
						haftom.appendChild(myVideo);
						setTimeout(()=>haftom.style.display="none",52000);
						setTimeout(()=>hashtom.style.display="block",52010);
					}
				},37001);
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
					if(div1.hasChildNodes() && div3.hasChildNodes() && div6.hasChildNodes()
					&& div8.hasChildNodes() && div9.hasChildNodes() && div11.hasChildNodes()
					&& div14.hasChildNodes() && div16.hasChildNodes() && div17.hasChildNodes()
					&& div19.hasChildNodes() && div22.hasChildNodes() && div24.hasChildNodes()){
						setTimeout(()=>secondTimertext.style.display="none",0);
						setTimeout(()=>dowom.style.display="none",500);
						
						setTimeout(()=>chaharom.style.display="block",1000);
						setTimeout(()=>chaharom.style.display="none",10000);

						
						setTimeout(()=>panjom[0].style.display="block",10001);
						setTimeout(()=>panjom[0].style.display="none",18000);

				
						setTimeout(()=>shashom[0].style.display="block",18001);
						setTimeout(()=>shashom[0].style.display="none",37000);

						
						setTimeout(function audioAnim(){
							if(shashom[0].style.display="none"){
							var gerda=document.getElementById('gerda');
								gerda.style.display="none";
								audio.pause();
								var video=document.getElementsByTagName('video');
								video[0].style.display="none";
								haftom.style.display="block";
								var myVideo=document.createElement('video');
								myVideo.src="../videos/baqara.mp4";
								myVideo.setAttribute('controls',true);
								myVideo.setAttribute('autoplay',true);
								haftom.appendChild(myVideo);
								setTimeout(()=>haftom.style.display="none",52000);
								setTimeout(()=>hashtom.style.display="block",52010);
							}
						},37001);

					}
					else{
						setTimeout(()=>secondTimertext.style.display="none",0);
						setTimeout(()=>dowom.style.display="none",200);
						setTimeout(()=>sewom.style.display="none",200);
						var fail=document.getElementById('failCurtain');
						setTimeout(()=>fail.style.display="block",1000);
						setTimeout(()=>fail.style.display="none",10000);
						setTimeout(()=>window.location="../html/hades 34.html",10010);
					}
				},80000);

			}
		},131000);