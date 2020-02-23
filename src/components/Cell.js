import React from 'react';

export class Cell extends React.Component {

    getValue() {
        const { value } = this.props;

        if (!value.isRevealed) {
            return null;
        }
        if (value.isMine) {
            return "💣";
        }
        if (value.neighbour === 0) {
            return null;
        }
        return value.neighbour;
    }

    render() {
        const { value } = this.props;
        let className = 'cell ' +
            (value.isRevealed ? "" : "hidden") +
            (value.isMine ? " s-mine" : "");
        return (
            <div
                onClick={(e) => this.onRevealCell(value, e)}
                className={className}
            >
                {this.getValue()}
            </div>
        );
    }

    onRevealCell = (cell) => {
        this.props.onRevealCell(cell);
    }
}