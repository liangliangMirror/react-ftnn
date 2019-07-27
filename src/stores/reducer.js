export default (state = {
    data: {
        xxx: "xxx",
        MyOtherQuotationHong:[],
        IsLogin:false
    },
    //数据写这里
}, action) => {
    switch (action.type) {
        //传值过来判断后做你想要的逻辑
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
        default:
            return state
    }
}