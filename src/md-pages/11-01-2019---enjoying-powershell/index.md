---
path: "/2019-01-11"
date: "2019-01-11T10:57:02.804Z"
title: "Enjoying Powershell"
---

# Enjoying Powershell

<p>
    Last week I have a task that needs Batch script to automate deletion of many unused files from productions.
</p>
<p>
    Honestly I'm not too insterested in using Batch or Powershell script as I'm always make anything out of C#.
    But setting up the environment to run my C# script to use in production will likely rejected by Infra.
    So I force myself to use Powershell and format my code like-a-c#. 😄
</p>
<p>
    Whenever I learn some new language, Array type is a must in the first-try.
</p>
<p>
    Let's try generate some random data from <Link to="http://www.convertcsv.com/generate-test-data.htm">Online generator</Link>.
</p>
<pre>
    $data = @(
        "Clifford",
        "Lewis",
        "Ollie",
        "Leah",
        "Kathryn",
        "Carolyn",
        "Genevieve",
        "Adam",
        "Milton",
        "Eleanor",
        "Maurice",
        "Ethel",
        "Charles",
        "Danny",
        "Stephen",
        "Gabriel",
        "Susan",
        "Donald",
        "Isabella",
        "Patrick"
    )
</pre>

<Link to="/">Go back to the homepage</Link>