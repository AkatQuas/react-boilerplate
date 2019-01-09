import { SET_USER_NAME } from '@/store/actions';
// import { fetchGames } from '@/store/actions';
import { STATES } from '@/store/types';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// actually the fetchGames looks like this
// it is an asynchronous function 
const fetchGames = _ => {
    return dispatch => {
        setTimeout(_ => {
            const games = [1, 2, 3].map(i => ({ title: `${i} ==> abc` }));
            dispatch(setGames(games));
        }, 1000);

        // or 
        return axios.get(some_url).then(data => {
            dispatch(setData(data));
        }).catch(err => {
            // do something with err
        });
    };
};

class GamesPage extends React.Component {
    static propTypes = {
        games: PropTypes.array.isRequired,
        fetchGames: PropTypes.func.isRequired
    };

    componentDidMount () {
        // how to invoke the dispatch function, with this.props
        this.props.fetchGames();
    }

    render () {
        const { games } = this.props;
        return (
            <div>
                <h1>Games List</h1>
                { games.map(game => (<p>{ game }</p>)) }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    games: state[STATES.GAMES]
});

// you can pass an object as the second params to connect function, react-redux wound bind the dispatch for you
export default connect(mapStateToProps, { fetchGames })(GamesPage);

// and if you pass nothing in the second params, react-redux would automatically pass dispatch to the components props.

// of course you can pass a function to connect, again react-redux would bind the dispatch for you
const mapDispatchToProps = dispatch => ({
    setName: name => dispatch(SET_USER_NAME(
        new Promise((res, rej) => {
            setTimeout(_ => {
                res(name);
            }, 2000);
        })
    ))
});

class MyRedux extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    render () {
        return (
            <div className='container'>
                <button onClick={ _ => this.props.setName('Anna') }>
                    set name to Anna
                </button>
                <p> username : { this.props.user.name } </p>
                <p> age : { this.props.user.age } </p>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRedux);
