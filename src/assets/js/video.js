$(document).ready(function() {
	/*
	 *  pc绔垽鏂�
	 */
	function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
			"SymbianOS", "Windows Phone",
			"iPad", "iPod"
		];
		var flag = true;
		for(var v = 0; v < Agents.length; v++) {
			if(userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
	/*
	 * 闅忔満鏁�
	 * */
	function _charecter() {
		var character = String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0));
		return character;
	}
	/*
	 *  琛�0
	 */
	function addzero(num) {
		if(num < 10) {
			return("0" + num);
		} else {
			return num;
		}
	}
	/*
	 *  瑙嗛浜嬩欢鐩戝惉浜嬩欢
	 * 
	 * 	@eventName 瑙嗛浜嬩欢鍚嶇О
	 *  @m	瑙嗛瀵硅薄
	 * 	@fun 鍥炶皟鍑芥暟
	 * 
	 */
	var eventTester = function(eventName, m, fun) {
		if(window.addEventListener) {
			m.addEventListener(eventName, function() {
				if(fun) {
					fun(this);
				}
				//console.log((new Date()).getTime(),eventName);
			}, false);
		} else {
			m.attachEvent('on' + eventName, function() {
				if(fun) {
					fun(this);
				}
				// console.log((new Date()).getTime(),eventName);
			});
		}
	}
	/*
	 *  瑙嗛鎾斁
	 * 
	 */
	//瑙嗛鎾斁
	$(".m-video").on("click", function() {
		if($(".video-box").length > 0) {
			return;
		}
		document.ondragstart = function() {
			return false;
		};
		window.onresize = function() {
			iteme = setTimeout(function() {
				if(!checkFull()) {
					//瑕佹墽琛岀殑鍔ㄤ綔
					$("body").removeClass("noscroll");
					$(".video-box").removeClass("quanping");
					$(".video-fullscreen").find("i").removeClass("i-suoxiao").addClass("i-quanping");
				} else {
					$("body").addClass("noscroll");
					$(".video-box").addClass("quanping");
					$(".video-fullscreen").find("i").removeClass("i-quanping").addClass("i-suoxiao");
				}
			}, 0)
		}
		function checkFull() {
			var explorer = window.navigator.userAgent.toLowerCase();
			console.log(window.screen.width, window.outerWidth, window.screen.height, window.outerHeight)
			if(explorer.indexOf('chrome') > 0) { //chrome
				if((window.screen.width - window.outerWidth <= 17) && (window.screen.height - window.outerHeight <= 17)) {
					return true;
				} else {
					return false;
				}
			} else { //IE 9+  fireFox
				if(window.outerWidth == screen.width) {
					return true;
				} else {
					return false;
				}
			}
		}

		function quanpin(elem) {
			if(IsPC()) {
				var elem = document.documentElement;
			} else {
				if(elem.paused && elem.networkState <= elem.HAVE_METADATA) {
					elem.play();
					setTimeout(function() {
						elem.pause();
						elem.webkitEnterFullScreen();
						return;
					}, 0);
				} else {
					elem.webkitEnterFullScreen();
					return;
				}
			}
			if(elem.requestFullscreen) {
				//"W3C";
				elem.requestFullscreen();
			} else if(elem.mozRequestFullScreen) {
				//FireFox
				elem.mozRequestFullScreen();

			} else if(elem.webkitRequestFullScreen) {
				//Chrome绛�
				elem.webkitRequestFullScreen();

			} else if(elem.msRequestFullscreen) {
				//IE11
				console.log(11);
				elem.msRequestFullscreen();
			}
		}

		function exitquanping() {
			if(document.exitFullscreen) {

				document.exitFullscreen();

			} else if(document.mozCancelFullScreen) {

				document.mozCancelFullScreen();

			} else if(document.webkitCancelFullScreen) {

				document.webkitCancelFullScreen();

			} else if(document.msExitFullscreen) {

				document.msExitFullscreen();

			}
		}
		var menuarr;
		var menustr="";
		if($(this).attr("data-menu")){
			menuarr=$(this).attr("data-menu").split(" ");
			$(menuarr).each(function(k){
				menustr+="<li class='video-menu-item video-menu-item-"+k+" "+(k==0?"video-active":"")+"'  >"+this+"</li>";
			})
		}

		var datasrc = $(this).attr("data-src"),src='';
		var  dangqian="";
		if(src.indexOf("mp4")<0&&$(this).attr("data-menu")){
			dangqian=menuarr[0];
			src = datasrc+dangqian+".mp4";
		}else{
			src = datasrc;
		}
		if(!src) {
			alert("鏈坊鍔犺棰戦摼鎺�");
		}
		console.log(src);
		var menu=["<div class='video-definition video-tooltip '>",
			"<button class='video-button video-tooltip-toggle video-definition-button'>",
			"<span>"+dangqian+"</span>",
			"</button>",
			"<div class='video-tooltip-content'>",
			"<ul class='video-menu'>",
				menustr,
			"</ul>",
			"</div>",
			"</div>"];
		if(!$(this).attr("data-menu")){
			menu=[]
		}
		var vClass = $(this).attr("data-heibian") ? "heibian" : "";
		var videoid = "my" + _charecter() + _charecter();
		var iteme = null;
		var str = ["<div class='video-box " + vClass + "' id='" + videoid + "box'>",
			"<div class='video-bg'></div>",
			"<div class='video-loading-pulse'></div>",
			"<div class='video-close'></div>",
			"<div class='video-container f-czspjuzhong'>",
			"<div class='video-div'>",
			"<div class='video-video'>",
			"<video id=" + videoid + "  x-webkit-airplay='' playsinline='' webkit-playsinline='' ",
			"src='" + src + "'",
			">",
			"</video>",
			"</div>",
			"<div class='video-bofang f-czspjuzhong '> <i class='i i-bofang '></i></div>",
			"<div class='video-loading yihuanchun f-czspjuzhong'> <i class='i i-loading '></i></div>",
			"<div class='video-ui'>",
			"<div class='video-progress'>",
			"<div class='video-tooltip video-tinytip video-tooltip-time'>",
			"<button class='video-tooltip-toggle'>",
			"<span class='video-tooltip-value'></span>",
			"</button>",
			"<div class='video-tooltip-content'>",
			"<div class='video-tinytip-content'>",
			"<span class='video-text'></span>",
			"</div>",
			"</div>",
			"</div>",
			"<div class='video-progress-padding'></div>",
			"<div class='video-progress-list'>",
			"<div class='video-progress-buffer'></div>",
			"<div class='video-progress-hover'></div>",
			"<div class='video-progress-play'><span class='video-progress-handle'></span></div>",
			"</div>",
			"</div>",
			"<div class='video-controls-buttons'>",
			"<button class='video-bofang video-button'> <i class='i i-bofang f-czspjuzhong'></i></button>",
			"<span class='video-time-panel'>",
			"<span class='video-time-panel-current'>00:00</span>",
			"<span class='video-time-panel-split'>&nbsp&nbsp/&nbsp&nbsp</span>",
			"<span class='video-time-panel-total'>00:00</span>",
			"</span>",
			"<div class='video-fullscreen'>",
			"<button class='video-button video-tooltip-toggle video-fullscreen-default' type='button'>",
			"<i class='i i-quanping f-czspjuzhong'></i>",
			"</button>",
			"</div>",
			menu.join(""),
			"<div class='video-volume video-popup'>",
			"<button class='video-button video-btn-volume' data-state='volume'>",
			"<i class='i i-voice-on f-czspjuzhong'></i>",
			"</button>",
			"<div class='video-volume-slider video-popup-content'>",
			"<div class='video-volume-range'>",
			"<div class='video-volume-range-current' style='height: 50%;'>",
			"<div class='video-volume-handle'></div>",
			"</div>",
			"</div>",
			"<div class='video-tinytip-tiao'></div>",
			"</div>",
			"</div>",
			"</div>",
			"</div>",
			"</div>",
			"</div>",
			"</div>"
		]
		$("body").append(str.join(""));
		var meido = document.getElementById(videoid);
		meido.volume = .5;
		var videobox = $("#" + videoid + "box");

		/*瑙嗛缂撳瓨鎴愬姛鍙互鑾峰彇闀垮害鍜屾挱鏀�*/
		eventTester("waiting", meido, function() {
			console.log(" 绛夊緟鏁版嵁锛屽苟闈為敊璇�");
			$(".video-loading").removeClass("yihuanchun");
		});
		eventTester("playing", meido, function() {
			console.log("鎾斁浜�");
			videobox.addClass("video-playing").removeClass("video-pause");
			$(".video-loading").addClass("yihuanchun");
		});
		eventTester("stalled", meido, function() {
			console.log("/缃戦€熷け閫�");
		});
		eventTester("ended", meido, function() {
			//console.log("鎾斁缁撴潫");
//			$(".video-close").click();
		});
		eventTester("canplay", meido, function() {
			//console.log("鍙互鎾斁");
			$(".video-container",videobox).addClass("video-ready");
			meido.canplay=true;
			meido.play();
			$(".video-bofang").find("i").removeClass("i-bofang").addClass("i-zhanting").css("transition","none");
		});
		eventTester("loadedmetadata", meido, function() {
			//console.log("鎴愬姛鑾峰彇鏃堕暱")
			$(".video-time-panel-total").html(addzero(parseInt(meido.duration / 60)) + ":" + addzero(parseInt(meido.duration % 60)));
		});
		eventTester("suspend",meido,function(){
//			$(".video-loading").removeClass("yihuanchun");
			console.log("寤惰繜涓嬭浇")
		})
		eventTester("loadstart",meido,function(){
			console.log("瀹㈡埛绔紑濮嬭姹傛暟鎹�")
			$(".video-loading").removeClass("yihuanchun");
		})
		eventTester("progress",meido,function(){
			$(".video-container",videobox).addClass("video-ready");
			console.log("瀹㈡埛绔鍦ㄨ姹傛暟鎹�")
		})
		/*杩涘害鐩稿叧*/
		eventTester("timeupdate", meido, function() {
			//console.log("鎾斁鏃堕棿鏀瑰彉");
			if(meido.canplay){
				var currentTime = meido.currentTime;
				var buffered = meido.buffered.end(0);
				var duration = meido.duration;
				for(var i = 0; i < meido.buffered.length; i++) {
					if(currentTime < meido.buffered.end(i)) {
						buffered = meido.buffered.end(i);
						break;
					}
				}
				var buff_pro = parseInt((buffered / duration) * 100);
				$(".video-time-panel-current").html(addzero(parseInt(currentTime / 60)) + ":" + addzero(parseInt(currentTime % 60)));
				$(".video-progress-play").css("width", currentTime / duration * 100 + "%");
				$(".video-progress-buffer").css("width", buff_pro + "%");
			}
		});
		var mx = 0;
		$(document).on("mousemove", function(e) {
			mx = e.screenX;
		})
		eventTester("play", meido, function(e) {
			videobox.addClass("video-playing").removeClass("video-pause");
			$(".video-bofang.f-czspjuzhong").addClass("video-hide");
			//var ny=e.cy
			var px = mx;
			clearTimeout(iteme);
			iteme = setTimeout(function() {
				if(px == mx) {
					$(".video-div").addClass("video-hide-ui");
				}
			}, 5000);
		});
		eventTester("pause", meido, function() {
			videobox.addClass("video-pause").removeClass("video-playing");
			$(".video-bofang.f-czspjuzhong").removeClass("video-hide");
		});
		eventTester("ended", meido, function() {
			videobox.removeClass("video-pause video-playing");
			$(".video-bofang").find("i").removeClass("i-zhanting").addClass("i-bofang");
//			$(".video-bofang.f-czspjuzhong").removeClass("video-hide");
		});
		/*
		 * 鎾斁鏆傚仠鍒囨崲
		 * 
		 * */
		$(".video-bofang,.video-video").on("click", function(e) {
			if(IsPC() || e.currentTarget.classList[0] == "video-bofang" || e.target.classList[0] == "video-bofang") {
				clearTimeout(iteme);
				iteme = setTimeout(function() {
					//do function鍦ㄦ澶勫啓鍗曞嚮浜嬩欢瑕佹墽琛岀殑浠ｇ爜
					if($(".video-bofang").find("i").hasClass("i-bofang")) {
						meido.play();
						$(".video-bofang").find("i").removeClass("i-bofang").addClass("i-zhanting");
					} else {
						meido.pause();
						$(".video-bofang").find("i").removeClass("i-zhanting").addClass("i-bofang");
					}
				},100);
			} else {
				if(videobox.hasClass("hideui")) {
					videobox.removeClass("hideui");
				} else {
					videobox.addClass("hideui");
				}
			}
		});
		/*
		 * 鍙屽嚮鍏ㄥ睆
		 * 
		 * */
		$(".video-video").on("dblclick", function() {
			if(IsPC()) {
				clearTimeout(iteme);
				if(videobox.hasClass("quanping")) {
					exitquanping();
				} else {
					quanpin();
				}
			}
		});
		/*
		 *
		 *  榧犳爣绉诲叆闅愯棌UI
		 * 
		 * */
		$(".video-ui").on("mouseleave", function() {
			clearTimeout(iteme);
			iteme = setTimeout(function() {
				//do function鍦ㄦ澶勫啓鍗曞嚮浜嬩欢瑕佹墽琛岀殑浠ｇ爜
				$(".video-div").addClass("video-hide-ui");
			}, 5000);

		});
		$(".video-ui").on("mouseenter", function() {
			$(".video-div").removeClass("video-hide-ui");
		});
          $(".video-bg").click(function(){
                 videobox.remove();
          })
		/*
		 *
		 *  鍏抽棴video
		 * 
		 * */
		$(".video-close").on("click touchstart", function() {
			videobox.remove();
		});
		//杩涘害鏉￠潰鏉跨浉瀵规祻瑙堝櫒鐨勫乏杈圭殑璺濈
		var parent_left = 0;
		//榧犳爣浣嶇疆鐩稿娴忚鍣ㄧ殑宸﹁竟鐨勮窛绂�
		var e_left = 0;
		/*
		 *  杩涘害鏉�
		 */
		$(".video-progress", videobox).on("mousemove touchmove", function(e) {
			var event;
			if(e.offsetX) {
				event = e;
			} else if(e.originalEvent.changedTouches[0].clientX) {
				event = e.originalEvent.changedTouches[0];
			}
			parent_left = $(this).offset().left;
			//榧犳爣浣嶇疆鐩稿娴忚鍣ㄧ殑宸﹁竟鐨勮窛绂�
			e_left = event.pageX;
			var width = e_left - parent_left;
			var wb = (width / $(this).width());
			var tt = wb * meido.duration;
			$(".video-tooltip", $(this)).css({
				"left": (wb * 100) + "%"
			});
			$(".video-progress-hover", videobox).css({
				"width": (wb * 100) + "%"
			});
			$(".video-text", videobox).html(addzero(parseInt(tt / 60)) + ":" + addzero(parseInt(tt % 60)));
		});
		$(".video-progress", videobox).on("click touchstart touchend", function(e) {
			videobox.removeClass("video-playing");
			var percent = ($(".video-progress-hover", videobox).width() / $(this).width());
			console.log(percent);
			meido.currentTime = (percent * meido.duration);
		});
		/*
		 *  闊抽噺
		 */
		var canMove = false;
		$(".video-tinytip-tiao", videobox).on("mousedown", function(e) {
			canMove = true;
			console.log(canMove);
			var zi = $(".video-volume-range-current", videobox);
			if(canMove) {
				volumeh = 1 - e.offsetY / $(this).height();
				console.log(volumeh);
				zi.css("height", volumeh * 100 + "%")
			} else {
				return;
			}
		});
		$(document).on("mouseup", function(e) {
			canMove = false;
		});
		var volumeh = 0;
		$(".video-tinytip-tiao", videobox).on("mousemove ", function(e) {
			var zi = $(".video-volume-range-current", videobox);
			var hh = $(".video-volume-range", videobox);
			if(canMove) {
				console.log(e);
				volumeh = 1 - (e.offsetY - 16) / hh.height();
				console.log(volumeh);
				if(volumeh <= 0) {
					$(".video-btn-volume i").removeClass("i-voice-on").addClass("i-voice-off");
				} else if(volumeh > 1) {
					volumeh = 1;
				} else {
					$(".video-btn-volume i").removeClass("i-voice-off").addClass("i-voice-on");
				}
				zi.css("height", volumeh * 100 + "%")
				meido.volume = volumeh;
			} else {
				return;
			}
		});
		$(".video-btn-volume", videobox).on("click", function() {
			if($(this).find("i").hasClass("i-voice-on")) {
				meido.volume = false;
				volumeh = $(".video-volume-range-current", videobox).height() / $(".video-volume-range", videobox).height();
				console.log(volumeh);
				$(".video-volume-range-current", videobox).css("height", 0 + "%");
				$(".video-btn-volume i").removeClass("i-voice-on").addClass("i-voice-off");
			} else {
				meido.volume = true;
				$(".video-volume-range-current", videobox).css("height", volumeh * 100 + "%");
				$(".video-btn-volume i").removeClass("i-voice-off").addClass("i-voice-on");
			}
		})
		/*
		 *  闊抽噺  缁撳熬
		 */
		/*
		 *  鍏ㄥ睆
		 */
		$(".video-fullscreen", videobox).on("click", function() {
			if($(this).find("i").hasClass("i-quanping")) {
				quanpin(meido);
			} else {
				console.log("閫€鍑哄叏灞�");
				exitquanping();
			}
		})
		/*
		 *  鍏ㄥ睆缁撳熬
		 */
		
		/*
		 *  鍒囨崲娓呮櫚搴�
		 */
		$(".video-menu-item").on("click",function(){
			if($(this).hasClass("video-active")){
				return ;
			}
			$(this).addClass("video-active").siblings().removeClass("video-active");
			$(".video-definition-button span").html($(this).html());
			var duration=meido.currentTime;
			meido.canplay=false;
			meido.pause();
			meido.src=datasrc+$(this).html()+".mp4";
			meido.currentTime=duration;
		});
	});
})