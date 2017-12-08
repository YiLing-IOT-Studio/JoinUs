/**
 * Created by 周邓 on 2017/12/6.
 */

window.onload = function () {
    var EventUtil = {
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
};

