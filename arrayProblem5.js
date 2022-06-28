var repeatnumbers = new Array();
for(var i=10;i< 100;i++)
{
    var temp=i;
    var remainder=temp%10;
    var remaining=i/10;
    if(remainder==remaining)
    {
        repeatnumbers.push(i);
    }
    
}
console.log(repeatnumbers);
