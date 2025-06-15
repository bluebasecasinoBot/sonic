import { SYD_VAR, __SYD, __c , __p} from "./sydneyDom_v3.js";
import "./icon.js"
import "./text_lib.js"

__SYD.footer_main_parent = () =>{
    const check = __p(["subContainer" , "scaled"],false);

    return __c(
        'div',
        {
            style:`height:fit-content;padding:${check ? "20px 50px" : "20px 10px"};padding-bottom:20px;background:${" #ffffff "};width:100%;display:flex;flex-direction:column;row-gap:40px;align-items:center;`,
            id:"footer"
        },
        [
            __c(
                'div',
                {
                    style:'display:flex;flex-direction:column;column-gap:30px;flex-wrap:wrap;row-gap:30px;width:100%;max-width:1000px;height:fit-content;justify-content:center;align-items:flex-start;background:#0050d4;border-radius:20px;padding:20px 0px;'
                },
                [
                    // __SYD.footer_main_child1(),
                    __c(
                        "div",
                        {
                            style:"height:fit-content;width:100%;display:flex;display:flex;column-gap:30px;flex-wrap:wrap;row-gap:30px;justify-content:center;align-items:flex-start;"
                        },
                        [
                            __SYD.footer_main_child2(),
                            __SYD.footer_main_child3()
                        ]
                    ),
                    __c(
                        "a",
                        {
                            style:"font-size:14px;font-weight:900;align-self:center;color:#ffffff;",
                            href:`${location.href}`
                        },
                        [
                            `${location.href}`.split("//")[1].split("/")[0]
                        ]
                    )
                ]
            ),
            // __c('hr',{style:'height:2px;width:100%;background:lightgrey'}),
            // __c(
            //     'div',
            //     {
            //         style:'display:flex;padding:10px;justify-content:center;align-items:center'
            //     },
            //     [
            //         __SYD.text_lib_type_p_glob_vmax({cnt:`© ${new Date().getFullYear()} All Right Reserved`,size:'12px',clr:'#fff'})
            //     ]
            // )
        ]
    )
}

__SYD.footer_main_child2 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:fit-content;width:30%;min-width:fit-content;background:unset;flex-direction:column;padding:10px;row-gap:20px;margin-top:50px;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Socials' , size:'20px' , w:'700' , inject:'text-decoration:underline;',clr:'#fff'}),
            __c(
                'div',
                {
                    style:'display:flex;column-gap:50px'
                },
                [
                    __c(
                        'div',
                        {
                            style:'height:fit-content;width:fit-content;display:flex;flex-direction:column;row-gap:20px'
                        },[
                            __c(
                                'div',
                                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                                [
                                    __SYD.iconify_20px({attr:'fa-brands fa-x-twitter' , clr :' #ffffff '}),//<i class="fa-solid fa-envelope-open-text"></i>
                                    __c('a',{href:"ivviera@gmail.com"},[__SYD.text_lib_type_p_glob_vmax({cnt:'Twitter', size:'14px' , w:'500',clr:'#fff'})]),
                                ]
                            ),
                
                            __c(
                                'div',
                                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                                [
                                    __SYD.iconify_20px({attr:'fa-brands fa-telegram' , clr :' #ffffff '}),//<i class="fa-solid fa-phone-volume"></i>
                                    __c('a',{href:"tel:07072111027"},[__SYD.text_lib_type_p_glob_vmax({cnt:'Telegram', size:'14px' , w:'500',clr:'#fff'})]),
                                ]
                            ),
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.footer_main_hyperLink_txt = ({link = '' , cnt = ''} = {}) =>{
    return __c(
        'a',
        {
            href:link
        },
        [
            __SYD.text_lib_type_p_glob_vmax({cnt:cnt, size:'14px',w:'500',clr:'#fff' , inject:"font-weight:700;"})
        ]
    )
}

__SYD.footer_main_child3 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:100%;width:30%;min-width:fit-content;background:unset;flex-direction:column;padding:10px;column-gap:30px;row-gap:30px;margin-top:50px'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Navigate' , size:'20px' , w:'700' , inject:'text-decoration:underline;',clr:'#fff'}),
            __c(
                'div',
                {
                    style:'height:fit-content;width:fit-content;display:flex;flex-direction:column;row-gap:20px;'
                },[
                    __SYD.footer_main_hyperLink_txt({link:'#p1',cnt:'Home'}),
                    __SYD.footer_main_hyperLink_txt({link:'#p2',cnt:'About'}),
                    __SYD.footer_main_hyperLink_txt({link:'#p3',cnt:'Tokenomics'}),
                    __SYD.footer_main_hyperLink_txt({link:'#p_portal_sonic',cnt:'Buy sonic'}),
                    __SYD.footer_main_hyperLink_txt({link:'#p7',cnt:'FAQ'}),
                ]
            )
        ]
    )
}