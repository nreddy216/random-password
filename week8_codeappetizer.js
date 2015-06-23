var getIndex = function(min, max){
     return Math.floor(Math.random() * (max - min + 1)) + min;  
};


var getPassword = function(pwLength){
    password = '';
    charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$';
    
    for (var i = 0; i <= pwLength; i++){
        
        password = password + charSet[getIndex(0,charSet.length)];
        
    }    
    
    console.log(password);
};

getPassword(10);