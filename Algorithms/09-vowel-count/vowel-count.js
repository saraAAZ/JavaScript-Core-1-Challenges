// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let vowelCounter=0;
    for (let i = 0 ; i < str.length;i++)
    {
        if (str[i]=="a"){
            vowelCounter++;
        }
        if (str[i]=="e"){
            vowelCounter++;
        }
        if (str[i]=="i"){
            vowelCounter++;
        }
        if (str[i]=="o"){
            vowelCounter++;
        }
        if (str[i]=="u"){
            vowelCounter++;
        }  
    }
    console.log(vowelCounter);
};
