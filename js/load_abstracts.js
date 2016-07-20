
$(document).ready(function(){

//map abstract directory and corresponding latex file therein
var abstracts = [
["98590001","main.tex"],
["98590002","main.tex"],
["98590011","main.tex"],
["98590012","main.tex"],
["98590013","paper.tex"],
["98590028","main.tex"],
["98590048","LNBI_corrMaps.tex"],
["98590065","TargContAlg-main_5Jul.tex"],
["98590080","cmsb2016.tex"],
["98590095","iFRS16cmsb.tex"],
["98590113","local_traces.tex"],
["98590128","main.tex"],
["98590143","LNAMod.tex"],
["98590163","11_autonomous_camera_ready.tex"],
["98590180","main.tex"],
["98590195","abstract.tex"],
["98590210","cmsb.tex"],
["98590226","cmsb2016.tex"],
["98590246","main.tex"],
["98590266","channels_CMSB.tex"],
["98590281","abstract.tex"],
["98590298","cmsb.tex"],
["98590305","cmsb2016.tex"],
["98590311","Villaverde_Becker_Banga-PREMER_CMSB_Camera_Ready.tex"],
["98590318","main.tex"],
["98590321","main.tex"],
["98590323","poster.tex"],
["98590326","abstract-cmsb16.tex"],
["98590328","abstract.tex"],
["98590330","abstract.tex"],
["98590332","abstract_51.tex"],
["98590333","abstract_50.tex"],
["Invited_cardelli","main.tex"],
["Invited_despeyroux","main.tex"],
["Invited_grosu","main.tex"],
["Invited_hillston","main.tex"],
["sanchez_et_al","main.txt"]
];

//some common latex commands and their replacement
var regexes = [
	//comments
	[/%{1,}.{0,}\n/, ""],
	//< and >
	[/</, "&lt;"],
	[/>/, "&gt;"],
	// ``
	[/`/, "'"],
	//urls
	[/\\url{(.{1,})}/, "<a href='$1'>$1</a>"],
	//bold face
	[/\\textbf{(.{0,})}/, "<strong>$1</strong>"],
	[/{\s{0,}\\bf(.{0,})}/,"<strong>$1</strong>"],
	//italics
	[/\\textit{(.{0,})}/, "<i>$1</i>"],
	[/\\emph{(.{0,})}/, "<i>$1</i>"],
	[/{\s{0,}\\it(.{0,})}/,"<i>$1</i>"],
	[/{\s{0,}\\em(.{0,})}/,"<i>$1</i>"],
	//small caps
	[/\\textsc{(.{0,})}/, "<span style='font-variant: small-caps'>$1</span>"],
	[/{\s{0,}\\sc(.{0,})}/,"<span style='font-variant: small-caps'>$1</span>"],
	//small font
	[/\\textsf{(.{0,})}/, "$1"],
	[/{\s{0,}\\sf(.{0,})}/,"$1"],
	//references
	[/\\cite{(.{0,})}/, "[$1]"],
	//forced spaces
	[/~/, " "],
	//accents
	[/\\`/,""],
	//...
	[/\\-/,""],
	//keywords
	[/\\keywords{.{0,}}/, ""],
	[/\\begin{keywords}.{0,}\\end{keywords}/, ""],
	//footnotes
	[/\\footnote{(.{0,})}/, "($1)"],
	//math (using Mathjax)
	[/\$([^\$]{0,})\$/, "\\($1\\)"]
	];


	$.map(abstracts, function(el,i){

		$.get("abstracts/"+el[0]+"/"+el[1],function(txt){
			$.map(regexes,function(ell,j){
				while (txt.match(ell[0])) {
					txt = txt.replace(ell[0], ell[1]);
				}
			});

			var start=txt.indexOf("\\begin{abstract}");
			var end=txt.indexOf("\\end{abstract}");

			if(start>=0 && end>=0)
				txt=txt.substring(start+16, end);

			$("#"+el[0]).html("<br><strong>Abstract:</strong><br>"+txt);


		});

	});


});

