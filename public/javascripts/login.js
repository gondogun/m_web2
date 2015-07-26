/*
var wallpaperPaths = ["AkroanSkyguard_BNG_1920x1080_Wallpaper.jpg",
"GodsWilling_THEROS_1920x1080_Wallpaper.jpg",
"Karametra,-God-of-Harvests_BNG_1920x1080_WallpaperT.jpg",
"SelvalaExplorerReturned_VMA_1920x1080_Wallpaper.jpg",
"TimeWalk_MTGO_1920x1080_Wallpaper.jpg",
"Wallpaper_JOU_01_Maniak_1920x1080.jpg",
"Wallpaper_JOU_05_Barger_1920x1080.jpg",
"Wallpapper_JOU_PW01_Miller_1920x1080.jpg",
"hgygb90uzf_CNS_1920x1080_Wallpaper.jpg","jaceHD.jpg","ksnahyegpc_wa_20140625_1920x1080.jpg" ];
*/

var loginGlobalVariables = {};
loginGlobalVariables.wallpaperPaths = ["GodsWilling_THEROS_1920x1080_Wallpaper.jpg",
"AkroanSkyguard_BNG_1920x1080_Wallpaper.jpg",
"hgygb90uzf_CNS_1920x1080_Wallpaper.jpg",
"jaceHD.jpg"];

loginGlobalVariables.defaultPath = "./images/login/";





$(document).ready(function(){

	var min = 0;
	var max = loginGlobalVariables.wallpaperPaths.length - 1;
	
	var rolledNumber = Math.floor(Math.random()*(max-min+1)+min);
	
	var backgroundPath = "url('" + loginGlobalVariables.defaultPath + loginGlobalVariables.wallpaperPaths[rolledNumber] + "')";
	
	console.log(backgroundPath);
	
	
	$("body").css("background-image", backgroundPath);

	
});