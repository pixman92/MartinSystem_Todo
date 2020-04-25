
//TODO - make scheduling options 
//TODO - delete list item
//TODO - mark as DONE/Failed/Pass


var arrOfListItems = [];
function addListItem(itemName){
    var tmpObj = {
        name: itemName,
        time: new Date()
    };

    arrOfListItems.push(tmpObj);
}



function changeTime(id){

}

function timeCompare(tillTime){ 
    // valide Date - Date('4/24/2020 20:01')
    //this function will take a validTime obj
    //and will do function X after assigened time has passed


    
    printMillis();
    
    function printMillis(){



        var currentTime= new Date().getTime();
    
        var offsetMillis = tillTime.getTime() - currentTime;
        console.log('offsetMillis', offsetMillis);
    
        if(currentTime>tillTime){
            return false;
        }


        
    
        //part of the function to display each passing second
        // while(currentTime<tillTime){
        tmpTime=1000;
        setTimeout(() => {
            printMillis();
        }, tmpTime);



        setTimeout(()=>{
            console.log('complete');
        }, offsetMillis);
    }
    // }

}

//=====================================================

function pushListToHTML(){
    var tmpArray= [];
    
    tmpArray.push('');
    tmpArray.push('');
    tmpArray.push('');
    tmpArray.push('');
    tmpArray.push('');


}