export default (state = {
    data: {
        xxx: "xxx",
        MyOtherQuotationHong:[],
        IsLogin:false,
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
<<<<<<< HEAD
=======
        stock: "",
>>>>>>> shen
    },
    //数据写这里
}, action) => {
    switch (action.type) {
        //传值过来判断后做你想要的逻辑
<<<<<<< HEAD
=======

>>>>>>> shen
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
<<<<<<< HEAD
=======

        case "STOCK":
            state.data.stock = action.stock;
            return { ...state }

>>>>>>> shen
        default:
            return state
    }
}