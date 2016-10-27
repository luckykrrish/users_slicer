// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

window.Slicer = function() {
	var options = {asc: [], desc: [], filters: {}}, that = this;
	var html_for_users = function(users) {
		var trs = [];
		$.each(users, function(i, user) {
			trs.push($("<tr>").append("<td>" +user.name+"</td>") .append("<td>" +user.role+"</td>") .append("<td>" +user.gender+"</td>")[0].outerHTML);
		});
		return trs.join();
	}, 
	resetAscDescField= function(field) {
		options['desc'].splice(options['desc'].indexOf(field), 1);
		options['asc'].splice(options['asc'].indexOf(field), 1);
	},
	setAscField= function(field) {
		resetAscDescField(field);
		options['asc'].push(field);
	},
	setDescField= function(field) {
		resetAscDescField(field);
		options['desc'].push(field);
	};

	$.extend(this, {
		switchOrder: function (field) {
			if(options['asc'].indexOf(field) > -1) {
				setDescField(field);
			} else if (options['desc'].indexOf(field) > -1) {
				setAscField(field);
			} else {
				that.setDefaultOrder(field);
			}
		},
		setDefaultOrder: function (field) {
			if(options['asc'].indexOf(field) < 0 && options['desc'].indexOf(field) < 0 )
			setAscField(field);
		},
		setFilter: function(field, value) {
			if (value)
				options['filters'][field] = value;
			else
				delete options['filters'][field];
		},
		slice: function () {
			// $('.switch_order').each(function() {
			// 	that.setDefaultOrder($(this).data('fieldName'));
			// });
			$('.filter_option').each(function(){
				that.setFilter($(this).data('fieldName'), $(this).val());
			});
			console.log(options);
			return $.post('/', options).done(function (data) {
				$("tr").not(":first").remove();
				console.log(data);
				console.log(html_for_users(data));
				$(html_for_users(data)).insertAfter('#options_row');
			});
		}
	});
};

$(function() {
	var slicer = new Slicer();

	$('.slicer').click(function (){
		slicer.slice();
	});

	$('.filter_option').change(function () {
		slicer.slice();
	});

	$('.switch_order').on("click", function() {
		slicer.switchOrder($(this).data('fieldName'));
		slicer.slice();
	});
});
