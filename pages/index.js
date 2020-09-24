import Fetch from 'isomorphic-unfetch';
import Layout from "../components/layout";
import Prices from '../components/prices';

const Index = (props) => (
    <Layout>
    <div>
        <h1>Bitcoin price today</h1>
        <Prices bpi={props.bpi} />
    </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice/GBP.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

export default Index;

