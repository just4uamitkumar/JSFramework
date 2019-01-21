function calculate() {
        var numVal = document.getElementById('numVal');
        var numValues = numVal.value;
        var fetchMsg = document.getElementById('msg');

        if (numValues=='') {
            fetchMsg.innerHTML='Enter Number of Values';
        }

        else {
            fetchMsg.innerHTML='';
            var count = 2;

            if(numValues > 1){
                var n1=document.getElementById("txt0").value;
                var n2=document.getElementById("txt1").value;

                var res1=n1*n2;
                n1=calc(n1,n2);

                while(count < numValues){
                    var gg = "txt" + count;
                    n2 = document.getElementById(gg).value;
                    res1 = n1*n2;
                    n1 = calc(n1, n2);
                    count = count+1;
                }
            }
            if (n1!='') {
                document.getElementById("re").classList.remove('hide');
                document.getElementById("resul").value=n1;
                fetchMsg.innerHTML='';
            }
            else
            {
                fetchMsg.innerHTML='Enter Values';
            }
        }
    }

    function calc(n1,n2) {
        var num1,num2;
        if(n1 < n2){
            num1 = n1;
            num2 = n2;
        }
        else{
            num1 = n2;
            num2 = n1;
        }
        var remain = num2%num1;
        while( remain > 0 ){
            num2 = num1;
            num1 = remain;
            remain = num2%num1;
        }
        return num1;
    }

    function newtextbox(val){
        document.getElementById('new1').innerHTML='';
        document.getElementById('va').classList.add('hide');
        var numVal = document.getElementById('numVal');
        var numValues = numVal.value;

        if(isNaN(val)) {
            var df=val.substring(0,(val.length-1))
            val=df;
        }
        else{
            val = numValues;

            if(val < 10){
                var dd = document.getElementById('new1');
                var en = document.getElementById('va').classList.remove('hide');
                if(numValues!=""){
                    for(var i=0;i<numValues;i++)
                    {
                        var textbox=document.createElement('input');
                        textbox.setAttribute("type","text");
                        textbox.setAttribute("class","form-control");
                        var textname="txt"+i;
                        textbox.setAttribute("id",textname);
                        textbox.setAttribute('onkeyup','check(this)');
                        textbox.setAttribute("size","4");
                        dd.appendChild(textbox);
                    }
                }
            }
            else{
                alert("Enter values upto 10 only");
                val='';
            }
        }
    }
    function check(ad)
    {
        var ch=ad.value;
        if(isNaN(ch))
        {
            var df=ch.substring(0,(ch.length-1))
            ad.value=df;
        }
    }
    function resetfun() {
        document.getElementById('re').classList.add('hide');
        document.getElementById('va').classList.add('hide');
        document.getElementById('new1').classList.add('hide');
        numValues='';
        fetchMsg.innerHTML='';
        document.location.reload();
    }