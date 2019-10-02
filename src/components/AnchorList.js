import React, { Component } from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

export class AnchorList extends Component {
    render() {
        return (
            <div>
                <Anchor affix={false}>
                    <Link href="#components-anchor-demo-basic" title="Basic demo" />
                    <Link href="#components-anchor-demo-static" title="Static demo" />
                    <Link href="#API" title="API">
                        <Link href="#Anchor-Props" title="Anchor Props" />
                        <Link href="#Link-Props" title="Link Props" />
                    </Link>
                </Anchor>
            </div>
        )
    }
}

export default AnchorList;