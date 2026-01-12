export const modalData = {
    demo: {
        id:'modalDemo',
        title: "Carga de datos DEMO para pruebas",
        message: `Se van a inyectar frecuencias de prueba (Datos DEMO) para calibrar los sensores del radar. Esto te permitirá comprobar el funcionamiento de la app 'Lista de Contactos' antes de comenzar a usar con datos reales.`,
        buttonText: `Cargar datos DEMO`,
        buttonIcon: `fa-solid fa-cloud-arrow-down mx-1`,
        btnColorSecondary: `btn-addDemo`,
        colorClass: "btn-addDemo"
    },
    delete_all: {
        id:'modalDelete',
        title: "Eliminado de todos los datos (Recomendado para limpiar los demos antes de usar)",
        message: "Funcionalidad pensada para borrar los datos demo antes de usar. Se eliminarán TODOS los registros actuales de la lista de contacto, DEMOS o no.",
        buttonText: `Borrar Agenda Completa`,
        buttonIcon: `fa-solid fa-meteor mx-1`,
        btnColorSecondary: `btn-deleteCard`,
        colorClass: "btn-delete"
    }
};