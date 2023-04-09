import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />

                <meta name="title" content="Thambatty Vivekanandar Illaignar Narpani Mandram"></meta>
                <meta name="description" content="Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated with Nehru Yuva Kendra, The Nilgiris District which is under Government of India- Ministry of Youth Affairs and Sports."></meta>

                <meta property="og:title" content="TVINM"/>
                <meta property="og:description" content="Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated with Nehru Yuva Kendra, The Nilgiris District which is under Government of India- Ministry of Youth Affairs and Sports."/>


                <meta property="og:image" content="https://tvinm.com/logo.png"/>
                <meta property="og:url" content="https://tvinm.com/"/>

                <meta http-equiv="Cache-Control" content="no-cache" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta http-equiv="Expires" content="0" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
