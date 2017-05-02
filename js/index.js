var index=0;
timer=null;
function carousel_before()
{
	if(index<=0)
	{
		index=2;
	}else{
		index--;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg"
}
function calousel_next()
{
	if(index>=2)
	{
		index=0;
	}else{
		index++;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg"
}

function carouse_li(icon_index)
{
	index=icon_index;
	document.getElementById("carousel_img").src="img/banner"+(index)+".jpg"
}

function onMousemove(count)
{

	//src=""

	var img_left=document.getElementById("introduceimg");
	var img_right=document.getElementById("introduceimg_right");
	
	if(count==1)//左边div
	{
		
	img_left.src = "img/iconfont-gongsizizhi (1).png";
	img_right.src="img/iconfont-iconfontzhishiku1.png";
	}else
	{
	img_left.src = "img/iconfont-gongsizizhi (1)1.png";
	img_right.src="img/iconfont-iconfontzhishiku2.png";
	}
}
function onMouseout()
{
//	
	document.getElementById("introduceimg").src ="img/iconfont-gongsizizhi (1)1.png";
	document.getElementById("introduceimg_right").src ="img/iconfont-iconfontzhishiku1.png";
//	document.getElementById("introduceimg_right").src="img/iconfont-iconfontzhishiku1.png";
//	if(id="gsintroduce")
//	{
//	document.getElementById("gsintroduce").src = "img/iconfont-gongsizizhi (1)1.png";
//	}else
//	{
//	document.getElementById("cpknoewledge").src="img/iconfont-iconfontzhishiku1.png";	
//	}
}


//(".news_c_left .btn").click(function(){
//	(this).addClass("active").siblings(".btn").removeClass("active");	
//	
//})
//
//(".news_c_left .xinwen").click(function(){
//		(".news_c_left .right ul").animate({"margin-top":0})	
//})
//
//
//(".news_c_left .dongtai").click(function(){
//		(".news_c_left .right ul").animate({"margin-top":-338})	
//})


function onMousemove()
{
	document.getElementById("a").style.webkitTransform="translateY(0px)";
	document.getElementById("a").style.transition="2s";
	document.getElementById("xinwen").style.width="160px";
	document.getElementById("dongtai").style.width="150px";
	
	
}

function onMousemove1()
{
	document.getElementById("a").style.webkitTransform="translateY(-338px)"
	document.getElementById("a").style.transition="2s";
	document.getElementById("xinwen").style.width="150px";
	document.getElementById("dongtai").style.width="160px";
}
