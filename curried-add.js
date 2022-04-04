function curriedAdd(total=0) {
    if(!total) return total
   

   return function add(num){
       if(!num) return total;

       total += num
       return add
   }

    
}


module.exports = { curriedAdd };
