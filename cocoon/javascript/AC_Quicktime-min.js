var gArgCountErr='The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...';var gTagAttrs=null;var gQTGeneratorVersion=1.2;var gQTBehaviorID="qt_event_source";var gQTEventsEnabled=false;function AC_QuickTimeVersion(){return gQTGeneratorVersion}function _QTComplain(b,a){a=a.replace("%%",b);alert(a)}function _QTIsMSIE(){var b=navigator.userAgent.toLowerCase();var a=/msie/.test(b)&&!/opera/.test(b);return a}function _QTGenerateBehavior(){return objTag='<!--[if IE]><object id="'+gQTBehaviorID+'" classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598"></object><![endif]-->'}function _QTPageHasBehaviorObject(f,b){var c=false;var d=document.getElementsByTagName("object");for(var a=0,e;e=d[a];a++){if(e.getAttribute("classid")=="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598"){if(e.getAttribute("id")==gQTBehaviorID){c=false}break}}return c}function _QTShouldInsertBehavior(){var a=false;if(gQTEventsEnabled&&_QTIsMSIE()&&!_QTPageHasBehaviorObject()){a=true}return a}function _QTAddAttribute(d,a,b){var c;c=gTagAttrs[d+a];if(null==c){c=gTagAttrs[a]}if(null!=c){if(0==a.indexOf(d)&&(null==b)){b=a.substring(d.length)}if(null==b){b=a}return" "+b+'="'+c+'"'}else{return""}}function _QTAddObjectAttr(a,b){if(0==a.indexOf("emb#")){return""}if(0==a.indexOf("obj#")&&(null==b)){b=a.substring(4)}return _QTAddAttribute("obj#",a,b)}function _QTAddEmbedAttr(a,b){if(0==a.indexOf("obj#")){return""}if(0==a.indexOf("emb#")&&(null==b)){b=a.substring(4)}return _QTAddAttribute("emb#",a,b)}function _QTAddObjectParam(a,d){var e;var c="";var b=(d)?" />":">";if(-1==a.indexOf("emb#")){e=gTagAttrs["obj#"+a];if(null==e){e=gTagAttrs[a]}if(0==a.indexOf("obj#")){a=a.substring(4)}if(null!=e){c='<param name="'+a+'" value="'+e+'"'+b}}return c}function _QTDeleteTagAttrs(){for(var a=0;a<arguments.length;a++){var b=arguments[a];delete gTagAttrs[b];delete gTagAttrs["emb#"+b];delete gTagAttrs["obj#"+b]}}function _QTGenerate(b,c,f){if(f.length<4||(0!=(f.length%2))){_QTComplain(b,gArgCountErr);return""}gTagAttrs=new Object();gTagAttrs.src=f[0];gTagAttrs.width=f[1];gTagAttrs.height=f[2];gTagAttrs.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";gTagAttrs.pluginspage="http://www.apple.com/quicktime/download/";var a=f[3];if((null==a)||(""==a)){a="7,3,0,0"}gTagAttrs.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version="+a;var g,e;for(var i=4;i<f.length;i+=2){g=f[i].toLowerCase();e=f[i+1];gTagAttrs[g]=e;if(("postdomevents"==g)&&(e.toLowerCase()!="false")){gQTEventsEnabled=true;if(_QTIsMSIE()){gTagAttrs["obj#style"]="behavior:url(#"+gQTBehaviorID+")"}}}var h="<object "+_QTAddObjectAttr("classid")+_QTAddObjectAttr("width")+_QTAddObjectAttr("height")+_QTAddObjectAttr("codebase")+_QTAddObjectAttr("name")+_QTAddObjectAttr("id")+_QTAddObjectAttr("tabindex")+_QTAddObjectAttr("hspace")+_QTAddObjectAttr("vspace")+_QTAddObjectAttr("border")+_QTAddObjectAttr("align")+_QTAddObjectAttr("class")+_QTAddObjectAttr("title")+_QTAddObjectAttr("accesskey")+_QTAddObjectAttr("noexternaldata")+_QTAddObjectAttr("obj#style")+">"+_QTAddObjectParam("src",c);var d="<embed "+_QTAddEmbedAttr("src")+_QTAddEmbedAttr("width")+_QTAddEmbedAttr("height")+_QTAddEmbedAttr("pluginspage")+_QTAddEmbedAttr("name")+_QTAddEmbedAttr("id")+_QTAddEmbedAttr("align")+_QTAddEmbedAttr("tabindex");_QTDeleteTagAttrs("src","width","height","pluginspage","classid","codebase","name","tabindex","hspace","vspace","border","align","noexternaldata","class","title","accesskey","id","style");for(var g in gTagAttrs){e=gTagAttrs[g];if(null!=e){d+=_QTAddEmbedAttr(g);h+=_QTAddObjectParam(g,c)}}return h+d+"></embed></object>"}function QT_GenerateOBJECTText(){var a=_QTGenerate("QT_GenerateOBJECTText",false,arguments);if(_QTShouldInsertBehavior()){a=_QTGenerateBehavior()+a}return a}function QT_GenerateOBJECTText_XHTML(){var a=_QTGenerate("QT_GenerateOBJECTText_XHTML",true,arguments);if(_QTShouldInsertBehavior()){a=_QTGenerateBehavior()+a}return a}function QT_WriteOBJECT(){var a=_QTGenerate("QT_WriteOBJECT",false,arguments);if(_QTShouldInsertBehavior()){document.writeln(_QTGenerateBehavior())}document.writeln(a)}function QT_WriteOBJECT_XHTML(){var a=_QTGenerate("QT_WriteOBJECT_XHTML",true,arguments);if(_QTShouldInsertBehavior()){document.writeln(_QTGenerateBehavior())}document.writeln(a)}function QT_GenerateBehaviorOBJECT(){return _QTGenerateBehavior()}function QT_ReplaceElementContents(){var d=arguments[0];var c=[];for(var b=1;b<arguments.length;b++){c.push(arguments[b])}var a=_QTGenerate("QT_ReplaceElementContents",false,c);if(a.length>0){d.innerHTML=a}}function QT_ReplaceElementContents_XHTML(){var d=arguments[0];var c=[];for(var b=1;b<arguments.length;b++){c.push(arguments[b])}var a=_QTGenerate("QT_ReplaceElementContents_XHTML",true,c);if(a.length>0){d.innerHTML=a}};