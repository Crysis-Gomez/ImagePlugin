(function( $ ){
    $.fn.rotator = function(delay, child){
        var _array = $(this).children(child);
        var _arraySize = _array.size();

        var date = Date.now();

        var currIndex = 0;
        var currIt = true;
        var prevIndex = -1;

        var draw = function(){
        	$(_array[currIndex]).css('opacity','1');
       		if(prevIndex != -1 ) $(_array[prevIndex]).css('opacity','0');
       		prevIndex = currIndex;
       		currIndex++;
       		if(currIndex > _arraySize-1) currIndex = 0;
        }

        var enterFrame = function(){
        	var now = Date.now();
    		var diff= now - date;
    		if(diff >= delay){
    			date = now;
    			draw();
    		}
        	requestAnimationFrame(enterFrame)
        }
        enterFrame();
        return this;
    };
})(jQuery);