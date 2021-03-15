import Quick from './Quick';
import { partition } from "d3";


function partitions(data,low,high,setData,setIteration,setleft,setright,left,right,res){

   let pivot=data[high];
    let i=(low-1)
    let j=low
  
    var c=setInterval(()=>{
        if(j<=high-1){
            console.log(`compare ${data[j].value} and ${pivot.value}`)
            
            
        if(data[j].value<pivot.value){
            i++;
         
            let temp1 = data[i];
            let temp2= data[j];
            data[j]=temp1;
            data[i]=temp2;
            setIteration(iteration=>iteration+1)
            setData(data.map((entry,index)=>index===i?temp2 :entry))
            setData(data.map((entry,index)=>index===j?temp1 :entry))
            let temps = data;
            
        }
   } if(j>high-1){

    console.log("1st swap comp")
    clearInterval(c)
    let temp3 = data[i+1];
    let temp4= data[high];
    data[i+1]=temp4;
    data[high]=temp3;
    temp4.color="green"
    setIteration(iteration=>iteration+1)
    setData(data.map((entry,index)=>index===high?temp3 :entry))
   
    setData(data.map((entry,index)=>index===i+1?temp4 :entry))
  
   console.log(`the pivot is ${temp4.value}`)
   res()
  
   
  
  Part(data,setData,low,i,setIteration,setleft,setright,left,right).then(function(){
      return Part(data,setData,i+2,high,setIteration,setleft,setright,left,right)
  })
   
    
   } j++},1000)
  
        }


function Part(data,setData,low,high,setIteration,setleft,setright,left,right){

    
  

return new Promise(function(res,rej){
       
    console.log(`the value of low is ${low}`)
    console.log(`the value of high is ${high}`)
    if(low<high){
     
        let pi= partitions(data,low,high,setData,setIteration,setleft,setright,left,right,res);
        
    }else {
        res()
    }
 
   
})
         
    }

export default Part;