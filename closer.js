function stopWatch(){
    let Count = 0;
    return function(){
        Count++;
            return Count;
        }
    }
    const clock1 = stopWatch();
    console.log(clock1());
    console.log(clock1());
    console.log(clock1());
    console.log(clock1());
    
    const clock2 = stopWatch();
    console.log(clock2());
    console.log(clock1());
    console.log(clock2());
    console.log(clock1());
    console.log(clock1());
    console.log(clock2());
    console.log(clock2());
    console.log(clock2());