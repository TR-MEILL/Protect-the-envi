(function ($) {
    $.fn.extend({
        "flash": function (e) {
            $(this).css({
                "position": "relative"
            });
            $("head").append("<style type='text/css'>" + e + "::before{content: ''; position: absolute; width:50%;  height: 100%; top: 0; left: -100%; overflow: hidden;background: -moz-linear-gradient(left, rgba(255,255,255,0)0, rgba(255,255,255,0.5)50%, rgba(255,255,255,0)100%);background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,255,255,0)), color-stop(50%, rgba(255,255,255,0.5)), color-stop(100%, rgba(255,255,255,0)));background: -webkit-linear-gradient(left, rgba(255,255,255,0)0, rgba(255,255,255,0.5)50%, rgba(255,255,255,0)100%);background: -o-linear-gradient(left, rgba(255,255,255,0)0, rgba(255,255,255,0.5)50%, rgba(255,255,255,0)100%);-webkit-transform: skewX(-30deg);-moz-transform: skewX(-30deg);-o-transform: skewX(-30deg);}" + e + ":hover::before{left:120%; transition: all 0.4s linear;-webkit-transition: all 0.4s linear;-moz-transition: all 0.4s linear;-o-transition: all 0.4s linear;}</style>")
        }
    })
})(jQuery)