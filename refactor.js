$(function() {
  $('.form').submit(function() {

  	//** variables */
    var studentYes = $('#checkboxStudentYes').is(':checked')
    var studentNo = $('#checkboxStudentNo').is(':checked')
    var retiredYes = $('#checkboxRetiredYes').is(':checked')
    var retiredNo = $('#checkboxRetiredNo').is(':checked')
    var sex =  $('select#gender').val();
    var tuition = ''

    //** logic */
    if ((studentYes === false && studentNo === false) || (retiredYes == false && retiredNo == false)) {

    	$('.alert-danger').show();

    } else {

	    if (studentYes === true || retiredYes === true || sex === 'Female') {
	      tuition = '12,150';
	    } else {
	      tuition = '13,500';
	    }


	    //** views */
	    $('.alert-danger').hide();
	    $('.container-form').hide();
	    $('#rate').empty().append(tuition);
	    $('#sexy').empty().append(sex);
	    $('.success').show();
	    $('#tuition').show();
	    
	   	$('.btn-default').click(function() {
  		
  			$('.container-form').show();
	    	$('.success').hide();
	    	$('#tuition').hide();
	    	$('form')[0].reset();
		
			});

	  }

    return false;
  });
});