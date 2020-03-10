import React, { Component } from "react";
import { Link } from "gatsby";
import Prism from "prismjs";
import "../../node_modules/prismjs/themes/prism.css";
import "../../node_modules/prismjs/themes/prism-okaidia.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

class Index extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <Layout>
                <SEO title="CI / CD pake Jenkins" />
                <h1>CI / CD pake Jenkins</h1>

                <p>Jadi, apa sih CI / CD? keknya rame bener. CI / CD itu adalah <em>Continuous Integration</em> / <em>Continuous
                        Delivery</em> atatu <em>Continuous Deployment</em>.
                </p>
                <p>
                    <em>Continuous Integration</em> bisa diartiin juga integrasi terus-menerus. Apa yang diintegrasi? Aplikasi yang
                    lagi kita bangun. Bayangin, dalam satu tim ada yang ngerjain modul A, ada yang ngerjain modul B, ada yang bikin
                    <em>web service</em> buat <em>searching</em>. Nah masing-masing dari modul itu bisa punya source code
                    sendiri-sendiri yang terpisah. Padahal, sewaktu mau di <em>deliver</em> / <em>deploy</em> / <em>publish</em>
                    harus menjadi satu kesatuan.</p>
                <p>Nah, seandainya pekerjaan menyatukan berbagai modul itu bisa diotomatisasi sehingga <em>developer</em> bisa fokus
                    di satu pekerjaan yaitu <em>develop</em>. Selain mengintegrasi / menyatukan berbagai modul tersebut,
                    <em>Continuous Integration</em> juga memastikan hubungan antar modul tidak rusak. Sehingga ketika dijalankan
                    setelah di-<em>deploy</em> pun, tetap berjalan baik sebagaimana mestinya. Caranya? Continuous Integration akan
                    menyediakan alur kerja / <em>workflow</em> yang memastikan setiap langkah yang ditempuh untuk menyatukan
                    berbagai modul tersebut tidak berubah dan selalu konstan setiap kali penyatuan dilakukan.</p>
                <p>Beberapa <em>workflow</em> yang umum di <em>Continuous Integration</em> itu kaya gini:</p>
                <ol start=''>
                    <li>Menjalankan <em>test</em> setiap kali <em>branch</em> tertentu terindikasi ada <em>commit</em> baru.</li>
                    <li>Mengotomatisasi <em>build</em> dari <em>fresh repo checkout</em> dan setiap kali ada <em>commit</em> di
                        <em>branch</em> tertentu.</li>

                </ol>
                <p>Lalu, yang satu lagi adalah <em>Continuous Delivery</em> / <em>Continuous Deployment</em>. Sebenernya 2 hal ini
                    rada berbeda, <em>Continuous Delivery</em> memastikan setiap langkah yang ditempuh untuk membuat
                    <em>package</em> / <em>artifact</em> secara manual, bisa ditempuh dengan otomatis tanpa mengurangi hasil
                    <em>package</em> / <em>artifact</em> yang akan di deploy. <em>Package</em> / <em>artifact</em> ini adalah berkas
                    zip / terkompres yang akan di-<em>deploy</em> nantinya.</p>
                <p>
                    <em>Workflow</em> umum dari <em>Continuous Delivery</em> bisa kaya gini:</p>
                <ol start=''>
                    <li>Menerima / membaca hasil <em>build</em> dari <em>Continuous Integration</em>.
                    </li>
                    <li>Melakukan <em>post-build action</em>. Atau aksi yang akan dijalankan setelah <em>code</em> di
                        <em>build</em>. Bisa mengirimkan <em>email</em> ketika <em>build</em>-nya gagal atau memanggil <em>web
                            api</em> untuk mengirimkan <em>artifact</em> untuk dibaca oleh <em>Continuous Deployment</em>.
                    </li>

                </ol>
                <p>Sedangkan <em>Continuous Deployment</em> memastikan setiap langkah yang ditempuh untuk men-<em>deploy</em> tetep
                    konstan dan gak berubah. Apakah itu isi, lokasi, konfigurasi, ataupun langkah dari pen-<em>deploy</em>-an itu
                    sendiri.</p>
                <p>
                    <em>Workflow</em> umumnya bisa kaya gini:</p>
                <ol start=''>
                    <li>Baca <em>artifact</em>, <em>deploy</em> ke lokasi yang ditentuin.</li>
                    <li>Menjalankan otomatisasi konfigurasi berdasarkan <em>environment</em> tujuan.</li>

                </ol>
                <p>&nbsp;</p>
                <p>Di kesempatan kali ini, gue akan mencoba CI / CD pake Jenkins. Sebenernya dulu sempet pernah nyoba tapi gagal
                    terus dan baru kesampean lagi nyoba sekarang.</p>
                <p>Gue gakkan bahas soal <em>install</em>-meng-<em>install</em> karena di situsnya udah ada. Dan kalo pake
                    <em>Windows</em> cukup <em>install</em>
                    <em>.msi</em>-nya ajah, (❁´◡`❁).</p>
                <p>&nbsp;</p>

                <Link to="/">Kembali ke Halaman Utama</Link>
            </Layout>
        );
    }
}

export default Index;