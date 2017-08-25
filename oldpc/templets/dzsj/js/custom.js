/**
 * 主要包含各个模块的js动画特效
 * by TianYu
 * 时间：2017-04-12
 */

//医生团队轮播
function show(curIndex, index) {
    var time = 800;
    var adTxt = $(".n_yst .n_ysjs .c_ysjs");
    var adImg = $(".n_yst .n_ysjs img");
    $.easing.def = "easeOutQuad";
    $(".n_yst .n_ysjs").eq(curIndex).stop(false, true).fadeOut(time);
    adTxt.eq(curIndex).stop(false, true).animate({top: "100px"}, time);
    adImg.eq(curIndex).stop(false, true).animate({left: "120px"}, time);
    setTimeout(function () {
        $(".n_yst .n_ysjs").eq(index).stop(false, true).fadeIn(time);
        // adTxt.eq(index).children("p").css({ paddingTop: "50px", paddingBottom: "50px" }).stop(false, true).animate({ paddingTop: "0", paddingBottom: "0" }, time);
        adTxt.eq(index).css({top: "-100px", opacity: "0"}).stop(false, true).animate({top: "0px", opacity: "1"}, time);
        adImg.eq(index).css({left: "-120px", opacity: "0"}).stop(false, true).animate({
            left: "0px",
            opacity: "1"
        }, time);
    }, 200)
    curIndex = index;
}


/* 首页大图轮播 */
var home_index = 0;
setInterval('_carousel()', 5000);
function _carousel() {
    var len = $('.n_dzsj').attr("len");
    var _index = home_index;
    if (home_index < len - 1) {
        home_index++;
    } else {
        home_index = 0;
    }
    $('.n_dzsj').removeClass("bg_" + _index);
    $('.n_dzsj').stop(false, true).addClass("bg_" + home_index);
    $(".n_dzsj").find("a").hide();
    if ($(".n_dzsj").find("a[index=" + home_index + "]").length > 0) {
        $(".n_dzsj").find("a[index=" + home_index + "]").show();
    }
}

