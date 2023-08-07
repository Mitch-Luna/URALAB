export default async function TableRoles(){
const roles = await
    return(
        <table className="table-auto">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <body>
                {
                    roles.map
                }
                <tr>
                    <td>1</td>
                    <td>Administrador</td>
                    <td>Editar, Eliminar</td>

                </tr>
            </body>
        </table>
    )
}