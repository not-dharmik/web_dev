str= prompt("KebabToSnake");
n= str.length;
for(i=0;i<n;i++){
    if(str[i]== "-"){
        str[i]="_" ; 
    }
}
alert(str);
