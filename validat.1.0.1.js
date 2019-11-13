/**
 * @author zwc 2019-11-12
 * @description from表单提交 验证简单封装
 */
(function(){
	document.querySelectorAll('form').forEach(function(){
		arguments[0].onsubmit = function(){
			var passed = 1, msg = '', inputs = arguments[0].target.querySelectorAll('input');
			markPoint:
			for (var j = 0; j < inputs.length; j++) {
				var e = inputs[j];
				if(!e.dataset.rule) continue;
				var list = e.dataset.rule.split(';'), name = e.dataset.title || '';
				for (var i = 0; i < list.length; i++) {
					var str = list[i];
					if(/required/.test(str)){
						if(!e.value){
							msg = name + '不能为空';
							passed = 0;
							break markPoint;
						}
					}else if(/length/.test(str)){
						var se = str.substr(7).split(',');
						if(se.length === 1 && e.value.length > Number(se)){
							msg = name + '长度区间[1-'+se+']';
							passed = 0;
							break markPoint;
						}
						if(se.length === 2 && !(e.value.length >= Number(se[0]) && e.value.length <= Number(se[1]))){
							msg = name + '长度区间['+se[0]+'-'+se[1]+']';
							passed = 0;
							break markPoint;
						}
					}else if(/number/.test(str)){
						if(!/^[0-9]*$/.test(e.value)){
							msg = name + '非数字';
							passed = 0;
							break markPoint;
						}
					}
				}
			}
			!passed && console.log(msg);//根据自己框架写验证不成功的提示效果
			return !!passed;
		};
	});
	
//	document.querySelectorAll('form').forEach(function(){
//		arguments[0].onsubmit = function(){
//			var passed = 1, msg = '';
//			try{
//				arguments[0].target.querySelectorAll('input').forEach(function(e,i){
//					if(!e.dataset.rule) return;
//					var list = e.dataset.rule.split(';'), name = e.dataset.title || '';
//					
//					for (var i = 0; i < list.length; i++) {
//						var str = list[i];
//						if(/required/.test(str)){
//							if(!e.value){
//								msg = name + '不能为空';
//								passed = 0;
//								foreach.break = new Error("StopIteration");
//							}
//						}else if(/length/.test(str)){
//							var se = str.substr(7).split(',');
//							if(se.length === 1 && e.value.length > Number(se)){
//								msg = name + '长度区间[1-'+se+']';
//								passed = 0;
//								foreach.break = new Error("StopIteration");
//							}
//							if(se.length === 2 && !(e.value.length >= Number(se[0]) && e.value.length <= Number(se[1]))){
//								msg = name + '长度区间['+se[0]+'-'+se[1]+']';
//								passed = 0;
//								foreach.break = new Error("StopIteration");
//							}
//						}else if(/number/.test(str)){
//							if(!/^[0-9]*$/.test(e.value)){
//								msg = name + '非数字';
//								passed = 0;
//								foreach.break = new Error("StopIteration");
//							}
//						}
//					}
//				});
//			}catch(e){
//			}
//			
//			!passed && console.log(msg);//根据自己框架写验证不成功的提示效果
//			return !!passed;
//		};
//	});
}());
