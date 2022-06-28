let randomNumberArray = new Array();
while(randomNumberArray.length < 10)
{
    randomNumbers = Math.floor(Math.random()*1000 +99);
    if(randomNumbers>=100 && randomNumbers<=999)
    {
        randomNumberArray.push(randomNumbers);
    }
}
console.log(randomNumberArray);
for(let i=0;i<randomNumberArray.length;i++)
{
    for(let j=0;j<randomNumberArray.length-1;j++)
    {
        if(randomNumberArray[j]>randomNumberArray[j+1])
        {
            let x =randomNumberArray[j];
            randomNumberArray[j]=randomNumberArray[j+1];
            randomNumberArray[j+1]=x;
        }
    }

}
console.log("Second largest element:"+randomNumberArray[8]);
console.log("Second smallest element:"+randomNumberArray[1]);