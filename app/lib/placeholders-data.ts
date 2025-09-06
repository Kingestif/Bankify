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