$(function () {

    /* 垂直菜单导航 */
    $(".n_nav_select").hover(function () {
        $(".c_select_wrap").removeClass("hide");
    }, function () {
        $(".c_select_wrap").addClass("hide");
    });

    $(".c_select").hover(function () {
        $(this).find(".n_select_more").removeClass("hide");
    }, function () {
        $(this).find(".n_select_more").addClass("hide");
    });

    /* 热门项目动画 */
    function rmxmhover(o) {
        var img = o.find("img");
        var p = o.find("p");
        var src = img.attr("src");
        var ary = src.split(".");
        img.attr("src", ary[0] + "_h." + ary[1]);
        p.css("color", "#FFF");
        o.css("background-color", "#6A368B");
    }

    function rmxmRemove(o) {
        var img = o.find("img");
        var p = o.find("p");
        var src = img.attr("src");
        var ary = src.split("_");
        img.attr("src", ary[0] + ary[1].substr(1, 4));
        p.css("color", "#B46DE5");
        o.css("background-color", "transparent");
    }

    $(".c_rmxm").hover(function () {
        rmxmhover($(this));
    }, function () {
        rmxmRemove($(this));
    });

    //医生团队轮播图
    $(".n_yst .n_ysjs").eq(0).fadeIn(800);
    $(".n_yslb .c_yslb_wrap a").click(function () {
        if (!$(this).hasClass("show")) {
            var curIndex = $(".n_yslb .c_yslb_wrap a").index($(".n_yslb a.show"));
            $(".n_yslb a.show").removeClass("show");
            $(this).addClass("show");
            var index = $(".n_yslb .c_yslb_wrap a").index($(this));
            show(curIndex, index);
        }
    });
    $(".n_yslb .c_arrow_r").click(function () {
        var curIndex = $(".n_yslb .c_yslb_wrap a").index($(".n_yslb a.show"));
        if (curIndex + 1 < $(".n_yslb .c_yslb_wrap a").size()) {
            $(".n_yslb a.show").removeClass("show");
            $(".n_yslb .c_yslb_wrap a").eq(curIndex + 1).addClass("show");
            index = curIndex + 1;
            show(curIndex, index);
        } else {
            return false;
        }

    });
    $(".n_yslb .c_arrow_l").click(function () {
        var curIndex = $(".n_yslb .c_yslb_wrap a").index($(".n_yslb a.show"));
        if (curIndex - 1 > -1) {
            $(".n_yslb a.show").removeClass("show");
            $(".n_yslb .c_yslb_wrap a").eq(curIndex - 1).addClass("show");
            index = curIndex - 1;
            show(curIndex, index);
        } else {
            return false;
        }
    });

    //轮播图特效
    $(".c_carousel_thumb").click(function () {
        var o = $(this).find("img");
        var src = o.attr("thumbimg");
        var title = o.attr("title");
        var href = o.attr("_href");
        var alt = o.attr("alt");
        $(".c_carousel_thumb.selected").removeClass("selected");
        $(this).addClass("selected");
        $(".c_carousel img").attr("src", src);
        $(".c_carousel a").attr("href", href);
        $(".c_carousel p a").attr("href", href);
        $(".c_carousel p a").html(title);
        $(".c_carousel a img").attr("alt", alt);
    });

    //新闻资讯选项卡
    $(".n_xwzx_zx .n_xwzx_tab_wrap").eq(0).addClass("show");
    $(".n_xwzx_zx .n_xwzx_tab a").click(function () {
        if (!$(this).hasClass("selected")) {
            $(".n_xwzx_zx a.selected").removeClass("selected");
            $(this).addClass("selected");
            var id = $(this).attr("id");
            $(".n_xwzx_zx .n_xwzx_tab_wrap.show").removeClass("show");
            $(".n_xwzx_zx .n_xwzx_tab_wrap[id=tab_sub_" + id + "]").addClass("show");
        }
    });

    //右侧边栏咨询服务
    $(".n_right_sider li").hover(function () {
        $(this).find(".n_right_sider_img").css({"background-position-x": "-50px", "background-color": "#FFF"});
        $(this).animate({right: "140px"}, 500);
    }, function () {
        var bg_color = $(this).attr("bg_color");
        $(this).animate({right: "0px"}, 500);
        $(this).find(".n_right_sider_img").css({"background-position-x": "-4px", "background-color": bg_color});
    });

    //预约轮播
    $('#list_lh').vTicker({
        speed: 500,
        pause: 3000,
        animation: 'fade',
        mousePause: false,
        showItems: 9
    });

    //双均动态
    $('.n_xwzx_tab a').click(function () {
        $('.n_xwzx_tab a').removeClass('selected');
        $(this).addClass('selected');
        var uid = $(this).data('uid');
        $('.n_xwzx_tab_wrap').removeClass('show');
        $('.n_xwzx_tab_wrap').each(function () {
            if ($(this).data('uid') == uid)
                $(this).addClass('show');
        })
    });

    //相信品牌的力量
    $('.n_ppll_tab a').click(function () {
        $('.n_ppll_tab a').removeClass('selected');
        $(this).addClass('selected');
        var uid = $(this).data('uid');
        $('.n_ppll_tab_wrap').removeClass('show');
        $('.n_ppll_tab_wrap').each(function () {
            if ($(this).data('uid') == uid)
                $(this).addClass('show');
        });
    });

    //banner轮播
    var i = 0;
    function banner() {
        $('.n_dzsj').removeClass('bg_' + i);
        i++;
        if (i > 2) {
            i = 0;
        }
        $('.n_dzsj').addClass('bg_' + i);
        setTimeout(banner, 5000);
    }

    setTimeout(banner, 5000);

    $('.n_dzsj').click(function () {
        if ($(this).hasClass('bg_0')) {
            window.open('/huodong/qixi.html');
        }
    });
});

function returnTop() {
    $('html,body').animate({scrollTop: '0px'}, 800);
}

//首页中间弹出对话框
// $(function () {
//     var f = setTimeout("popupShow()", 15000);
//     $(".n_popup_closed").click(function () {
//         clearTimeout(f);
//         $(".n_popup").css({"top": "-50px", "opacity": "0", "z-index": "-1"});
//         setTimeout("popupShow()", 50000);
//     });
// });

function popupShow() {
    $(".n_popup").css({"top": "0px", "opacity": "1", "z-index": "9"});
}


//医生团队选项卡
$(".n_ppll_tab_wrap").eq(0).addClass("show");
$(".n_ppll_tab a").click(function () {
    $(".n_ppll_tab a.selected").removeClass("selected");
    $(this).addClass("selected");
    var index = $(".n_ppll .n_ppll_tab a").index($(this));
    $(".n_ppll .n_ppll_tab_wrap.show").removeClass("show");
    $(".n_ppll .n_ppll_tab_wrap").eq(index).addClass("show");
});

//真人真事
$(".n_zrzs_wrap").hover(function () {
    $(".n_zrzs_wrap.show").removeClass("show");
    $(this).addClass("show");
    var index = $(".n_zrzs_al .n_zrzs_wrap").index($(this));
    var big = $(this).find("img").attr("big");
    $(".n_zrzs_al .n_zrzs_article.show").removeClass("show");
    $(".n_zrzs_al .n_zrzs_article").eq(index).addClass("show");
    $(".n_zrzs_big").attr("src", big);
});