// JavaScript Document

function ajax_request(bool,pagename,data_parameters,functionname){
	var data_url = "http://192.168.1.102:1837/"+pagename;
	var http_request = new XMLHttpRequest();
	try{
	   http_request = new XMLHttpRequest();
	}catch (e){
	   try{
		  http_request = new ActiveXObject("Msxml2.XMLHTTP");
	   }catch (e) {
		  try{
			 http_request = new ActiveXObject("Microsoft.XMLHTTP");
		  }catch (e){
			 // Something went wrong
			 alert("Your browser broke!");
			 return false;
		  }
	   }
	}
	http_request.onreadystatechange  = function(){
		if (http_request.readyState == 4  )
		{
			   var x = http_request.responseText;
			   functionname(false,x);
			 
		}
	}
	http_request.open("POST",data_url,true);	
	http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	http_request.send(data_parameters);
}



