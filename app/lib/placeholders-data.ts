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