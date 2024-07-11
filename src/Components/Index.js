import React from "react";

import { Button, Popover, QRCode } from 'antd';

const Index=()=>{
    return(
        <Popover
    overlayInnerStyle={{ padding: 0 }}
    content={<QRCode value="https://picsum.photos/200/300" bordered={false} />}
  >
    <Button type="primary">Hover me</Button>
  </Popover>
    )
}

export default Index;