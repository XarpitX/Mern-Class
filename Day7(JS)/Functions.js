// Functions are used to group the logic
//Different ways of declaring functions


function printDataOnScreen1(likes, hearts, name) {
    
    const result = `${name}'s engagements on the page are ${likes + hearts}`;
    console.log(result);
}
printDataOnScreen1(33, 44, "Niteesh"); 
printDataOnScreen1(220, 100, "Aashrith"); 



const printDataOnScreen2 = function printDataOnScreen2(likes, hearts, name) {
    
    const result = `* ${name}'s engagements on the page are ${likes + hearts}`;
    console.log(result);
};
printDataOnScreen2(33, 44, "Niteesh"); 
printDataOnScreen2(220, 100, "Aashrith"); 


const printDataOnScreen3 = function (likes, hearts, name) {
    
    const result = `** ${name}'s engagements on the page are ${likes + hearts}`;
    console.log(result);
};
printDataOnScreen3(33, 44, "Niteesh"); 
printDataOnScreen3(220, 100, "Aashrith"); 




const printDataOnScreen4 = (likes, hearts, name) => {
 
    const result = `*** ${name}'s engagements on the page are ${likes + hearts}`;
    console.log(result);
};

printDataOnScreen4(33, 44, "Niteesh"); 
printDataOnScreen4(220, 100, "Aashrith"); 
