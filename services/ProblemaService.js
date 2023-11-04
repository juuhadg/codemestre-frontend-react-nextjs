import HttpRequest from "./HttpRequests";

export default class ProblemaService extends HttpRequest{
    
    async executeCode(dados) {
        return this.post('/executeCode', dados)
    }

}