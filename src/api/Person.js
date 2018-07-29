import Base from './Base'
import request from '../utils/request'

class Person extends Base {
    constructor(req, url) {
        super(req, url)
    }
    suggest(data) {
        return this.req.get(this.url + '/suggest', data)
    }
}

export default new Person(request, '/person')