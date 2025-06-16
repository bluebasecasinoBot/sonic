import { __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p7 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-color:#fff;` + __sC['pages']() + "paddingBottom:unset;",
            id:"p7"
        },
        [
            __SYD.p7SubHeader()
        ],{genericStyle:["bg_cover"]}
    )
}

__SYD.p7SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            // __SYD.p7_text1(),
            __SYD.p7_text2(),
            __SYD.p7_text3(),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p7SubHeader" , "breakVal"],false) ? "column" : "row"}`
                },
                [
                    __c(
                        "div",
                        {
                            style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/faq_image.png")`
                        },[],{genericStyle:["bg_fit"]}
                    ),
                    __c(
                        "div",
                        {
                            style:`height:fit-content;width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                        },
                        [
                            __SYD.faqsQuestionaire()
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:"p7SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false,
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}
            }
        }
    )
}

__SYD.p7_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#0050d4;text-decoration:underline;text-align:center;"
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#0050d4;`},["💬 Got Questions? We’re Moving Fast, But We’ve Got Answers."])
        ]
    )
}

__SYD.p7_text4 = (textContent) =>{
    return __c(
        "p",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} padding:10px 20px;color:#0050d4;`},[textContent])
        ]
    )
}

__SYD.faqsQuestionaire = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:700px;display:flex;flex-direction:column;row-gap:10px;padding-top:50px;"
        },
        [
            __SYD.questionTab({
                question:"What is $SONIC?",
                answer:"$SONIC is a high-speed meme coin built on Basechain, inspired by the iconic blue hedgehog. It's designed for ultra-fast transactions, low fees, and a hyper-engaged community.",
                index:0
            }),
            __SYD.questionTab({
                question:"Is $SONIC affiliated with Sega?",
                answer:"Nope! $SONIC is fan-made and community-driven. This is a tribute, not an official product.",
                index:1
            }),
            __SYD.questionTab({
                question:"What’s the utility of $SONIC?",
                answer:"Beyond being a lightning-fast meme coin, $SONIC features Chaos Emerald staking, future NFT integrations, and meme-based competitions. We're here to evolve.",
                index:2
            }),
            __SYD.questionTab({
                question:"How do I stake my tokens?",
                answer:"Staking will launch soon under our Chaos Emerald program. Stay tuned via our Twitter and Telegram.",
                index:3
            }),
            __SYD.questionTab({
                question:"Is there a max supply?",
                answer:"Yes — $SONIC has a hard-capped supply. No hidden mints, no stealth inflation. What you see is what you get.",
                index:4
            }),
            __SYD.questionTab({
                question:`Will "Sonic Rush: Basebreaker" be play-to-earn (P2E)?`,
                answer:"Yes! The game will feature play-to-earn mechanics powered by $SONIC. Race, collect rings, complete missions, and compete on leaderboards to earn token rewards and exclusive NFT badges. The faster you go, the more you gain — just like the blue blur himself.",
                index:5
            })

        ],
        {
            createState:{
                stateName:"faqsQuestionaire",
                state:{
                    currentOpen:0,
                    height:"0px"
                }
            }
        }
    )
}

__SYD.questionTab = ({
    question = "hello world",
    answer = "answer to hello world",
    index = 0
} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;flex-direction:column;width:100%;color:#000;font-size:18px;"
        },
        [
            __c(
                "div",
                {
                    style:"height:60px;width:100%;cursor:pointer;padding:10px 20px;align-items:center;display:flex;position:relative;font-weight:700;border:3px solid rgb(4, 62, 155);border-radius:15px;color:#fff;background:#0050d4;"
                },
                [
                    question,
                    __c(
                        "i",
                        {
                            style:"position:absolute;top:50%;transform:translateY(-50%);right:15px;pointer-events:none;transition:transform linear .3s;",
                            class:"fa-solid fa-chevron-down"
                        }
                    )

                ],
                {
                    events:{
                        onclick:e =>{
                            const state = __g("faqsQuestionaire");
                            state.currentOpen = index;
                            state.height = getComputedStyle(e.target.parentElement.querySelector(".foldTab p")).height
                            __u("faqsQuestionaire" , {type:"a" , value:state});
                        }
                    }
                }
            ),
            __c(
                "div",
                {
                    style:`height:${__p(["faqsQuestionaire" , "currentOpen"],0) === index ? __p(["faqsQuestionaire" , "height"],"0px") : "0px"};width:100%;transition:all linear .3s;overflow:hidden;`,
                    class:"foldTab"
                },
                [
                    __SYD.p7_text4(answer)
                ]
            )
        ]
    )
}