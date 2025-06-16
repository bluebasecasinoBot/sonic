import { __c, __m, __p, __SYD, __v, add_resize_task, manage_mediaQuery, SYD_VAR } from "./sydneyDom_v3.js"

import "./nav.js"
import "./page1.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./page5.js"
import "./page6.js"
import "./page7.js"
import "./footer.js"
import "./variable.js"
import "./sonic_portal_page.js"
import "./sonic_game_page.js"

// Additional assets
import "./sonic_program_assets.js"

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:`min-height:100vh;width:100vw;background:${SYD_VAR.mainClr.get()};font-family:font2;overflow:hidden;`
        },
        [
            __SYD.navBar(),
            __SYD.sub_container(),
            __SYD.footer_main_parent()
        ],
        {
            createState:{
                stateName:"container"
            }
        }
    )
}

__SYD.sub_container = () =>{
    return __c(
        "div",
        {
            style:"height:100%;width:100%;"
        },
        [
            __SYD.runningSonic(),
            __SYD.p1(),
            __SYD.p2(),
            __SYD.p3(),
            __SYD.p_portal_sonic(),
            __SYD.p_game_sonic(),
            // __SYD.p4(),
            // __SYD.p5(),
            // __SYD.p6(),
            __SYD.p7(),
        ]
    )
}

__m(__SYD.container() , ()=>{
    //reset size of ring to be round
    function resize_ring()
    {
        let {height , width} = getComputedStyle(__v["goldenRings_container"]);

        height = Number(height.split("px")[0]);
        width = Number(width.split("px")[0]);

        __p(["goldenRings_container" , "updateState"])(height > width ? width : height);
        __p(["goldenRings_container__portal" , "updateState"])(height > width ? width : height);

    };

    function resize_running_sonic()
    {
        console.log(window.innerWidth < 500 ? 120 : 200)
        __p(["runningSonic" , "updateState"])(window.innerWidth < 500 ? 120 : 200 , "size")
    }

    function scroll_effect(e)
    {
        const currentScrollPos = window.scrollY
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        __p(["runningSonic" , "updateState"])((currentScrollPos / scrollHeight) * 100 , "leftMov");
        if(!__p(["runningSonic" , "run"],false)) __p(["runningSonic" , "updateState"])(true , "run");
    }

    manage_mediaQuery(window.innerWidth);

    add_resize_task(resize_ring);
    add_resize_task(resize_running_sonic);

    window.onload = () =>{
        resize_ring();
        resize_running_sonic();
    };
    window.onscroll = scroll_effect;


    window.onscrollend = () =>{
        __p(["runningSonic" , "updateState"])(false , "run");
    }

});