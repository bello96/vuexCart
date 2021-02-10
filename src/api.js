// 商品列表
const _products = [
    { "id": 1, "title": "华为 mate 40", "price": 3999, "inventory": 2, "canAdd": 0 },
    { "id": 2, "title": "小米11", "price": 3299, "inventory": 4, "canAdd": 0 },
    { "id": 3, "title": "OPPO R20", "price": 4599, "inventory": 6, "canAdd": 0 },
    { "id": 4, "title": "Apple 11", "price": 6899, "inventory": 10, "canAdd": 0 },
    { "id": 5, "title": "三星S20 plus", "price": 7888, "inventory": 7, "canAdd": 0 }
]

export default {
    // 模拟请求数据
    getProducts(fn) {
        setTimeout(() => fn(_products), 100)
    },
    // 模拟提交支付时 失败或成功
    buyProducts(prodducts, success, errfn) {
        setTimeout(() => {
            Math.random() > 0.5 ? success() : errfn()
        }, 100)
    }
}