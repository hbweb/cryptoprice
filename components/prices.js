class Prices extends React.Component {
  state = {
    currency: 'USD',
  };

  render() {
    let list = '';

    switch (this.state.currency) {
      case 'EUR':
        list = (
          <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.EUR.description}:{' '}
            <span class="badge badge-primary">{this.props.bpi.EUR.code}</span>{' '}
            <strong>{this.props.bpi.EUR.rate}</strong>
          </li>
        );
        break;
      case 'GBP':
        list = (
          <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.GBP.description}:{' '}
            <span class="badge badge-primary">{this.props.bpi.GBP.code}</span>{' '}
            <strong>{this.props.bpi.GBP.rate}</strong>
          </li>
        );
        break;
      default:
        list = (
          <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.USD.description}:{' '}
            <span class="badge badge-primary">{this.props.bpi.USD.code}</span>{' '}
            <strong>{this.props.bpi.USD.rate}</strong>
          </li>
        );        
        break;
    }

    return (
      <div>
        <ul className="list-group mb-3">
         {list}
        </ul>

        <select onChange={ e => this.setState( {currency: e.target.value})} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );

  }
}

export default Prices;
