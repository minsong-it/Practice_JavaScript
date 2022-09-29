$(function() {
    $(document).ready(
        function(){
            $("#openBtn").click(
                function(){
                    $("#modalWin").css({
                        "display":"block"
                    });
                });
            
            //x click => 모달 창 닫기 
            $(".close").click(
                function(){
                    $("#modalWin").css({
                        "display":"none"
                });
            });
          
            // html부분, 모달창 바깥을 클릭 시 닫는 기능
            "html".click(
                function(event){
                    if(event.target.id === "modalWin"){
                        $("#modalWin").css({
                            "display": "none"
                        });
                    }
                });
    });
});

