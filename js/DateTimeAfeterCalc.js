//用于计算当前时间距离指定日期，过了多久
//替换id 为 dateTimeAfter 的目标
//需求：目标的text内容为日期，格式为：<span>%Y/%m/%d</span>
//author: CWHISME
//git: https://github.com/CWHISME
//2020.1.14

var nowStr = "今天";
var dayStr = "天前";
// var monthStr = "个月前";
// var monthLastStr = "上个月";
// var yearStr = "年前";
// var yearLastStr = "去年";

//Jquery 版本
// $(document).ready(function () {
//     $.each('span#dateTimeAfter').each(function () {
//         var dateStr = $(this).text().trim();
//         var dateArray = dateStr.split("-");
//         //月份的数值，介于 0 ~ 11 之间。用本地时间表示。
//         var date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
//         var dateNow = new Date();
//         var dayCount=parseInt((dateNow-date)/86400/1000);
//         var finalStr=dayCount==0?nowStr:dayCount+dayStr;
//         // var year = dateNow.getFullYear() - date.getFullYear();
//         // if (year == 0) {
//         //     var month = dateNow.getMonth() - date.getMonth();
//         //     if (month == 0) {
//         //         var day = dateNow.getDate() - date.getDate();
//         //         if (day == 0)
//         //             finalStr = nowStr;
//         //         else finalStr = day + dayStr;
//         //     }else if (month == 1) {
//         //         finalStr = monthLastStr;
//         //     }
//         //     else finalStr = month + monthStr;
//         // } else if (year == 1) {
//         //     finalStr = yearLastStr;
//         // } else finalStr = year + yearStr;
//         $(this).text(finalStr);
//     });
// });

//shoka 版本
const refreshDateTimeOfDay = function () {
    $.each('time',function (x) {
        if (x.innerText.indexOf("(") > -1) return;
        var date = new Date(x.dateTime);
        var dateNow = new Date();
        var dayCount = parseInt((dateNow - date) / 86400 / 1000);
        var finalStr = dayCount == 0 ? nowStr : dayCount + dayStr;
        x.innerText = x.innerText.concat("(", finalStr, ")");
    });
}

window.addEventListener('pjax:success', refreshDateTimeOfDay)
refreshDateTimeOfDay();
console.log("哇，你看到我了！ Σ(ﾟдﾟ；)\n为什么会看到我呢？反正看见了也没用....\n\n嗯...然后，我的 QQ 是 785300468\nBy CWHISME since 2015\n\nლ(╹◡╹ლ)");
// window.addEventListener('DOMContentLoaded', pageInit);