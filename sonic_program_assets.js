import { __c, __g, __p, __SYD, __u } from "./sydneyDom_v3.js";

__SYD.goldenRings_container = () =>{
    return __c(
        "div",
        {
            style:`height:100vw;max-height:calc(100vh - 150px);display:flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;perspective:900px;`,
            class:"p1SubHeader_image_cont"
        },
        [
            __SYD.goldenRing()
        ],
        {
            createState:{
                stateName:"goldenRings_container",
                state:{
                    ringSize:100,
                    updateState:(size) =>{
                        const state = __g("goldenRings_container");
                        state.ringSize = size;
                        __u("goldenRings_container" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}

__SYD.goldenRing = () =>{
    return __c(
        "div",
        {
            class:"ring-wrapper",
            style:`min-height:${__p(["goldenRings_container" , "ringSize"],100)}px;min-width:${__p(["goldenRings_container" , "ringSize"],100)}px;max-height:${__p(["goldenRings_container" , "ringSize"],100)}px;max-width:${__p(["goldenRings_container" , "ringSize"],100)}px;height:${__p(["goldenRings_container" , "ringSize"],100)}px;width:${__p(["goldenRings_container" , "ringSize"],100)}px;`
        },
        [
            __c(
                "div",
                {
                    style:"height:100%;width:100%;background-size:80%;background-image:url('./assets/sonic_page1_img__.png');"
                },
                [

                ],{
                    genericStyle:["bg_cover"]
                }
            )
        ],
        {
            type:"goldenRings"
        }
    )
}


__SYD.goldenRings_container__portal = () =>{
    return __c(
        "a",
        {
            style:`height:100vw;max-height:calc(100vh - 150px);display:flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;perspective:900px;`,
            class:"p1SubHeader_image_cont",
            href:"#"
        },
        [
            __SYD.goldenRing__portal()
        ],
        {
            createState:{
                stateName:"goldenRings_container__portal",
                state:{
                    ringSize:100,
                    updateState:(size) =>{
                        const state = __g("goldenRings_container__portal");
                        state.ringSize = size;
                        __u("goldenRings_container__portal" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}

__SYD.goldenRing__portal = () =>{
    return __c(
        "div",
        {
            class:"ring-wrapper-portal",
            style:`min-height:${__p(["goldenRings_container__portal" , "ringSize"],100)}px;min-width:${__p(["goldenRings_container__portal" , "ringSize"],100)}px;max-height:${__p(["goldenRings_container__portal" , "ringSize"],100)}px;max-width:${__p(["goldenRings_container__portal" , "ringSize"],100)}px;height:${__p(["goldenRings_container__portal" , "ringSize"],100)}px;width:${__p(["goldenRings_container__portal" , "ringSize"],100)}px;`
        },
        [
            __c(
                "div",
                {
                    style:"height:100%;width:100%;border-radius:50%;background: radial-gradient(circle at center, rgba(255, 230, 0, 0.2) 0%, rgba(255, 230, 0, 0.05) 50%,transparent 70%),radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 60%),radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, rgba(0, 50, 100, 0.1) 80%);background-color:rgb(2, 35, 88);position:relative;",
                    class:"goldenRing__portal__elem"
                },
                [

                ],{
                    genericStyle:["bg_cover"]
                }
            )
        ],
        {
            type:"goldenRing__portal"
        }
    )
}


__SYD.runningSonic = () =>{
    return __c(
        "div",
        {
            style:`height:${__p(["runningSonic" , "size"],120)}px;width:${__p(["runningSonic" , "size"],120)}px;position:fixed;bottom:0px;left:${__p(["runningSonic" , "leftMov"],0)}%;background-image:url(./assets/running_sonic${__p(["runningSonic" , "run"],false) ? "_2" : ""}.png);z-index:999;pointer-events:none;`
        },
        [

        ],
        {
            genericStyle:["bg_fit"],
            createState:{
                stateName:"runningSonic",
                state:{
                    leftMov:0,
                    size:120,
                    run:false,
                    updateState:(pos , prop) =>{
                        const state = __g("runningSonic");
                        state[prop] = pos;
                        __u("runningSonic" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}

__SYD.page2_ring_big = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;top:10px;left:15px;height:120px;width:120px;background-image:url(./assets/page2_ring.png);",
            class:"float-rotate-hover"
        },
        [],
        {
            genericStyle:["bg_fit"]
        }
    )
}

__SYD.page2_ring_small = () =>{
    return __c(
        "div",
        {
            style:"position:absolute;bottom:10px;right:15px;height:80px;width:80px;background-image:url(./assets/page2_ring.png);",
            class:"float-rotate-hover"
        },
        [],
        {
            genericStyle:["bg_fit"]
        }
    )
}