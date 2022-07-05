const timer = () => {
  const timeOfBeep = process.argv;
  
  timeOfBeep.splice(0, 2);

  for (let time of timeOfBeep) {
    time = Number(time)

    if (time > 0 && !isNaN(time)){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time)
    }    
  }  
}

timer();
