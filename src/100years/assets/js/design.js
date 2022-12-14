$(document).ready(function(){
	
	$('#wrapper').show();
	var len = 50, i = 0, wW = 900, wH = 1200, repeatData = 0;;
	var pos = [];
	var snowRepeatState = false;
	var tl = new TimelineMax();

	$(window).resize(function(){
		bgPos();
	});// resize 
	function bgPos(){
		var winW = $(window).width();
		if(winW > 900){
			$('body.index').css('background-position', 'center top');
		} else {
			$('body.index').css('background-position' , '-550px top');
		};
	};
	bgPos();
	function snowInit(){
			while(i<len){
			i ++;
			snowPos();
			snowMoving(i);
		};//E while

	};//E snow
	
	function snowMoving(i){
		$('.snow').clone().appendTo('#wrapper').attr('class','snow'+i).css(
				{
					'width'	:	Math.round((Math.random() * 13 + 20))+'px',
					'position'	:	'absolute',
					'top'	:	'-50px',
					'left'	:	Math.round((Math.random() * 500 + 100))+'px',
					'opacity' : Math.random() * 0.2+ 0.8
				}
			);
			if( i % 2 == 0){
				
				var delay1 = 0;
				snowRepeatState ? delay1 = repeatData : delay1 =  pos[0].delay;
				TweenMax.to($('.snow'+i), pos[0].speed,  {bezier:[{x:pos[0].x1,  y:pos[0].y1}, {x:pos[0].x2,  y:pos[0].y2}, {x:pos[0].x3,  y:pos[0].y3}], onComplete:function(_this, num){
					$_this = _this;
					$_this.remove();
					snowRepeat(num);
				},delay:delay1, autoAlpha:pos[0].alpha, onCompleteParams:[$('.snow'+i), i]});

			} else if( i % 3 == 0){
				
				var delay2 = 0;
				snowRepeatState ? delay2 = repeatData : delay2 =  pos[1].delay;
				TweenMax.to($('.snow'+i), pos[1].speed,  {bezier:[{x:pos[1].x1,  y:pos[1].y1}, {x:pos[1].x2,  y:pos[1].y2}, {x:pos[1].x3,  y:pos[1].y3}], onComplete:function(_this, num){
					$_this = _this;
					$_this.remove();
					snowRepeat(num);
				},delay:delay2, autoAlpha:pos[1].alpha, onCompleteParams:[$('.snow'+i), i]});

			} else if( i % 5 == 0){
				
				var delay3 = 0;
				snowRepeatState ? delay3 = repeatData : delay3 =  pos[2].delay;
				TweenMax.to($('.snow'+i), pos[2].speed,  {bezier:[{x:pos[2].x1,  y:pos[2].y1}, {x:pos[2].x2,  y:pos[2].y2}, {x:pos[2].x3,  y:pos[2].y3}], onComplete:function(_this, num){
					$_this = _this;
					$_this.remove();
					snowRepeat(num);
				},delay:delay3, autoAlpha:pos[2].alpha, onCompleteParams:[$('.snow'+i), i]});

			} else {
				
				var delay4 = 0;
				snowRepeatState ? delay4 = repeatData : delay4 =  pos[2].delay;
				TweenMax.to($('.snow'+i), pos[3].speed,  {bezier:[{x:pos[3].x1,  y:pos[3].y1}, {x:pos[3].x2,  y:pos[3].y2}, {x:pos[3].x3,  y:pos[3].y3}], onComplete:function(_this, num){
					$_this = _this;
					$_this.remove();
					snowRepeat(num);
				},delay:delay4, autoAlpha:pos[3].alpha, onCompleteParams:[$('.snow'+i), i]});

			};//E if
	}

	function snowPos(){
		pos = [
		{
			'x1'	:	Math.round(Math.random() *( 150)),	
			'y1'	:	Math.random() * 20+ (wH / 100 * 10),					//10~30%
			'x2'	:	Math.round(Math.random() *( 150)),	
			'y2'	:	Math.random() * 30 + (wH / 100 * 40),					//40~70%
			'x3'	:	Math.round(Math.random() *( 150)),	
			'y3'	:	Math.random()  + (wH / 100 * 110),					//80~110%
			'speed' : Math.round(Math.random()	*	7	+	15),
			'delay' : Math.round(Math.random() * 20),
			'alpha' : 0
		},
		{
			'x1'	:	Math.round(Math.random() *( 300) + ( 100)),	
			'y1'	:	Math.random() * 20+ (wH / 100 * 10),					//10~30%
			'x2'	:	Math.round(Math.random() *( 300) + ( 100)),	
			'y2'	:	Math.random() * 30 + (wH / 100 * 40),					//40~70%
			'x3'	:	Math.round(Math.random() *( 300) + ( 100)),	
			'y3'	:	Math.random() + (wH / 100 * 110),					//80~110%
			'speed' : Math.round(Math.random()	*	7	+	15),
			'delay' : Math.round(Math.random() * 20),
			'alpha' : 0
		},
		{
			'x1'	:	Math.round(Math.random() *( -300) ),	
			'y1'	:	Math.random() * 20+ (wH / 100 * 10),					//10~30%
			'x2'	:	Math.round(Math.random() *( -300) ),	
			'y2'	:	Math.random() * 30 + (wH / 100 * 40),					//40~70%
			'x3'	:	Math.round(Math.random() *( -300) ),	
			'y3'	:	Math.random()  + (wH / 100 * 110),					//80~110%
			'speed' : Math.round(Math.random()	*	7	+	15),
			'delay' : Math.round(Math.random() * 20),
			'alpha' : 0
		},
		{
			'x1'	:	Math.round(Math.random() *( 300) - ( 100)),	
			'y1'	:	Math.random() * 20+ (wH / 100 * 10),					//10~30%
			'x2'	:	Math.round(Math.random() *( 300) - ( 100)),
			'y2'	:	Math.random() * 30 + (wH / 100 * 40),					//40~70%
			'x3'	:	Math.round(Math.random() *( 300) - ( 100)),	
			'y3'	:	Math.random()  + (wH / 100 * 110),					//80~110%
			'speed' : Math.round(Math.random()	*	7	+	15),
			'delay' : Math.round(Math.random() * 20),
			'alpha' : 0
		}
		];
	}
	

		function snowRepeat(num){
			snowRepeatState = true;
			 snowPos();
			 snowMoving(num);
		};//

		snowInit();

		
		if(navigator.appVersion.indexOf('MSIE 8.0') >= 0 || navigator.appVersion.indexOf('MSIE 7.0') >= 0 ){
		$('.letter').css({
			'left' : '380px',
			'top' : '355px'
			
		});

		} else {
			TweenMax.to($('.letter'),0,{alpha:0,top:-200});
			TweenMax.to($('.letter'),0.5,{alpha:1});
			TweenMax.to($('.letter'), 3.5, {bezier:{curviness:1.5, values:[{x:( -400),  y:400},{x:( -250),  y:100}, {x:( -310),  y:550}], autoRotate:["x","y","rotation",240,false]}, ease:Power1.easeInOut, delay:0.5});
			tl.to('#wrapper>h1',0,{marginTop:"100px",opacity:0})
			.to('#wrapper>.post',0,{opacity:0, marginTop:"0"})
			.to('#wrapper>.stitle',0,{opacity:0})
			.to('#wrapper>h1',1.5,{marginTop:"64px",opacity:1, ease:Cubic.easeInOut})
			.to('#wrapper>.stitle',0.8,{opacity:1, ease:Cubic.easeIn})
			.to('#wrapper>.post',1.5,{opacity:1, marginTop:'-50px', ease:Cubic.easeOut,delay:-0.8})
			
			TweenMax.to($('.event1 .nav1'),0,{top:400});
			TweenMax.to($('.event1 .nav2'),0,{top:440});
			TweenMax.to($('.event1 .nav1'),1.5,{ease:Bounce.easeOut,top:210});
			TweenMax.to($('.event1 .nav2'),1.5,{ease:Bounce.easeOut,top:250, delay:0.2});

			TweenMax.to($('.event2 .nav1'),0,{top:400});
			TweenMax.to($('.event2 .nav2'),0,{top:400});
			TweenMax.to($('.event2 .nav1'),1.5,{ease:Bounce.easeOut,top:220, delay:0.2});
			TweenMax.to($('.event2 .nav2'),1.5,{ease:Bounce.easeOut,top:220});

		};//E if 
		
		
		

	});//E doc ready