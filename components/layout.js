import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <title>CryptoPrice</title>        
        <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
        <style jsx>{`
            #footer li {
                float: left;
                margin-right: 1.5em;
                margin-bottom: 1.5em;
            }
            
            #footer p {
                clear: left;
                margin-bottom: 0;
            }
        `}
        </style>
        <Navbar></Navbar>        
        <div className="container">

            {props.children}

            <footer id="footer">
            <div class="row">
            <div class="col-lg-12">
                <ul class="list-unstyled mt-5 mb-3">                
                <li><a href="https://github.com/hbweb/cryptoprice">GitHub</a></li>
                <li><a href="./about">About</a></li>              
                </ul>                
                <p>Made by <a href="https://quaycreative.com">Hung Bui</a>.</p>            
                <p>Based on <a href="https://getbootstrap.com" rel="nofollow">Bootstrap</a>. Icons from <a href="https://fontawesome.com/" rel="nofollow">Font Awesome</a>. Web fonts from <a href="https://fonts.google.com/" rel="nofollow">Google</a>.</p>
                <p>API from <a href="https://www.coindesk.com/coindesk-api" rel="nofollow">CoinDesk</a></p>                
            </div>
                
            </div>

        </footer>
        </div>        
    </div>
    
);


export default Layout;