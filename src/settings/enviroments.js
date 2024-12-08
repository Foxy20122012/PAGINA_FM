
const environment = "https://apiumgcollab.onrender.com";


module.exports = {
    api: {
        umgCollab: {
            url: environment, 
            timeout: 900000,
            endpoint: {
                admin: {
                    cursos: {
                        cursos: '/api/Cursos',
                        temas: '/api/topics'
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