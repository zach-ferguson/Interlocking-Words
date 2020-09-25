var wordsArray=["art","ball","cold","dolly",
                  "egg","shoe", "schooled"];
var interlockingWordsArr=[]

function interlockWithAll(arr){
  for(i=0;i<arr.length;i++){
    let p=arr[i];
    for(j=0;j<arr.length;j++){
      let k=arr[j];
      if (p!=k)
      interlockingWordsArr.push(interlock2Words(p,k));
    }
  }
}

interlockWithAll(wordsArray);





//interlocks two words
function interlock2Words(x,y){
  var word3=""

  let z="";
  if (x.length>y.length) {z==x}
  else {z==y};

  for(i=0;i<z.length;i++){
    if (x[i]==undefined){
      word3+=y[i]
    }
    else if (y[i]==undefined){
      word3+=x[i]
    }
    else
      word3+=x[i]+y[i]
  };
  return word3;
};



//check if word is in the array
function wordChecker(wordToCheck){
  for(i=0;i<wordsArray.length;i++){
    if (wordToCheck==wordsArray[i]){
      console.log(wordToCheck+" is in the array")};
    };
  };
//
