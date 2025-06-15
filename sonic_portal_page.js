import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p_portal_sonic = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-color:#0050d4;background-position:top center;background-image:url(./assets/page4_bg.png);background-size:100%;" + __sC['pages'](),
            id:"p_portal_sonic"
        },
        [
            __SYD.p_portal_sonicSubHeader()
        ],
        {
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.p_portal_sonicSubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p_portal_sonicSubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p_portal_sonicSubHeader" , "breakVal"],false) ? "column" : "row"}`
        },
        [
            __SYD.goldenRings_container__portal(),
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p_portal_sonicSubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                },
                [
                    __SYD.p_portal_sonic_tab()
                ]
            ),
        ],
        {
            createState:{
                stateName:"p_portal_sonicSubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false}
            }
        }
    )
}

__SYD.p_portal_sonic_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;",
            // class:"p2_tab"
        },
        [
            // __SYD.p_portal_sonic_text1(),
            __SYD.p_portal_sonic_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;"
                },
                [   
                    __SYD.p_portal_sonic_text3(),
                    // __SYD.p_portal_sonic_text4(),
                ]
            ),
            // __SYD.p_portal_sonic_button()

        ]
    )
}

__SYD.p_portal_sonic_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["read more about Alita"]
            )
        ]
    )
}


__SYD.p_portal_sonic_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color: #ffffff ;text-align:center;text-shadow:2px 2px 0px #171717;text-transform:unset;"
        },
        [
            __c(
                "p",
                {},["buy SONIC"]
            )
        ]
    )
}

__SYD.p_portal_sonic_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "display:flex;flex-direction:column;gap:15px;color:#ffffff;text-shadow:1px 1px 0px #171717;padding:10px;"
        },
        [
            __c(
                "p",
                {style:"font-family:font2;font-size:16px;"},["🏁 Getting $SONIC Is Easy — Here's How:"]
            ),
            __c(
                "ul",
                {
                    style:"display:flex;flex-direction:column;gap:10px;font-size:14px;"
                },
                [
                    __c("li",{style:""} , ["Some text here"]),
                    __c("li",{style:""} , ["Some text here"]),
                    __c("li",{style:""} , ["Some text here"]),
                    __c("li",{style:""} , ["Some text here"]),
                    __c("li",{style:""} , ["Some text here"]),
                ]
            )
        ]
    )
}

__SYD.p_portal_sonic_text4 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get()
        },
        [
            __c(
                "p",
                {},["She didn’t wait for permission. Neither should you. Alita AI gives you the power to create, conquer, and thrive in a decentralized world—on your terms. This isn’t just a meme coin. It’s your legacy in the making."]
            )
        ]
    )
}

__SYD.p_portal_sonic_button = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},["read more"])
        ]
    )
}