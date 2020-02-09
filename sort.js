let max=array=>{
	const arry2=[];
	let p=0,max=array[0],min=array[0];
	for(let i=0;i<array.length;i++){
		if(min>arry[i]){
			min=arry[i];
		}
	}
	for(let j=0;j<array.length;j++){
		
		for(let z=0;z<array.length;z++){
			if(array[z]!=null){
			if(max<array[z]){
				max=array[z];
			    pos=z;
			}
			}
		}	
		arry2[j]=max;
		array[pos]=null;
        max=min;
	}
return arry2;	
}
let arry=[1,100,-1000,5,8,989,09,87];
console.log(max(arry));
