import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const Index = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hey hoo manusiaaa.</h1>
        <p>
            Selamat datang ke situs blog gue.
            <br/>
            Wohooo.
        </p>
        <p>
            Gambar bawaan Gatsby di bawah ini gak gue hapus karena <span role="img">👌</span>.
            <br/>
            Emaksudnyah <span role="img">👍</span>.
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    
        <h3>Ini index-nya</h3>
        <ul>
            <li><Link to="/2019-01-11">Menikmati Powershell</Link></li>
        </ul>
    </Layout>
);

export default Index;
