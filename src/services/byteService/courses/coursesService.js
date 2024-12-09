import RestfulHandler from '../../../module/handler/restfulHandler';
//import RestfulHandler from '../../../../module/handler/restfulHandler';
import enviroment from '../../../settings/enviroments';

class CoursesService {
    constructor() {
        const { umgCollab } = enviroment.api;
        this.service = new RestfulHandler(umgCollab.url, umgCollab.timeout);
        this.endpoint = umgCollab.endpoint.admin.cursos;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
        };
    }

    getCourses = () => {
        const endpoint = this.endpoint.cursos;
        return this.service.request({
            method: 'GET',
            endpoint,
            headers: this.defaultHeaders,
        });
    };

    generateCourseExcelById = (id) => {
        const endpoint = this.endpoint.cursosExcelId.replace('${id}', id);
        return this.service.request({
            method: 'GET',
            endpoint,
            headers: this.defaultHeaders,
            responseType: 'blob', // Para manejar descargas de archivos
        });
    };

    generateAllCoursesExcel = () => {
        const endpoint = this.endpoint.cursosExcel;
        return this.service.request({
            method: 'GET',
            endpoint,
            headers: this.defaultHeaders,
            responseType: 'blob', // Para manejar descargas de archivos
        });
    };

    generateAllCoursesPdf = () => {
        const endpoint = this.endpoint.cursosPdf;
        return this.service.request({
            method: 'GET',
            endpoint,
            headers: this.defaultHeaders,
            responseType: 'blob', // Para manejar descargas de archivos
        });
    };

    generateCoursePdfById = (id) => {
        const endpoint = this.endpoint.cursosPdfId.replace('${id}', id);
        return this.service.request({
            method: 'GET',
            endpoint,
            headers: this.defaultHeaders,
            responseType: 'blob', // Para manejar descargas de archivos
        });
    };
}

export default CoursesService;
