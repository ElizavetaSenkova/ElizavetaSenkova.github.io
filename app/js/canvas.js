			
			var canvas, stage, exportRoot, current, dir, deff,loader = [],
					anim_elems = [
							0,
							{title:'Высокая адгезия (липкость)', link:'Высокая адгезия (липкость)', w:'1600', h:'755', t:'-192px', l:'-320px'},
							{title:'Напряжение пробоя 6000В', link:'Напряжение пробоя 6000В', w:'1592', h:'840', t:'-238px', l:'-320px'},
							{title:'Сохраняет свойства от –50°C до +80°C', link:'Сохраняет свойства до –50°C', w:'1600', h:'840', t:'-192px', l:'-320px'},
							{title:'Растягивается на 200%', link:'Растягивается на 200%', w:'1600', h:'840', t:'-242px', l:'-320px'},
							{title:'Не поддерживает горение', link:'Самозатухающая', w:'1600', h:'840', t:'-242px', l:'-320px'}
					];

	 

					

			function init(elId) { 
				
					dir = 'assets/tape/images/'+elId+'/';
					$.getScript('/assets/tape/izolenta_'+ elId +'.js', function() {
							canvas = document.getElementById("canvas"+elId);
							$(canvas).attr({
									'width': anim_elems[elId].w,
									'height': anim_elems[elId].h
							});
							$(canvas).css({
										'margin-top': anim_elems[elId].t,
										'margin-left': anim_elems[elId].l
							});
						//	$('.anim-title').text(anim_elems[elId].title);
						//	$('.anim-menu-elem[data-id="'+elId+'"]').text(anim_elems[elId].link).addClass('active').siblings().removeClass('active').text('');
							images[elId] = images||{};

							 loader[elId] = new createjs.LoadQueue(false);
							loader[elId].addEventListener("fileload", handleFileLoad);
							loader[elId].addEventListener("complete", function() {handleComplete(elId)});
							loader[elId].loadManifest(lib.properties.manifest);
					});
			}

			function handleFileLoad(evt) {
					if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
			}

			function handleComplete(id) {
				
				exportRoot = new lib.izolenta();
					console.log(id);
					stage = new createjs.Stage(canvas);
					stage.addChild(exportRoot);
					stage.update();

					createjs.Ticker.setFPS(lib.properties.fps);
					createjs.Ticker.addEventListener("tick", stage);
					//deff[1].resolve();
					//$("#canvas"+id).css({'margin-top':anim_elems[id].t,'margin-left':anim_elems[id].l});
			}

			$().ready( function() {
					init(1);
			});
