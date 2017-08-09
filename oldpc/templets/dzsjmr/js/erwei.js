// JavaScript Document
$(function(){
	$(".new_erwei1  li").hover(function(){
		var e_eq=$(this).index();
		$(".new_erwei1 .erwei ").eq(e_eq).slideDown();
		
		},
		function(){
				var e_eq=$(this).index();
			$(".new_erwei1 .erwei").eq(e_eq).slideUp();
			});
			
			$(".new_erwei2  li").hover(function(){
		var e_eq=$(this).index();
		$(".new_erwei2 .erwei ").eq(e_eq).slideDown();
		
		},
		function(){
				var e_eq=$(this).index();
			$(".new_erwei2 .erwei").eq(e_eq).slideUp();
			});
			
			
				$(".new_erwei3  li").hover(function(){
		var e_eq=$(this).index();
		$(".new_erwei3 .erwei ").eq(e_eq).slideDown();
		
		},
		function(){
				var e_eq=$(this).index();
			$(".new_erwei3 .erwei").eq(e_eq).slideUp();
			});	
			
			
	})