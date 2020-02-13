

/**Hacer una función de Javascript que recibiendo un objeto, 
 * devuelva un string con sus keys y sus valores. Es decir: 
 * WorldWrap(Ver)*/

const objeto = {
    name: 'vivi',
    lastName: 'choque',
    age: '40',
};

function objectToString(obj) {
    let retorno='';
    let objectKeys = Object.keys(obj);
    for (let i = 0;i < objectKeys.length; i++) {
        retorno = retorno + objectKeys[i] + ':' + obj[objectKeys[i]] + ',';

    }
    return retorno;

}
console.log(objectToString(objeto));