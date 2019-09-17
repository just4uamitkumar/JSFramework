(function(){
	const target = { a: 1, b: 2 };
	const source = { b: 4, c: 5 };

	const returnedTarget = Object.assign(target, source);
    const returnedObj = {...target, ...source}

	console.log(target);
	// expected output: Object { a: 1, b: 4, c: 5 }
    console.log(returnedTarget);
    // expected output: Object { a: 1, b: 4, c: 5 }
    console.log(returnedObj)
    // expected output: Object { a: 1, b: 4, c: 5 }
    
    
     var obj1 = { name: "David", age: 45, city: "San Adreas" };
     var obj2 = { state: "Florida", Professtion: 'Software Engineer', Salary: 50000};
    
    var obj = Object.assign(obj1, obj2);
    var mergeObj = {...obj1, ...obj2}
    console.log(obj);
    console.log(mergeObj);       
})();

(function(){
     function extend(obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    }

    // example
    var a = { name: "David", age: 45,  Salary: 50000 };
    var b = { state: "Florida", Professtion: 'Software Engineer'};
    var c = extend(a, b);

    console.log(c);
    // { foo: true, bar: false }
})();

