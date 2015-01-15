$(document).ready(function(){
    // $(".mine-div").hover(function(){
    //     $(this).toggleClass("mine-div-2");
    // });


	$('.spinner').on('focusout click', function(event){
		var spinner = $(this);
		var value = spinner.spinner('value');
		var mod = spinner.data('mod');
		var isMod = value % mod;
		var unmod = mod - isMod;
		if (isMod != 0) {
			spinner.spinner('value', value + unmod);
		}
	});


    jQuery("#Slider1").slider({ from: 1000, to: 100000, step: 500, smooth: true, round: 0, dimension: "&nbsp;$", skin: "plastic" });

    $(function () {
        $('#example').popover();
    });

    $(function(){
	$('[rel=popover]').popover({ 
	html : true, 
	content: function() {
      return $('#popover_content_wrapper').html();
    }



});

});

    

	
});