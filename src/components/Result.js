import React from 'react';
import { Row, Col, Button, Modal } from 'antd';


export class Result extends React.Component {
    state = {
        loading: false,
        visible: false,
        content: this.props.content
    };

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onReplay = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
        this.props.onReplay();
    };

    onViewBoard = () => {
        this.setState({ visible: false });
    };
    
    render(){
        const { visible, loading, content } = this.props;
        return (
            
            <div>
                { content }
                <Modal
                    visible={visible}
                    title="Result"
                    onOk={this.onReplay}
                    onCancel={this.onViewBoard}
                    footer={[
                    <Row key='result-modals' gutter={10}>
                        <Col key='replay' span={6}>
                            <Button key="back" onClick={this.onReplay}>
                                New Game
                            </Button>          
                        </Col>
                        <Col key='viewboard' span={6}>
                            <Button key="submit" type="primary" loading={loading} onClick={this.onViewBoard}>
                                Home Page
                            </Button>               
                        </Col>
                    </Row>
                    ]}>
                    <p>{ content }</p>
                </Modal>
            </div>
            );
    }
}
