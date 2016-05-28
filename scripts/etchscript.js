$(document).ready(function()
{
	$("#add").click(function()
	{
        var $row = $("<div />", {class: 'row'});
        var $square = $("<div />", {class: 'square'});
        

        //removes old divs
        $("#cont").empty();

        //gets grid size from user
        var size = document.getElementById("userInput").value;
    	
        //add columns to the the temp row object
    	for (var i = 0; i < size; i++) 
    	{
        	$row.append($square.clone());
    	}
    	//clone the temp row object with the columns to the wrapper
    	for (var i = 0; i < size; i++) 
    	{
        	$("#cont").append($row.clone());
    	}

        //dynamically resizes divs
        var square_width = $('#cont').width()/size;
        var square_height = $('#cont').width()/size-2;
        $('.square').css('width', square_width);
        $('.square').css('height', square_height);
        $('.row').css('width', square_width);
        $('.row').css('height', square_height);

        //changes colour of divs when mouse enters
        $('.square').mouseenter(function()
        {
            $(this).removeClass('square').addClass('green');
        });
	});
});