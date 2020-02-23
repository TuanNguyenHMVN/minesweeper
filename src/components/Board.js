import React from 'react';
import { Cell } from './Cell';
import { Clock } from './Clock';
import { Row, Col } from 'antd';


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardData: this.initBoardData(this.props.width, this.props.height, this.props.mines),
            gameStatus: "Game in progress",
            mines: this.props.mines,
            startGame: false,
            second: 0
        };
    
        this.clock = React.createRef();
    }

    initBoardData(w, h, mines) {
        let board = this.createBoardWithMines(w, h, mines);
        board = this.getNeighbours(board, w, h);
        return board;
    }

    createBoardWithMines(w, h, mines) {
        let data = [];
        for (let i = 0; i < w; i++) {
            data.push([]);
            for (let j = 0; j < h; j++) {
                data[i][j] = {
                    x: i,
                    y: j,
                    isMine: false,
                    neighbour: 0,
                    isRevealed: false,
                    isEmpty: false,
                };
            }
        }
        mines.map(m => {
            data[m.x][m.y].isMine = true;
            return m;
        });
        return data;
    }

    getNeighbours(board, w, h) {
        let updatedBoard = board;

        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                if (!board[i][j].isMine) {
                    let mine = 0;
                    const neightbourList = this.surfingBoard(board[i][j].x, board[i][j].y, board);
                    neightbourList.map(n => {
                        if (n.isMine) {
                            mine++;
                        }
                        return n;
                    });
                    if (mine === 0) {
                        updatedBoard[i][j].isEmpty = true;
                    }
                    updatedBoard[i][j].neighbour = mine;
                }
            }
        }
        return updatedBoard;
    }

    surfingBoard(x, y, board) {
        const neightbourList = [];
        for (let xOffset = -1; xOffset <= 1; xOffset++) {
            for (let yOffset = -1; yOffset <= 1; yOffset++) {
                let i = x + xOffset;
                let j = y + yOffset;
                if (i > -1 && i < this.props.width && j > -1 && j < this.props.height) {
                    let neighbour = board[i][j];
                    neightbourList.push(neighbour);
                }
            }
        }
        return neightbourList;
    }

    revealAllBoard() {
        let updatedData = this.state.boardData;
        updatedData.map((datarow) => {
            datarow.map((dataitem) => {
                dataitem.isRevealed = true;
                return dataitem;
            });
            return datarow;
        });
        this.setState({
            boardData: updatedData
        });
    }

    renderBoard(data) {
        return data.map((datarow) => {
            return datarow.map((dataitem) => {
            return (
                <div key={ dataitem.x * datarow.length + dataitem.y }>
                    <Cell
                    onRevealCell={() => this.handleCellClick(dataitem.x, dataitem.y)}
                    value={ dataitem }
                    />
                { (datarow[datarow.length - 1] === dataitem) ? <div className="clear" /> : "" }
                </div>);
            })
        });
    }

    revealEmpty(x, y, data) {
        let area = this.surfingBoard(x, y, data);
        area.map(value => {
            if (!value.isRevealed && (value.isEmpty || !value.isMine)) {
            data[value.x][value.y].isRevealed = true;
                if (value.isEmpty) {
                    this.revealEmpty(value.x, value.y, data);
                }
            }
            return value;
        });
        return data;
    }

    getHidden = (updatedData) => {
        let mineArray = [];

        updatedData.map(datarow => {
        datarow.map((dataitem) => {
            if (!dataitem.isRevealed) {
                mineArray.push(dataitem);
            }
            return dataitem;
        });
            return datarow;
    });
    return mineArray;
    }

    handleCellClick(x, y) {
        if (this.state.gameStatus === "Game in progress") {
            this.setState({ startGame: true });
        }

        setTimeout(() => {
            if (this.state.startGame && this.clock.current.state.second === 0 && !this.clock.current.timer) {
                this.clock.current.startTimer();
            }
        }, 0);

        if (this.state.boardData[x][y].isRevealed) {
            return;
        }
        
        if (this.state.boardData[x][y].isMine) {
            this.setState({ gameStatus: "Lost" });
            this.revealAllBoard();
            setTimeout(() => {
                this.onShowResult(this.state.gameStatus);
            }, 0);
        }

        let updatedData = this.state.boardData;
        updatedData[x][y].isRevealed = true;

        if (updatedData[x][y].isEmpty) {
            updatedData = this.revealEmpty(x, y, updatedData);
        }

        if (this.getHidden(updatedData).length === this.props.mines) {
            this.setState({ gameStatus: "Win" });
            this.revealBoard();
            setTimeout(() => {
                this.onShowResult(this.state.gameStatus);
            }, 0);
        }

        this.setState({
            boardData: updatedData
        });
    }

    onShowResult = (gameStatus) => {
        this.props.onShowResult(gameStatus, this.clock.current.convertTime());
        this.setState({ startGame: false })
        this.clock.current.stopTimer();
    }

    onReplay = () => {
        this.props.onReplay();
    }

    render(){
        return (
            <div className="board">
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <div className="game-info">
                            <span className="info">Time</span>
                            <h1><Clock ref={this.clock} /></h1>

                        </div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={this.props.mines.length === 10 ? 6 : 10}>
                        { this.renderBoard(this.state.boardData) }
                    </Col>
                </Row>
                
            </div>
        );
    }
}
