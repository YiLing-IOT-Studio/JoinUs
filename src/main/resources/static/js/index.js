/**
 * Created by 周邓 on 2017/12/4.
 */
window.onload=function(){
    var EventUtil= {
        //添加事件处理程序
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);//DOM2级   默认冒泡阶段
            } else if (element.attachEvent) {   //针对IE
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;//默认DOM0级
            }
        },
        //取得事件对象
        getEvent: function (event) {
            return event ? event : window.event;//IE:window.event
        },
        //事件目标
        getTarget: function (event) {
            return event.target || event.srcElement;
        },
        //取消默认行为
        preventDafault: function () {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;//IE
            }
        },
    };
    function hasClass(element, theClass) {
        var pattern = new RegExp("(^| )" + theClass + "( |$)");
        if (pattern.test(element.className)) {
            return true;
        } else {
            return false;
        }
    };
    function addClass(element, theClass) {
        if (!hasClass(element, theClass)) {
            if (element.className == "") {
                element.className = theClass;
            }
            else {
                element.className += " " + theClass;
            }
        }
    };
    function removeClass(element,theClass){
        var pattern = new RegExp("(^| )"+theClass+"( |$)");
        element.className = element.className.replace(pattern,"$1");
        element.className = element.className.replace(/ $/,"");
    };
    function createVlidateMsg(element,str){
        var para=document.createElement("p");
        para.className="validateMsg";
        para.innerHTML=str;
        var parent = element.parentNode;
        parent.insertBefore(para,element);
    };
    function removeBefore(element){
        var parent = element.parentNode;
        parent.removeChild(element.previousSibling);
    };
    function removeAfter(element){
        var parent = element.parentNode;
        parent.removeChild(parent.previousSibling);
    };
    (function(){
        var Uid=document.getElementById("Uid");
        EventUtil.addHandler(Uid,"blur",function () {
            if(this.value===""){
                createVlidateMsg(this,"请输入您的姓名！");
            }
        });
        EventUtil.addHandler(Uid,"focus",function () {
            var pre=this.previousSibling;
            if(hasClass(pre,"validateMsg")) {
                removeBefore(this);
                this.value = "";
            }
        });
    })();
    (function(){
        var Tel=document.getElementById("Tel");
        EventUtil.addHandler(Tel,"blur",function () {
            if(this.value===""){
                createVlidateMsg(this,"请输入您的电话号码！");
            }else{
                var pattern=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
                if(!pattern.test(this.value)){
                    createVlidateMsg(this,"您输入的电话号码格式有误!");
                }
            }
        });
        EventUtil.addHandler(Tel,"focus",function () {
            var pre=this.previousSibling;
            if(hasClass(pre,"validateMsg")){
                removeBefore(this);
                this.value="";
            }
        });
    })();
    (function(){
        var Email=document.getElementById("Email");
        EventUtil.addHandler(Email,"blur",function(){
            if(this.value===""){
                createVlidateMsg(this,"请输入您的邮箱地址！");
            }else{
                var pattern=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
                if(!pattern.test(this.value)){
                    createVlidateMsg(this,"您输入的邮箱格式有误!");
                }
            }
        });
        EventUtil.addHandler(Email,"focus",function(){
            var pre=this.previousSibling;
            if(hasClass(pre,"validateMsg")){
                removeBefore(this);
                this.value="";
            }
        });
    })();
    (function(){
        var Selfintro=document.getElementById("Selfintro");
        EventUtil.addHandler(Selfintro,"blur",function () {
            if(this.value===""){
                createVlidateMsg(this,"请输入您的个人简介！");
            }
        });
        EventUtil.addHandler(Selfintro,"focus",function () {
            var pre=this.previousSibling;
            if(hasClass(pre,"validateMsg")) {
                removeBefore(this);
                this.value = "";
            }
        });
    })();
    (function(){
        var btn1=document.getElementById("btn1");
        EventUtil.addHandler(btn1,"click",function () {
            var UidVal=document.getElementById("Uid").value;
            var TelVal=document.getElementById("Tel").value;
            var EmailVal=document.getElementById("Email").value;
            var SelfintroVal=document.getElementById("Selfintro").value;
            var ProVal=document.getElementById("Pro").value;

            var UseridVal=document.getElementById("Userid");
            var TelephoneVal=document.getElementById("Telephone");
            var EmailboxVal=document.getElementById("Emailbox");
            var SelfintroductionVal=document.getElementById("Selfintroduction");
            var ProfessionalVal=document.getElementById("Professional");

            UseridVal.value=UidVal;
            TelephoneVal.value=TelVal;
            EmailboxVal.value=EmailVal
            SelfintroductionVal.value=SelfintroVal;
            ProfessionalVal.value=ProVal;
        });
    })();
    (function(){
        $('#sub1').on('click',function () {
            var formT = $('#joinForm').serializeArray();//返回Object对象
            var formJ = JSON.stringify(formT);//返回Json字符串
            $.ajax({
                type:'POST',
                url:'/submit',
                dataTpe:'text',
                data:{
                    'data':formJ
                },
                success:function () {
                    alert("报名成功！");
                    window.location.replace("http://localhost:8080")
                    console.log(formJ);
                },
                error:function () {
                    alert("报名失败！");
                }
            })
        });
        // var sub1=document.getElementById("sub1");
        // EventUtil.addHandler(sub1,"click",function () {
        //     //将表单数据转化为Json格式
        //     //  var formT = $("#joinForm").serializeJSON();//返回Object对象
        //     // var formJ = JSON.stringify(formT);//返回Json字符串
        //     var Userid = $('#Userid').val();
        //     var Telephone = $('#Telephone').val();
        //     $.ajax({
        //         type: "POST",
        //         url: "submit",
        //         dataType: "text",
        //         // $('joinForm').serialize()
        //         data:{
        //             'Userid':Userid,
        //             'Telephone':Telephone
        //         } ,
        //         success: function () {
        //             alert("报名成功！");
        //         },
        //         error: function () {
        //             alert("报名失败！");
        //         }
        //     })

        // });
    })();
};
// 创建XMLRequest对象
// function createXHR(){
//     if(typeof  XMLHttpRequest != "undefined"){
//         return new XMLHttpRequest();
//     }else if(typeof ActiveXObject != "undefined"){
//         if(typeof arguments.callee.activeXString != "string"){
//             var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],i,len;
//             for(i=0,len = versions.length;i<len;i++){
//                 try{
//                     new ActiveXObject(versions[i]);
//                     arguments.callee.activeXString = versions[i];
//                     break;
//                 }catch (ex){
//                     alert("Can't build XML");
//                 }
//             }
//         }
//         return new ActiveXObject(arguments.callee.activeXString);
//     }else{
//         throw new Error("No XHR object available.");
//     }
// }
// 原生IS实现
// (function(){
//     var sub1=document.getElementById("sub1");
//     EventUtil.addHandler(sub1,"click",function () {
//         var xhr = createXHR();
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState == 4){
//                 if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
//                     // 成功后执行的代码
//                     // alert(xhr.responseText);
//                     alert("报名成功！");
//                 }else{
//                     // alert("Request was unsuccessful:" + xhr.status);
//                     alert("报名失败，请重试！");
//                 }
//             }
//         };
//         xhr.open("post",url,true);
//         xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//         var form=document.getElementById("joinForm");
//         var form1=form.serialize();
//         xhr.send(form1);
//     });
// })();

