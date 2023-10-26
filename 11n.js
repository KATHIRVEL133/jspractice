 function countWords()
 {  let objects = {
    apple : 0 ,
    grape : 0 
        };
    let stringArray = ['apple','grape','apple','apple','apple'];
    for(let j=0;j<stringArray.length;j++)
    {
        objects[stringArray[j]]++;
    } 
    console.log(objects);
    return objects;
 }