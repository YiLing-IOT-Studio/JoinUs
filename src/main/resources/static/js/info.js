/**
 * Created by 周邓 on 2017/12/6.
 */

window.onload = function () {
    $.ajax({
        type: 'get',
        url: '/submit',
        dataType: 'json',
        async: false,
        success: function (data) {
            $.each(data, function (index, obj) {
                var sec = $('<section></section>');
                // 添加标题
                var Uid = $('<p class="h5 left"></p>');
                Uid.append('<srtong>' + obj['name'] + '</srtong>');
                sec.append(Uid);
                // 添加主体
                var SelfIntro = $('<div class="Selfintroduction"></div>');
                SelfIntro.append(obj['selfbriefly']);
                sec.append(SelfIntro);
                //添加其余详细信息
                var Details = $('<p></p>');
                Details.append(obj['professional'] + ' /' + obj['tel'] + ' /' + obj['email']);
                sec.append(Details);
                $('#display').append(sec);
            });
        },
        error: function () {
            alert('获取消息失败！');
        }
    });
};

