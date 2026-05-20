// My Pyari Beti Lakshu

let name = "My Pyari Beti Lakshu"  //op - Lakshu Beti Pyari ym
let sentanceName = name.split(" ")
let rev = " "
for(i = sentanceName.length-1; i>=0; i--)
 {
    if(i>=1)
    {
    rev = rev + sentanceName[i] + " "  //  Lakshu Beti Pyari
    }
   else if(i==0)
    {
        for(j=sentanceName[i].length-1; j>=0;j--)
        {   
            rev = rev + sentanceName[i][j] // ym
        }
    }

 }

 console.log(rev);