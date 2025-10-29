import React from "react";

function Produk() {
    const daftarProduk = ["Baju", "Celana", "Sepatu", "Tas"]; // Contoh daftar produk

    return ( <
        div >
        <
        h2 > Daftar Produk < /h2> <
        ul > {
            daftarProduk.map((produk, index) => ( <
                li key = {
                    index
                } > {
                    produk
                } < /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default Produk;