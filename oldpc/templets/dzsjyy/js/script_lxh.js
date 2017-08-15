function addLoadEvent(A) {
    var B = window.onload;
    if (typeof window.onload != "function") {} else {
        window.onload = function() {
            B();
            A()
        }
    }
}
function Focus() {
    function G(P) {
        return document.getElementById(P)
    }
    function A(P, Q) {
        return (typeof Q == "object" ? Q: G(Q)).getElementsByTagName(P)
    }
    var K = null;
    var I = G("jMaria");
    var F = G("jMaria-pic");
    var E = A("li", F);
    var B = G("jMaria-btn");
    var C = A("li", B);
    var M = 0;
    function L() {
        E[0].style.filter = "alpha(opacity:100)";
        E[0].style.opacity = 100;
		E[0].style.display = "block";
        E[0].style.zIndex = 5
    }
    for (var H = 0; H < E.length; H++) {
        C[H].sIndex = H;
        C[H].onclick = function() {
            if (this.sIndex == M) {
                return
            }
            M = this.sIndex;
            O()
        }
    }
    G("jMaria-leftbtn").onclick = G("prev").onclick = function() {
        M--;
        if (M == -1) {
            M = E.length - 1
        }
        O()
    };
    G("jMaria-rightbtn").onclick = G("next").onclick = function() {
        M++;
        if (M == E.length) {
            M = 0
        }
        O()
    };
    function O() {
        for (var P = 0; P < E.length; P++) {
            J(E[P], "opacity", 0);
            E[P].style.zIndex = 0;
			E[P].style.display = "none";
            C[P].className = ""
        }
        J(E[M], "opacity", 100);
		$(".shec").hide().eq(M).show();
        E[M].style.zIndex = 5;
		E[M].style.display = "block";
        C[M].className = "active";
        if (C.length > Math.round(B.clientHeight / C[0].clientHeight)) {
            if (M == 0) {
                J(A("ul", B)[0], "top", 0);
                return
            }
            if (M >= 1 && M <= C.length - Math.round(B.clientHeight / C[0].clientHeight)) {
                J(A("ul", B)[0], "top", -(M - 1) * C[0].clientHeight)
            } else {
                J(A("ul", B)[0], "top", -(C.length - Math.round(B.clientHeight / C[0].clientHeight)) * C[0].clientHeight)
            }
        }
    }
    function N() {
        if (M >= E.length - 1) {
            M = 0
        } else {
            M++
        }
        O()
    }
    aTimer = setInterval(N, 300000);
    L();
    function D(P, Q) {
        if (P.currentStyle) {
            return P.currentStyle[Q]
        } else {
            return getComputedStyle(P, false)[Q]
        }
    }
    function J(Q, R, P) {
        clearInterval(Q.timer);
        Q.timer = setInterval(function() {
            var T = 0;
            if (R == "opacity") {
                T = parseInt(parseFloat(D(Q, R)) * 100)
            } else {
                T = parseInt(D(Q, R))
            }
            var S = (P - T) / 5;
            S = S > 0 ? Math.ceil(S) : Math.floor(S);
            if (T == P) {
                clearInterval(Q.timer)
            } else {
                if (R == "opacity") {
                    Q.style.filter = "alpha(opacity:" + (T + S) + ")";
                    Q.style.opacity = (T + S) / 100
                } else {
                    Q.style[R] = T + S + "px"
                }
            }
        },
        30)
    }
    G("jMaria").onmouseover = function() {
        clearInterval(aTimer)
    };
    G("jMaria").onmouseout = function() {
        aTimer = setInterval(N, 300000)
    }
};