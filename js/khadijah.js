
let rate = {};
let countries = [];

function convert(num) { 
    console.log(document.getElementById("options").value);
    console.log(document.getElementById("options2").value);
    console.log(document.getElementById("numtocon").value);
    
    for(key in rate)
    {
        if (key === document.getElementById("options2").value){
            console.log(rate[key] * document.getElementById("numtocon").value);
            document.getElementById("output").value = rate[key] * document.getElementById("numtocon").value
        }    
    }

   }


axios({
    method: 'get',
    url: 'http://data.fixer.io/api/latest?access_key=c5b598806afb3d27c4cdf7ced8407cfb'
})
.then(response => {
    
    
    var n = response.data.rates;  
    for(key in n)
    {
        rate[key] = n[key];
        countries.push(key);

    }
    console.log(response);
    console.log(n);
    console.log(countries);

    
   
    var sel2 = document.getElementById('options2');
    for(var i = 0; i < countries.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = countries[i];
        opt.value = countries[i];
        sel2.appendChild(opt);  
    }
        
}).catch(error => {
    console.log(error);
})


