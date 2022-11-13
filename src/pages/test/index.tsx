import  { memo } from 'react'
import {Button} from 'antd'
const index = memo(() => {
  console.log("render");

  return (
    <Button type="primary" onClick={console.log}>test</Button>
  )
})

export default index
