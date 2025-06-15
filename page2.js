import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p2 = () =>{
    return __c(
        "div",
        {
            style:`position:relative;height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-color:#0050d4;background-position:top center;background-image:url(./assets/page2_bg.png);background-size:100%;` + __sC['pages'](),
            id:"p2"
        },
        [
            __SYD.p2SubHeader(),
            __SYD.page2_ring_big(),
            __SYD.page2_ring_small()
        ],
        {
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.p2SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;justify-content:center;align-items:center;gap:20px;padding:0 ${__p(["p2SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p2SubHeader" , "breakVal"],false) ? "column" : "row"};`
        },
        [
            // __c(
            //     "div",
            //     {
            //         style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/about.png")`
            //     },[],{genericStyle:["bg_fit"]}
            // ),
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                },
                [
                    __SYD.p2_tab()
                ]
            ),
        ],
        {
            createState:{
                stateName:"p2SubHeader",
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

__SYD.p2_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;background:transparent;",
            // class:"p2_tab"
        },
        [
            // __SYD.p2_text1(),
            __SYD.p2_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;padding-top:50px;"
                },
                [   
                    __SYD.p2_text3(),
                    __SYD.p2_text4(),
                ]
            ),
            __SYD.p2_button()

        ]
    )
}

__SYD.p2_text1 = () =>{
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


__SYD.p2_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#16143a;text-align:center;color:#175dfb;text-shadow:2px 2px 0px #171717;text-transform:unset;text-decoration:underline;"
        },
        [
            __c(
                "p",
                {},["about SONIC"]
            )
        ]
    )
}

__SYD.p2_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "color:#ffffff;text-align:center;text-shadow:1px 1px 0px #171717;"
        },
        [
            __c(
                "p",
                {},["$SONIC is more than a meme coin — it’s a blue-blazing, turbo-charged movement on Base. Inspired by everyone’s favorite hedgehog, $SONIC delivers high-speed transactions, ultra-low fees, and pure community energy. No dev tax tricks, no red tape — just velocity, vibes, and value."]
            )
        ]
    )
}

__SYD.p2_text4 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "color:#ffffff;text-align:center;text-shadow:1px 1px 0px #171717;"
        },
        [
            __c(
                "p",
                {},["Whether you’re here for nostalgia, moonshots, or just good vibes, $SONIC is where degens and gamers unite. With Chaos Emerald staking, an iconic brand feel, and lightning-speed utility, $SONIC is racing to the top — one ring at a time."]
            )
        ]
    )
}

__SYD.p2_button = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get() + "font-family:font1;align-self:center;",
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},["read more"])
        ]
    )
}