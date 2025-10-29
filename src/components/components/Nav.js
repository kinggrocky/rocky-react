import React from 'react';
import {
    Link
} from 'react-router-dom';

function Navbar() {
    return ( <
        nav style = {
            {
                background: '#f0f0f0',
                padding: '10px'
            }
        } >
        <
        ul style = {
            {
                listStyle: 'none',
                display: 'flex',
                gap: '20px',
                margin: 0
            }
        } >
        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/produk" > Produk < /Link></li >
        <
        li > < Link to = "/kategori" > Kategori < /Link></li >
        <
        /ul> <
        /nav>
    );
}

export default Navbar;