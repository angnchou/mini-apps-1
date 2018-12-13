// const Shipping = props => {
//   return (
//     <form onSubmit={this.handleShippingSubmit}>
//       <input type="text" value={this.state.address1} />
//       <input type="text" value={this.state.address2} />
//       <input type="text" value={this.state.city} />
//       <input type="text" value={this.state.state} />
//       <input type="text" value={this.state.zip_code} />
//       <input type="submit" value="Next" />
//     </form>
//   );
// };

// const Billing = props => {
//   return (
//     <form onSubmit={this.handleBillingSubmit}>
//       <input type="text" value={this.state.credit_card} />
//       <input type="text" value={this.state.expiry_date} />
//       <input type="text" value={this.state.CVV} />
//       <input type="text" value={this.state.billing_zip_code} />
//       <input type="submit" value="Next" />
//     </form>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 0,
      name: "",
      email: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip_code: "",
      credit_card: "",
      expiry_date: "",
      CVV: "",
      billing_zip_code: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  }

  //   handleShippingSubmit(event) {
  //     this.setState({
  //       address1: event.target.value,
  //       address2: event.target.value,
  //       city: event.target.value,
  //       state: event.target.value,
  //       zip_code: event.target.value
  //     });
  //   }

  //   handleBillingSubmit(event) {
  //     this.setState({
  //       credit_card: event.target.value,
  //       expiry_date: event.target.value,
  //       CVV: event.target.value,
  //       billing_zip_code: event.target.value
  //     });
  //   }
  renderButton() {
    return (
      <button
        onClick={() => {
          this.setState({ stepNumber: this.state.stepNumber + 1 });
        }}
      >
        {"checkout"}
      </button>
    );
  }

  renderAccountForm() {
    return (
      <Account
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }

  renderBody() {
    switch (this.state.stepNumber) {
      case 0:
        return this.renderButton();
      case 1:
        return this.renderAccountForm();
    }
  }

  render() {
    return (
      <div>
        <h1>Shopping hoi!</h1>
        {this.renderBody()}
      </div>
    );

    // return (
    //   <div>
    //     <h1>Shopping time!</h1>

    //     <button>{"Checkout"}</button>
    //     <div>
    //       <Account
    //         handleSubmit={this.handleSubmit}
    //         handleChange={this.handleChange}
    //         name={this.state.name}
    //         email={this.state.email}
    //         password={this.state.password}
    //       />
    //     </div>
    //     <div>
    //       <Shipping
    //         handleSubmit={this.handleSubmit}
    //         handleChange={this.handleChange}
    //         address1={this.state.address1}
    //         address2={this.state.address2}
    //         city={this.state.city}
    //         state={this.state.state}
    //         zip_code={this.state.zip_code}
    //       />
    //     </div>
    //     <div>
    //       <Billing
    //         handleSubmit={this.handleSubmit}
    //         handleChange={this.handleChange}
    //         credit_card={this.state.credit_card}
    //         expiry_date={this.state.expiry_date}
    //         CVV={this.state.CVV}
    //         billing_zip_code={this.state.billing_zip_code}
    //       />
    //     </div>
    //   </div>
    // );
  }
}

const Account = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={props.name}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="email"
        value={props.email}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="password"
        placeholder="password"
        value={props.password}
        onChange={props.handleChange}
      />
      <input type="submit" value="Next" />
    </form>
  );
};

const Shipping = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={props.name}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="email"
        value={props.email}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="password"
        placeholder="password"
        value={props.password}
        onChange={props.handleChange}
      />
      <input type="submit" value="Next" />
    </form>
  );
};

const Billing = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={props.name}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="email"
        value={props.email}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="password"
        placeholder="password"
        value={props.password}
        onChange={props.handleChange}
      />
      <input type="submit" value="Next" />
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

//three components all info in the state?
//last page renders all three components in 3 divs
// F1 collects name, email, and password for account creation.
//input for each data
//submit button
//handleFormSubmit
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.
