
// setInterval Means to do the same thing or task again and again continiously

setInterval(() => {
    d = new Date();
    // getHours,getMinute,getSecond are the pre-defined functions
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    // hRotation,mRotation,sRotation are the variables.
    hRotation = 30 * htime + (mtime / 2);
    mRotation = 6 * mtime;
    sRotation = 6 * stime;
    // Here the htime,mtime,stime are the variable which are declared above.

    //You Found Error Below because the hour,minute,second.style.transform should be written.
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);