import React from 'react';
import ReactDOM from 'react-dom';

const enStrings = {
  submit: "Submit",
  cancel: "Cancel"
};

const cnStrings = {
  submit: "提交",
  cancel: "取消"
};
const LocaleContext = React.createContext();

class LocaleProvider extends React.Component {
  state = { locale: cnStrings };
  toggleLocale = () => {
    const locale = 
      this.state.locale === enStrings 
        ? cnStrings 
        : enStrings;
    this.setState({ locale });
  }
  render() {
    return (
      <LocaleContext.Provider value={this.state.locale}>
        <button onClick={this.toggleLocale}>
          切换语言
        </button>
        {this.props.children}
      </LocaleContext.Provider>
    )
  }
}

class LocaleButtons extends React.Component {
  render() {
    return (
      <LocaleContext.Consumer>
        {locale => (
          <div>
            <button>{locale.cancel}</button>&nbsp;
            <button>{locale.submit}</button>
          </div>
        )}
      </LocaleContext.Consumer>
    )
  }
}

ReactDOM.render(
  <LocaleProvider>
    <div>
      <br></br>
      <LocaleButtons></LocaleButtons>
    </div>
  </LocaleProvider>,
  document.getElementById('root')
)
