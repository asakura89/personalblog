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
                <SEO title="Menikmati Powershell" />
                <h1>Menikmati Powershell</h1>
                <p>
                    Minggu lalu gue ada kerjaan, task, ya kerjaan deh, yang butuh <code>script</code> buat ngotomatisasi penghapusan <em>file-file</em> gaguns (baca: gak guna) dari <em>Production server</em>.
                </p>
                <p>
                    Dari dulu sebenernya gue rada males bikin <code>script-script-an</code> pake <code>Batch</code> atau <code>Powershell</code>.
                    Karena gue kalo mau apa-apa pasti pake <code>C#</code>. Udahlah cinta mati gueh lah itu. Etapi kan ya, kalo mau nyiapin <em>environment</em>-nya lagi, di <em>Production</em> pula, keknya bakalan ditolak Infra.
                    Jadi pada akhirnya yaa balik lagi kalo gak <code>Batch</code> atau <code>Powershell</code>. Sebenernya ada satu lagi sih, <code>WSH</code> (<code>Windows Scripting Host</code>). Cuma saia rada <em>reluctant</em> karena semacam <em>unsupported</em> lagi karena pake <code>VBScript</code> dan <code>JScript</code>.
                </p>
                <p>
                    Balik lagi ke pembicaraan awal.
                    Naah, ternyata si <code>Powershell</code> ini tuh memang di-<em>build on top of <code>.Net</code></em>. Jadi dia bisa jalanin <code>C#</code>, dia bisa pake dll <code>.Net</code> juga.
                    Wow?!?! baru tau saia.<span role="img">😄</span>
                </p>
                <p>
                    Oke deh kita mulai aja.
                </p>
                <p>
                    Kalo gue belajar bahasa pemrograman baru. Apapun itu, pasti mulainya dari manipulasi <code>Array</code>.
                </p>
                <p>
                    Pertama-tama, kita butuh data <em>dummy</em> nih. Coba kita ambil dari <em><Link to="http://www.convertcsv.com/generate-test-data.htm">Online generator</Link></em> ini yak.
                    Udah gitu kita masukin ke <code>$data</code>. Terus kita tampilin ke layar dengan memanggil <code>$data</code> lagi.
                </p>
                <pre className="line-numbers language-powershell">
                    <code>
                        {
`$data = @(
    "Clifford", "Lewis", "Ollie", "Leah", "Kathryn", "Carolyn",
    "Genevieve", "Adam", "Milton", "Eleanor", "Maurice", "Ethel",
    "Charles", "Danny", "Stephen", "Gabriel", "Susan", "Donald",
    "Isabella", "Patrick"
)

$data`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Btw, jangan lupa buat di-<em>save</em> ya ke <code>Script.ps1</code> atau apapun <code>.ps1</code>. Terus <em>run</em>!!!
                </p>
                <p>Nanti jadi gini.</p>
                <pre>
                    <code>
                        {
`Clifford
Lewis
Ollie
Leah
Kathryn
Carolyn
Genevieve
Adam
Milton
Eleanor
Maurice
Ethel
Charles
Danny
Stephen
Gabriel
Susan
Donald
Isabella
Patrick`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Sedikit review nih. Operasi <code>Array</code> itu umumnya ada 4. Yaitu adalah jeng-jeng-jeng-jeng!!!!! <code>Map</code>, <code>Filter</code>, <code>Sort</code>, <code>Aggregate/Reduce</code>.
                    Kita mulai dari yang pertama dulu yaa.
                </p>
                <p>
                    1. Map
                </p>
                <p>
                    <code>Map</code> di <code>Powershell</code> mirip kaya yang ada di <code>.Net</code>. <em>Keyword</em>-nya <code>Select-Object</code>.
                    Sedangkan kalo <code>.Net</code> pake <code>.Select()</code>.
                </p>
                <pre className="line-numbers language-powershell">
                    <code>
                        {
`$counter = 1;
$mapped = $data |
    Select-Object { ("{0}. {1}" -f $counter++,$_) }

$mapped`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Hasilnya kira-kira kaya di bawah ini nih.
                </p>
                <pre>
                    <code>
                        {
` ("{0}. {1}" -f $counter++,$_)
-------------------------------
1. Clifford
1. Lewis
1. Ollie
1. Leah
1. Kathryn
1. Carolyn
1. Genevieve
1. Adam
1. Milton
1. Eleanor
1. Maurice
1. Ethel
1. Charles
1. Danny
1. Stephen
1. Gabriel
1. Susan
1. Donald
1. Isabella
1. Patrick`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Ada yang aneh gak? Perhatiin gak angkanya? 1 semua kan?
                </p>
                <p>
                    Ternyata itu karena di <code>Powershell</code> ada <em>scope</em> di <em>scripting</em>-nya. Yang mana <code>$counter</code> di dalem <em>block</em> <code>Select-Object</code> sewaktu di-<code>++</code> gakkan pengaruh ke <code>$counter</code> yang di luar.
                    Karena pada dasarnya <code>Select-Object</code> ini adalah <em>function</em> yang mana <em>function</em> punya <em>scope</em> sendiri.
                    Bisa dibaca <Link to="https://ss64.com/ps/syntax-scopes.html">disini</Link> ya.
                </p>
                <p>
                    Nah, karena kita pake <em>file</em> buat ngejalanin <code>script</code>-nya jadi kit pake <em>scope</em> <code>$script:</code>.
                </p>
                <p>
                    Jadi gini nih.
                </p>
                <pre className="line-numbers language-powershell">
                    <code>
                        {
`$counter = 1;
$mapped = $data |
    Select-Object { ("{0}. {1}" -f $script:counter++,$_) }

$mapped`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Hasilnya jadinya bener kaya di bawah ini.
                </p>
                <pre>
                    <code>
                        {
` ("{0}. {1}" -f $script:counter++,$_)
--------------------------------------
1. Clifford
2. Lewis
3. Ollie
4. Leah
5. Kathryn
6. Carolyn
7. Genevieve
8. Adam
9. Milton
10. Eleanor
11. Maurice
12. Ethel
13. Charles
14. Danny
15. Stephen
16. Gabriel
17. Susan
18. Donald
19. Isabella
20. Patrick`
                        }
                    </code>
                </pre>
                <br />
                <p>2. Filter</p>
                <p>
                    Dan lagi-lagi <code>Filter</code> di <code>Powershell</code> mirip kaya yang ada di <code>.Net</code>.
                    Kalo di <code>.Net</code> itu <code>.Where()</code>. Kalo di <code>Powershell</code>-nya itu <code>Where-Object</code>.
                </p>
                <pre className="line-numbers language-powershell">
                    <code>
                        {
`$counter = 1;
$mapped = $data |
    Where-Object { $_.ToLower().Contains("an") } |
    Select-Object { ("{0}. {1}" -f $script:counter++,$_) }

$mapped`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    <em>Output</em>-nya gini.
                </p>
                <pre>
                    <code>
                        {
` ("{0}. {1}" -f $script:counter++,$_)
--------------------------------------
1. Eleanor
2. Danny
3. Susan`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Nyadar gak kalo di atas gue pake <code>.ToLower()</code> sama <code>.Contains()</code>-nya <code>.Net</code>?
                    Yuhuuu. Cadas ye gak? <span role="img">👍</span>
                </p>
                <p>
                    3. Sort
                </p>
                <p>
                    Nah, kali ini <code>Sort</code> di <code>Powershell</code> beda sama yang ada di <code>.Net</code>.
                    <code>.Net</code> punya = <code>.OrderBy()</code> atau <code>.OrderByDescending()</code>. Sedangkan <code>Powershell</code> punya = <code>Sort-Object</code> atau <code>Sort-Object -Descending</code>.
                    Contohnya di bawah ini.
                </p>
                <pre className="line-numbers language-powershell">
                    <code>
                        {
`$counter = 1;
$mapped = $data |
    Where-Object { $_.ToLower().StartsWith("le") -or $_.ToLower().EndsWith("el") -or ($_[0].ToString().ToLower() -eq "d") } |
    Sort-Object -Descending { $_ } |
    Select-Object { ("{0}. {1}" -f $script:counter++,$_) }

$mapped`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Yang mana meng-<em>output</em>-kan inih.
                </p>
                <pre>
                    <code>
                        {
` ("{0}. {1}" -f $script:counter++,$_)
--------------------------------------
1. Lewis
2. Leah
3. Gabriel
4. Ethel
5. Donald
6. Danny`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Setelah beberapa kali <em>output</em>, liat gak <em>header</em>-nya? <code>("{0}. {1}" -f $script:counter++,$_)</code> kan?
                </p>
                <p>
                    Itu karena <code>Select-Object</code> sejatinya memang untuk <code>Object</code>. Apapun yang di <em>output</em>-in <code>Select-Object</code> pasti <code>type</code>-nya <code>Object</code>.
                    Apa hubungannya sama <em>header</em> yang suneh (baca: suka aneh) gitu? Itu karena <code>Select-Object</code>-nya <em>projecting anonymous object</em>.
                    Lalu gimana biar gak <em>anonymous</em>? Kita pake yang namanya <em>computed property</em> atau <em>calculated property</em>.
                    Contohnya gini.
                </p>
                <pre className="line-numbers language-powershell">
                    <code>
                        {
`$counter = 1;
$mapped = $data |
    Where-Object { $_.ToLower().StartsWith("le") -or $_.ToLower().EndsWith("el") -or ($_[0].ToString().ToLower() -eq "d") } |
    Sort-Object -Descending { $_ } |
    Select-Object @{ Name = "Mapped";Expression = {"{0}. {1}" -f $script:counter++,$_} }

$mapped`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    Nanti hasilnya jadi gini.
                </p>
                <pre>
                    <code>
                        {
`Mapped
--------------------------------------
1. Lewis
2. Leah
3. Gabriel
4. Ethel
5. Donald
6. Danny`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    4. Aggregate / Reduce
                </p>
                <p>
                    
                </p>

                <Link to="/">Kembali ke Halaman Utama</Link>
            </Layout>
        );
    }
}

export default Index;