import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import {Button, DatePicker} from 'antd'

const Home = () => (
  <div className="container">
    <DatePicker /> <Button style={{marginLeft: '10px'}}>确定</Button>

    <style jsx>{`
      .container {
        margin: 20px;
      }
    `}
    </style>
  </div>
)

export default Home
