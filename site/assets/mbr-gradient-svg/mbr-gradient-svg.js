
function initSvgGradients(a){$ID=$(a).attr("id")+"-svg-gradient";$(a).find("svg linearGradient").attr("id",$ID);$(a).find(".svg-gradient > *").attr("id",$ID);$(a).find("svg.gradient-element").each(function(){$(this).attr("stroke","url(#"+$ID+")");$(this).attr("fill","url(#"+$ID+")")})}var isBuilder=$("html").hasClass("is-builder");
isBuilder?$(document).on("add.cards",function(a){$(a.target).hasClass("svg-gradient-elements")&&initSvgGradients(a.target)}).on("changeParameter.cards",function(a){$(a.target).hasClass("svg-gradient-elements")&&initSvgGradients(a.target)}):void 0===window.initGradientSvgPlugin&&(window.initGradientSvgPlugin=!0,$("section.svg-gradient-elements").each(function(){initSvgGradients($(this))}));