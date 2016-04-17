/**
* @author Ettore Ciprian [cipettaro@gmail.com]
*/

/**
 * load Configurations from a Json file
 */
function loadConfig(filepath){
  $.ajaxSetup({beforeSend: function(xhr){
      if (xhr.overrideMimeType)
      {
        xhr.overrideMimeType("application/json");
      }
    }
    });
     //Load config
    return $.getJSON(filepath, function(json) {
      return json;
     });
}

//Load images with jquery
function loadImage(id, path, target) {
          $('<img id="img_'+id+'" class="img-resp" src="'+ path +'">').load(function() {
            $(this).appendTo(target);
        });
    }

function createGalleryItem(id, path){

  $('<img class="img-resp lazyload" data-sizes="auto" id="'+id+'"/>').attr("data-src", path).attr("src", path).appendTo("#lightgallery");
}

function loadFile(file) {
var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
    reader.open('get', file, true);
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents(objectID) {
    if(reader.readyState==4) {
        var el = document.getElementById(objectID);
        el.innerHTML = reader.responseText;
    }
}


function updateText(element){
  var currentId =  flkty.selectedElement.id;
  if(flkty.selectedIndex >= 0 && currentId !== element.id){
    $(element).css('display', 'none');
   if(open_text){
     $('div.textgallery #'+currentId).fadeIn();
   }
  }
}

function toggleText(element){
  if(open_text){
    $('div.textgallery #'+element.id).fadeIn();
  }else{
     $('div.textgallery #'+element.id).fadeOut();
  }
}
