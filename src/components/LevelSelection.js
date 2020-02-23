import React from 'react';
import { Row, Col, Card, Button } from 'antd';


export class LevelSelection extends React.Component {

    render(){
        const { level } = this.props;
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={12} offset={6}>
                        <Card title="Level Selections" bordered={false}>
                            <Row gutter={16}>
                                {
                                    level.map(lv => {
                                        return (
                                            <Col key={lv} span={12}>
                                                <Button value={lv} type="primary" block
                                                    onClick={(e) => this.onSelectLevel(lv, e)}>
                                                    {lv}
                                                </Button>
                                            </Col>
                                        )})    
                                }
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

    onSelectLevel = (lv) => {
        this.props.onSelectLevel(lv);
    }
}
