$(document).ready(function(){
	type();
	$("#a").hide();
	$(".e").hide();
	$(".p").hide();
	$(".contact").hide();
	$("#about").click(function(){
		$("#key").hide();
		$(".e").hide();
		$(".p").hide();
		$("#a").show();
		$(".contact").hide();

	});
	$("#exp").click(function(){
		$("#key").hide();
		$("#a").hide();
		$(".p").hide();
		$(".contact").hide();
		$(".e").show();

	});
	$("#proj").click(function(){
		$("#key").hide();
		$("#a").hide();
		$(".e").hide();
		$(".contact").hide();
		$(".p").show();
	});
	$("#inter").click(function(){
		$("#key").hide();
		$("#a").hide();
		$(".e").hide();
		$(".p").hide();
		$(".contact").show();
	})

});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function remove(array, element) {
    return array.filter(e => e !== element);
}


var names_objects = [
{
	char:'A',
	id: 1
},
{
	char:'N',
	id: 2
},
{
	char:'G',
	id: 3
},
{
	char:'E',
	id: 4
},
{
	char:'L',
	id: 5
},
{
	char:'I',
	id: 6
},
{
	char:'M',
	id: 13
}
];

var names =['A','N','G','E','L','I','N','A',"x",'L','A','M'];	

function filterValue(obj, key, value) {
  return obj.find(function(v){ return v[key] === value});
}

async function type() {
	var x; 
	var z;
	var title;
	for(x = 0; x <12; x++)
	{
		if(x<5)
		{
			z = x+1;
			var y= z+6;
			var currTitle = $(".box-title").html();

			$("#"+z).css({"background-color":"black","color":"white"});
			$("#"+y).css({"color":"white"});
			await sleep(150);
			$("#"+z).css({"background-color":"white","color":"black"});
			$("#"+y).css({"color":"black"});
			await sleep(150);	

			title = currTitle + names[x];
			$(".box-title").html(title);
		}
		else
		{	
			var currTitle = $(".box-title").html();
			if(names[x] == "x")
			{
				$(".box-title").html(currTitle+"<br>");
			}
			else
			{
				var obj = filterValue(names_objects,"char",names[x]);
				var id = obj.id;
				var s = id + 6;
				$("#"+id).css({"background-color":"black","color":"white"});
				$("#"+s).css({"color":"white"});
				await sleep(150);
				$("#"+id).css({"background-color":"white","color":"black"});
				$("#"+s).css({"color":"black"});
				await sleep(150);	
				$(".box-title").html(currTitle + names[x]);
			}
		}
	}
	setkeys();

}

function setkeys(){
	var i = 0
	var x = names_objects.length;
	for(i = 0; i < x; i++)
	{
		var id = names_objects[i].id;
		var s= id+6;
		$("#"+id).css({"background-color":"black","color":"white"});
		$("#"+s).css({"color":"white"});
	}
}





