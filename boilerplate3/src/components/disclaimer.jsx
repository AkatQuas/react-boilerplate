import React, { Fragment, Component } from 'react';
import { withNamespaces } from 'react-i18next';

class Disclaimer extends Component {
    style = {
        textAlign: 'right'
    }
    render() {
        const { t } = this.props;
        const { style } = this;
        return (
            <Fragment>
                <div style={style}>
                    <label htmlFor="modal_1" className="pseudo button">{t('title')}</label>
                </div>

                <div className="modal">
                    <input id="modal_1" type="checkbox" />
                    <label htmlFor="modal_1" className="overlay"></label>
                    <article>
                        <header>
                            <h3>{t('title')}</h3>
                            <label htmlFor="modal_1" className="close">&times;</label>
                        </header>
                        <section className="content">
                            <div>
                                <div>{t('content')}</div>
                            </div>
                        </section>
                        <footer>
                        </footer>
                    </article>
                </div>
            </Fragment>
        )
    }

}

export default withNamespaces('disclaimer')(Disclaimer);