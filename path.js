//Your code below
function buildPath(p,n){
  let path = [];
  for(i=0;i<n;i++){
    let r = Math.random();
    if(r <= p){
      path[i] = false;
    }
    else{
      path[i] = true;
    }
  }
  path[i] = true;
  return path[i];
}

function stroll(path,index){
  if(path == ){
    return 1;
  }
  else if(path > path.length){
    return 0;
  }
  else{
    return stroll(path,index)
  }
}

function rsj(path,index){

}



//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true],0));
console.log(stroll([true,true,true],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));
