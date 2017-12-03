/**
 * Created by 周邓 on 2017/11/8.
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
    function insertAfter(newElement,element){
        var parent = element.parentNode;
        if (parent.lastChild === element) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, element.nextSibling);
        }
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
};

