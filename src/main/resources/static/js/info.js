/**
 * Created by 周邓 on 2017/12/6.
 */

function ajaxTest(currentPage) {
    $.ajax({
        type: 'get',
        url: '/getAllInfo',
        data: { rows: "10", pageNo: currentPage },
        dataType: 'json',
        success: function (data) {
            var rows=10;//每行显示条数
            var clear='';
            $('#display').html(clear);
            $.each(data, function (index, obj) {
                if(index!=(data.length-1)){
                    var sec = $('<section></section>');
                    // 添加标题
                    var Uid = $('<p class="h5 left"></p>');
                    Uid.append('<strong>' + obj['name'] + '</strong>');
                    sec.append(Uid);
                    // 添加主体
                    var SelfIntro = $('<div class="Selfintroduction"></div>');
                    SelfIntro.append(obj['selfbriefly']+'<br/>');
                    sec.append(SelfIntro);
                    //添加其余详细信息
                    var Details = $('<p></p>');
                    Details.append(obj['professional'] + '&nbsp;&nbsp;&nbsp;/&nbsp;' + obj['tel'] + '&nbsp;&nbsp;&nbsp;/&nbsp;' + obj['email']);
                    sec.append(Details);
                    $('#display').append(sec);
                }
            });
            //分页
            $("#pagination").paging({
                rows:rows,//每页显示条数
                pageNo: currentPage,//当前所在页码
                totalPage: data[data.length-1]['totalPage'],//总页数
                totalSize:data[data.length-1]['totalSize'],//总记录数
                callback: function (currentPage) {
                    ajaxTest(currentPage);
                }
            })
        },
        error: function () {
            alert('获取消息失败！');
        }
    });
};

