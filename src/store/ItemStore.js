import { makeAutoObservable } from "mobx"

export default class ItemStore {
    constructor() {
        this._data = []
        this._product = {}
        this._sum = ["16000", "25000", "14500", "200"]
        this._selectedCat = ""
        makeAutoObservable(this)
    }
    setSum(sum) {
        this._sum = sum
    }
    setData(dataIsArray) {
        this._data = dataIsArray
    }
    setProduct(dataIsArray) {
        this._product = dataIsArray
    }
    setSelectedCat(category) {
        this._selectedCat = category
    }
    get selectedCat() {
        return this._selectedCat
    }
    get sum() {
        return this._sum
    }
    get data() {
        return this._data
    }
    get product() {
        return this._product
    }
} 