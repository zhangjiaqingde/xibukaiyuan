/**
 * Created by Administrator on 2017/2/13.
 */
function dianji(obj,objaImg){

        var oNext=oLun.getElementById('br');
        var oPrea=oLun.getElementById('bl');
        var num3=0;
        oNext.onclick=function()
        {
            if(num3<objaImg.length)
            {
                sportFrame(oUl,'left',num3*(-1366));
                num3++;
            }
            else
            {
                num3=1;
            }

        };
        //oPrea.onclick=function()
        //{
        //    if(num3<aImg.length)
        //    {
        //        num3--;
        //        sportFrame(oUl,'left',-num3*(1366));
        //
        //    }
        //
        //};

}
