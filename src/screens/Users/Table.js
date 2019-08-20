import React from 'react';
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
const Table = ({ users }) => (
    <table className="table table-borderless mt-4">
        <thead>
            <tr>
                <th>
                    Nombre
					</th>
                <th>
                    Correo
					</th>
                <th>
                    Enlace
					</th>
            </tr>
        </thead>
        <tbody>
            {users.items && users.items.length > 0 && users.items.map((item, i) => (
                <tr key={item.id}>
                    <td data-testid={i === 0 && 'username'}>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.website}</td>
                    <td>
                        <Link to={`/publicaciones/${i}`}>
                            <span className="fas fa-eye"></span>
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);


export default Table