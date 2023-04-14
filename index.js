function distanceFromHqInBlocks(streetnumber){
    if (streetnumber < 42){
        return(42 - streetnumber)
}
    else{
        return(streetnumber - 42)
    }
}

function distanceFromHqInFeet(streetnumber){
    return distanceFromHqInBlocks(streetnumber)*264
}

function distanceTravelledInFeet(a,b){
    if (b > a){
        return(b - a)*264    
}
    else 
        return(a - b)*264
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
}
    else if (distance >= 400 && distance <= 2000){
    return (distance-400)* 0.02;
}
    else if(distance >= 2000 && distance < 2500){
    return 25;
}
    else {
    return "cannot travel that far";
}
};
