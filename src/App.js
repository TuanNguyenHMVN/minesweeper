import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Card, Spin, Row, Col } from 'antd';
import  { LevelSelection, Board, Result }  from './components';


class App extends Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
    this.state = {
      level: ['beginner', 'advantage'],
      selectedLevel: '',
      modalVisible: false,
      modalContent: ''
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  renderContent = () => {
    const {
      level,
      selectedLevel,
      modalVisible,
      modalContent
      } = this.state;
    return (
      <React.Fragment>
        
        <Row type="flex" justify="center">
          <Col span={24} >
            { !this.state.selectedLevel ? <Card title='Minesweeper'>
              <LevelSelection level={level} onSelectLevel={this.onSelectLevel}/>
              </Card> : <div className="game">
                <Board width={ selectedLevel === 'beginner' ? 9 : selectedLevel === 'advantage' ? 16 : 0 }
                    height={ selectedLevel === 'beginner' ? 9 : selectedLevel === 'advantage' ? 16 : 0 }
                  mines={this.props.mineList} onShowResult={this.onShowResult}></Board>
            </div> }
          </Col>
        </Row>
        <Result ref={this.modal} visible={modalVisible} content={modalContent}
          onReplay={this.onReplay} onBackToHome={this.onBackToHome}></Result>
      </React.Fragment>
    );
  }
  

  render() {
    const { loading } = this.props;
    const content = this.renderContent();
  
    return (
      <div className='App'>
      {
        loading ? <div className='spin'> <Spin> {this.renderContent()} </Spin> </div> : <div className='App'> {content} </div>
      }
      </div>
    );
  }

  onSelectLevel = (lv) => {
    this.props.getMines(lv);
    this.setState({ selectedLevel: lv });
  }

  onShowResult = (status, time) => {
    this.setState({
      modalVisible: true,
      modalContent: status === 'Win' ? `You won game in: ${time}` : `You lost game in: ${time}`});
  }

  onReplay = () => {
    this.setState({
      modalVisible: false,
      modalContent: ''
    });
    this.onSelectLevel(this.state.selectedLevel);
  }

  onBackToHome = () => {
    this.props.clearMines();
    this.setState({
      modalVisible: false,
      modalContent: '',
      selectedLevel: ''
    });
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    mineList: state.mineList,
    error: state.error,
    state : state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMines: (lv) => dispatch({ type: 'GET_MINES', lv }),
    clearMines: () => dispatch({ type: 'CLEAR_MINES'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
