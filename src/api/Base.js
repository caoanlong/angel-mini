class Base {
    constructor(req, url) {
        this.req = req
        this.url = url
        this._find = '/list'
        this._findById = '/info'
        this._add = '/add'
        this._update = '/update'
        this._del = '/del'
    }
    initUrl(data) {
        data._find && (this._find = data._find)
        data._findById && (this._findById = data._findById)
        data._add && (this._add = data._add)
        data._update && (this._update = data._update)
        data._del && (this._del = data._del)
    }
    find(data) {
        return new Promise((resolve, reject) => {
            this.req.get(this.url + this._find, data).then(res => {
                resolve(res.data.data)
            })
        })
    }
    findById(data) {
        return new Promise((resolve, reject) => {
            this.req.get(this.url + this._findById, data).then(res => {
                resolve(res.data.data)
            })
        })
    }
    add(data) {
        return this.req.post(this.url + this._add, data)
    }
    update(data) {
        return this.req.post(this.url + this._update, data)
    }
    del(data) {
        return this.req.post(this.url + this._del, data)
    }
}

export default Base