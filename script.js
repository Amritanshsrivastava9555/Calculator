let screene = document.getElementById('result')

function get_number(id){
    screene.value += id
}

function clearResult(){
    screene.value = '';
}

function equals(){
    const result = document.getElementById('result').value;
    try{
        const answer = eval(result);
        document.getElementById('result').value = answer;
    }catch(error){
        document.getElementById('result').value = 'Error';
    }
}
