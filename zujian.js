$(function () {
    var parent=$(".parent>li")
    var flag=true;
    for(var i=0;i<parent.length;i++){
        parent.eq(i).click(function () {
            if(flag){
                $(this).next(".child").css("display","none");
                flag=false;
            }else{
                $(this).next(".child").css("display","block");
                flag=true;
            }

        })
    }
})
