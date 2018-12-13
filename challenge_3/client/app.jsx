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
    this.renderButton = this.renderButton.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderAccountForm = this.renderAccountForm.bind(this);
    this.renderShippingForm = this.renderShippingForm.bind(this);
    this.renderBillingForm = this.renderBillingForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      stepNumber: this.state.stepNumber + 1
    });
    // console.log(this.state);
  }

  renderButton() {
    return (
      <button
        onClick={() => {
          //ajax requset to create row in mysql return row id
          //
          $.ajax({
            method: "POST",
            url: "/checkout",
            success: data => {
              console.log("SUCCESS!");
            }
          });
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

  renderBillingForm() {
    return (
      <Billing
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        credit_card={this.state.credit_card}
        expiry_date={this.state.expiry_date}
        CVV={this.state.CVV}
        billing_zip_code={this.state.billing_zip_code}
      />
    );
  }

  renderShippingForm() {
    return (
      <Shipping
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        address1={this.state.address1}
        address2={this.state.address2}
        city={this.state.city}
        state={this.state.state}
        zip_code={this.state.zip_code}
      />
    );
  }

  //pass state as props to <Confirmation/> to render summary as opposed to quary db
  renderConfirmation() {
    return (
      <Confirmation
        summaryInfo={this.state}
        handleClick={() => {
          this.setState({
            stepNumber: 0
          });
        }}
      />
    );
  }

  renderBody() {
    switch (this.state.stepNumber) {
      case 0:
        return this.renderButton();
      case 1:
        return this.renderAccountForm();
      case 2:
        return this.renderShippingForm();
      case 3:
        return this.renderBillingForm();
      case 4:
        return this.renderConfirmation();
    }
  }

  render() {
    return (
      <div className="renderBody">
        <h1>Shopping hoi!</h1>
        <div>{this.renderBody()}</div>
      </div>
    );
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
        name="address1"
        placeholder="address1"
        value={props.address1}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="address2"
        placeholder="address2"
        value={props.address2}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="city"
        value={props.city}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="state"
        value={props.state}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="zip_code"
        placeholder="zip_code"
        value={props.zip_code}
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
        name="credit_card"
        placeholder="credit card"
        value={props.credit_card}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="expiry_date"
        placeholder="expiry date"
        value={props.expiry_date}
        onChange={props.handleChange}
      />

      <input
        type="text"
        name="CVV"
        placeholder="CVV"
        value={props.CVV}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="billing_zip_code"
        placeholder="billing_zip_code"
        value={props.billing_zip_code}
        onChange={props.handleChange}
      />
      <input type="submit" value="Next" />
    </form>
  );
};

const Confirmation = props => {
  return (
    <div className="orderSummary">
      <h1>{"Order Summary"}</h1>
      <p>{props.summaryInfo.name}</p>
      <p>{props.summaryInfo.email}</p>
      <p>{props.summaryInfo.password}</p>
      <p>{props.summaryInfo.address1}</p>
      <p>{props.summaryInfo.address2}</p>
      <p>{props.summaryInfo.city}</p>
      <p>{props.summaryInfo.state}</p>
      <p>{props.summaryInfo.zip_code}</p>
      <p>{props.summaryInfo.credit_card}</p>
      <p>{props.summaryInfo.CVV}</p>
      <p>{props.summaryInfo.expiry_date}</p>
      <p>{props.summaryInfo.billing_zip_code}</p>
      <button onClick={props.handleClick}>Purchase</button>;
    </div>
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
