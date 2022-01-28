const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

//aws dynamodb configration
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "", //It is left blank for security. Please use your own keys.
    secretAccessKey: "", //It is left blank for security. Please use your own keys.
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
})

let docClient = new AWS.DynamoDB.DocumentClient();

//table name in dynamodb
var table = "product"

//adding data to the table 
exports.add = async (params) => {
    const item = {
        TableName: table,
        Item: {
            productId: uuidv4(),
            stock: params.stock,
            productName: params.productName,
            isDiscount: params.isDiscount,
            category: {
                categoryId: params.category.categoryId,
                categoryName: params.category.categoryName,
            }
        }
    }
    try {
        await docClient.put(item).promise()
        return {
            status: true,
            message: "Product Added"
        }
    } catch (error) {
        return {
            status: false,
            message: err
        }
    }
}

//fetching all data from table  
exports.fetchAll = async () => {
    const items = {
        TableName: table
    }
    try {
        const data = await docClient.scan(items).promise()
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

//fetching data by id from table 
exports.fetchById = async (params) => {
    const item = {
        TableName: table,
        Key: {
            productId: params.id
        }
    }

    try {
        const data = await docClient.get(item).promise()
        return {
            status: true,
            data:data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

//updating a data from a table 
exports.update = async (params) => {
    const item = {
        TableName: table,
        Key: {
            productId: params.productId
        },
        UpdateExpression: "set stock = :stock",
        ExpressionAttributeValues: {
            ":stock": params.stock
        },
        ReturnValues: "UPDATED_NEW"
    }
    try {
        const data = await docClient.update(item).promise()
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

//deleting a data from a table 
exports.delete = async (params) => {
    const item = {
        TableName: table,
        Key: {
            productId: params.id
        },
        ConditionExpression: "isDiscount = :val",
        ExpressionAttributeValues: {
            ":val": false
        }
    }
    try {
        const data = await docClient.delete(item).promise()
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

//fetch discounted products from the table 
exports.fetchByDiscountFilter = async () => {
    const items = {
        TableName: table,
        FilterExpression:"isDiscount = :disc",
        ExpressionAttributeValues:{
            ":disc":true
        }
    }
    
    try {
        const data = await docClient.scan(items).promise()
        return {
            status: true,
            data: data
        }
    } catch (err) {
        
        return {
            status: false,
            message: err
        }
    }
}