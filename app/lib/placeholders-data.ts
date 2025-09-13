type TransactionType = {
    description:string,
    transactionId:string,
    type:string,
    card:string,
    date:string,
    amount:string,
    receipt:string
}

export const TransactionData:TransactionType[] = [
    {
        description:"Spotify Subscription",
        transactionId:"#12548796",
        type:"Shopping",
        card:"1234 ****",
        date:"28 Jan, 12.30 AM",
        amount:"-$2,500",
        receipt:"download"
    },

    {
        description:"Freepik Sales",
        transactionId:"#12548796",
        type:"Transfer",
        card:"1234 ****",
        date:"25 Jan, 10.40 PM",
        amount:"+$750",
        receipt:"download"
    },

    {
        description:"Mobile Service",
        transactionId:"#12548796",
        type:"Service",
        card:"1234 ****",
        date:"25 Jan, 10.40 PM",
        amount:"-$150",
        receipt:"download"
    },

    {
        description:"Wilson",
        transactionId:"#12548796",
        type:"Transfer",
        card:"1234 ****",
        date:"25 Jan, 10.40 PM",
        amount:"+$840",
        receipt:"download"
    },
    
    {
        description:"Emilly",
        transactionId:"#12548796",
        type:"Transfer",
        card:"1234 ****",
        date:"25 Jan, 10.40 PM",
        amount:"-$1050",
        receipt:"download"
    },
]

type accountsType = {
    imageUrl:string;
    name:string;
    balance:string
}

export const accountsData:accountsType[] = [
    {
        imageUrl:"/acc1.png",
        name:"My Balance",
        balance: "$43,200"
    },

    {
        imageUrl:"/acc2.png",
        name:"Income",
        balance: "$10,200"
    },

    {
        imageUrl:"/acc3.png",
        name:"Expense",
        balance: "$2,200"
    },
    
    {
        imageUrl:"/acc4.png",
        name:"Total Saving",
        balance: "$5,200"
    },
]

type LastTransaction = {
    imageUrl:string;
    name:string;
    date:string;
    type:string;
    cardNumber:string;
    status:string;
    amount:string;
};

export const LastTransactionData:LastTransaction[] = [
    {
        imageUrl:"/trans1.png",
        name:"Spotify Subscription",
        date:"25 Jan 2021",
        type:"Shopping",
        cardNumber:"1234 ****",
        status:"Pending",
        amount:"-$123"
    },
        
    {
        imageUrl:"/trans2.png",
        name:"Mobile Service",
        date:"25 Jan 2021",
        type:"Service",
        cardNumber:"1234 ****",
        status:"Completed",
        amount:"-$123"
    },
        
    {
        imageUrl:"/trans3.png",
        name:"Emiliy Watson",
        date:"25 Jan 2021",
        type:"Shopping",
        cardNumber:"1234 ****",
        status:"Completed",
        amount:"+$123"
    },

]

type InvoicesType = {
    imageUrl:string;
    name:string;
    time:string;
    amount:string;
}

export const InvoicesData:InvoicesType[] = [
    {
        imageUrl:"/inv1.png",
        name:"Apple Store",
        time:"9h ago",
        amount:"$200"
    },

    {
        imageUrl:"/inv2.png",
        name:"Michael",
        time:"2 days ago",
        amount:"$200"
    },

    {
        imageUrl:"/inv3.png",
        name:"Playstation",
        time:"5 days ago",
        amount:"$200"
    },

    {
        imageUrl:"/inv4.png",
        name:"Williams",
        time:"6 days ago",
        amount:"$200"
    }
]

type InvestmentType = {
    imageUrl:string;
    name:string;
    balance:string
}

export const InvestmentData:InvestmentType[] = [
    {
        imageUrl:"/invest1.png",
        name:"Total Invested amount",
        balance: "$143,200"
    },

    {
        imageUrl:"/invest2.png",
        name:"Number of investments",
        balance: "$10,200"
    },

    {
        imageUrl:"/invest3.png",
        name:"Rate of return",
        balance: "+5.8%"
    }
]

type myInvestment = {
    icon:string;
    name:string;
    type:string;
    value:string;
    percentage:string;
}

export const MyIvestmentData:myInvestment[]=[
    {
        icon:"/myenv1.png",
        name:"Apple Store",
        type:"E-commerce Marketplace",
        value:"$43,432",
        percentage:"+12%",
    },

    {
        icon:"/myenv2.png",
        name:"Samsung Mobile",
        type:"E-commerce Marketplace",
        value:"$23,432",
        percentage:"-4%",
    },

    {
        icon:"/myenv3.png",
        name:"Tesla Motors",
        type:"Electric Vehicles",
        value:"$5,432",
        percentage:"+24%",
    }
]

type trending = {
    number:string;
    name:string;
    price:string;
    return:string;
}

export const TrendingData:trending[]=[
    {
        number:"01",
        name:"Trivago",
        price:"$234",
        return:"+5%"
    },
    {
        number:"02",
        name:"Canon",
        price:"$352",
        return:"-8%"
    },
    {
        number:"01",
        name:"Uber Food",
        price:"$325",
        return:"+25%"
    },
    {
        number:"01",
        name:"Nokia",
        price:"$553",
        return:"-9%"
    },
    {
        number:"01",
        name:"Tiktok",
        price:"$152",
        return:"+10%"
    },   
]

type cardListType = {
    icon:string;
}

export const CardListData:cardListType[]=[
    {
        icon:"/card1.png"
    },

    {
        icon:"/card2.png"
    },

    {
        icon:"/card3.png"
    }
]

type cardSetting = {
    icon:string;
    name:string;
    option:string;
}

export const CardSettingData:cardSetting[] = [
    {
        icon:"/set1.png",
        name:"Block Card",
        option:"Instantly block your card"
    },

    {
        icon:"/set2.png",
        name:"Change Pin Code",
        option:"Choose another pin code"
    },

    {
        icon:"/set3.png",
        name:"Add to Google Pay",
        option:"Withdraw without any card"
    },

    {
        icon:"/set4.png",
        name:"Add to Apple Pay",
        option:"Withdraw without any card"
    },

    {
        icon:"/set4.png",
        name:"Add to Apple Store",
        option:"Withdraw without any card"
    },
]

