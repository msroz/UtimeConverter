$(document).ready( function(){
	var unixtime = unixTimeStamp();
	var datetime = fromUnixTime();
	$(':text[id="unixtime"]').val(unixtime);
	$(':text[id="datetime"]').val(datetime);

	$('#unix2date').click(function(){
		var utime = $(':text[id="unixtime"]').val();
		var datetime = fromUnixTime(utime);
		$(':text[id="datetime"]').val(datetime);
	});

	$('#date2unix').click(function(){
		var datetime = $(':text[id="datetime"]').val();
		var utime = unixTimeStamp(datetime);
		$(':text[id="unixtime"]').val(utime);
	});
});



function fromUnixTime (utime){
	var d;
	if (utime) {
		d = new Date(utime * 1000);
	} else {
		d = new Date();
	}
	var year  = d.getFullYear();
	var month = d.getMonth() + 1;
	var day   = d.getDate();
	var hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
	var min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
	var sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
	return year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec;
}

function unixTimeStamp (date){
	var d;
	if (date) {
		date.replace(/-/g, '/');
		d = new Date(date);
	} else {
		d = new Date();
	}
	return parseInt(d/1000);
}