let i = 0;
let j = 0;
let n =6;
let m=n*2;
let string= "";
for(i=0;i<=n;i++){
    for(j=0;j<=n;j++){
        if(i==n||j==n||i==0||j==0||j==m){
            
            string +=" *";
            m--;
        }
        else{
            string +="  ";
        }
    }
    string+="\n";
}
console.log(string);