
const environment = "https://apiumgcollab.onrender.com";


module.exports = {
    api: {
        umgCollab: {
            url: environment, 
            timeout: 900000,
            endpoint: {
                admin: {
                    cursos: {
                        cursos: '/api/cursos',
                        temas: '/api/topics',
                        cursosExcelId: '/api/Cursos/${id}/excel', // Generar excel de un curso
                        cursosExcel: '/api/cursosExcel', // Generar excel de todos los cursos
                        cursosPdf: '/api/cursosPdf', // Generar pdf de todos los cursos
                        cursosPdfId: '/api/cursos/${id}/pdf', // Generar pdf de un curso
                    },
                    registerProfessors:{
                        registroProcesor: '/api/usuarios/catedraticos'
                    },
                    registerStudents:{
                        registroEstudiante: '/api/usuarios/estudiantes'
                    },
                },
                general:{
                    categories:{
                        postCategory: '/api/categoria/post',
                        eventsCategory: '/api/categoria/Eventos',
                        newsCategory: '/api/categoria/news'
                    },
                    posts:{
                        posts: '/api/posts',
                        news: '/api/news',
                        events: '/api/events',
                        pending:{
                            posts: '/api/postsvisible',
                            news: '/api/newssvisible',
                            events: '/api/eventsvisible'
                        },
                        approoval:{
                            approval: '/api/posts/visibility',
                            reject: '/api/posts/reject/{id}'
                        },
                        approved:{
                            approvedPosts: '/api/postsApproved',
                            approvedPostsId: '/api/posts/postsApproved/{id}',
                            approvedNews: '/api/newsApproved',
                            approvedNewsId: '/api/posts/newsApproved/{id}',
                            approvedEvents: '/api/eventsApproved',
                            approvedEventsId: '/api/posts/eventsApproved/{id}',
                        }
                    },
                    session:{
                        login:{
                            loginAdmin: '/api/loginAdmin',
                        }
                    },
                    dashboard:{
                        dashboard: '/api/dashboard/metrics'
                    }

                }
            }
        }
    }
};
