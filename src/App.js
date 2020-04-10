import React, { Component } from 'react';
import { withTranslation,Trans } from 'react-i18next';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: "en"
    }
 }
  onLanguageHandle = (event) => {
    let newLang = event.target.value;
    this.setState({value: newLang})
    this.props.i18n.changeLanguage(newLang)
}
  render() {
    console.log(this.props)
    const { t } = this.props;
    return (<div>
      <input
        checked={this.state.value === 'en'}
        name="language"
        onChange={(e) => this.onLanguageHandle(e)}
        value="en"
        type="radio" />English &nbsp;
      <input
        name="language"
        value="jp"
        checked={this.state.value === 'jp'}
        type="radio"
        onChange={(e) => this.onLanguageHandle(e)}
      />Japanese
       <h1>{t('paragraph')}</h1>
          <table>
            <tbody>
                 <tr>
                    <td style={{width: '20%'}}>
                       {t('author.title')}
                    </td>
                    <td style={{width: '5%'}}>:</td>
                    <td style={{width: '75%'}}>
                       {t('author.value')}
                    </td>
                 </tr>
                  <tr>
                     <td style={{width: '20%'}}>
                         {t('description.title')}
                     </td>
                     <td style={{width: '5%'}}>:</td>
                     <td style={{width: '75%'}}>
                         {t('description.value')}
                     </td>
                  </tr>
             </tbody>
          </table>
    </div>)
  }
}
export default withTranslation()(App)