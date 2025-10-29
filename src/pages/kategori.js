import React from "react";

function Kategori() {
    const daftarKategori = ["Pakaian", "Aksesoris", "Elektronik"]; // Contoh daftar kategori

    return ( <
        div >
        <
        h2 > Daftar Kategori < /h2> <
        ul > {
            daftarKategori.map((kategori, index) => ( <
                li key = {
                    index
                } > {
                    kategori
                } < /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default Kategori;