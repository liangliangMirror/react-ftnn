export default (state = {
    data: {
        xxx: "xxx",
<<<<<<< HEAD
        MyOtherQuotationHong:[],
        IsLogin:false
=======
        head: [
            { leftbutton: false },
            { headmiddle: ["自选", "市场"] },
            {
                rigthicon: [
                    {
                        icon: "icon-search"
                    },
                    {
                        icon: "icon-message"
                    }
                ]
            }
        ],
        sorts: true,
>>>>>>> 652822336e622ac0ad46f15c6b4e802dbf8b7f67
    },
    //数据写这里
}, action) => {
    switch (action.type) {
        //传值过来判断后做你想要的逻辑
<<<<<<< HEAD
        case 'Add_My_Other_Quotation_Hong_conter':
            return {
                ...state,
                MyOtherQuotationHong:[action.payload]
            }
        case 'Add_My_Account_My_Stcku_Login':
            return {
                ...state,
                IsLogin:action.payload
            }
=======
        case 'HEAD':
            state.data.head = action.obj
            return { ...state }
        case 'BBB':
            if (window.localStorage.getItem("head") == null) {
            } else {
                let obj = JSON.parse(window.localStorage.getItem("head"))
                state.data.head = obj
            }
            return { ...state }
        case 'SORT':

            if (action.ok) {
                state.data.sorts = true
            } else {
                state.data.sorts = false;
            }
            return { ...state }
>>>>>>> 652822336e622ac0ad46f15c6b4e802dbf8b7f67
        default:
            return state
    }
}