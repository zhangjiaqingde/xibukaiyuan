/**
 * Created by missSS on 2016/12/4.
 */


function ruanjianpan(obj,objIan,objaBtnn)
{
    obj.onfocus = function () {
        objIan.style.display = 'block';
    };


    for(var i=0;i<objaBtnn.length;i++)
    {

        objaBtnn[i].onclick = function () {
            obj.value +='*';
        }
    }
}
