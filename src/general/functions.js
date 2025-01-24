function breakCamelCase(str) {
    const arr = str.split("")
    //for each letter in the word
    for(let i =0;i<arr.length;i++){
        //if the letter is uppercase
      if(arr[i]=== arr[i].toUpperCase()&&arr[i]!==" "){
        //we add a string
        arr.splice([i], 0, " ")
        //we skip the next index which would be the same letter because the space took it's place and bumped it back one index.
       i+=2
      }
    }
    //put the array back together and send it out.
    return arr.join("")
}
export {breakCamelCase}