export default (state = {
    data: {
        xxx: "xxx",
        MyOtherQuotationHong:[]
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
        case 'BBB':

            return state
        default:
            return state
    }
}