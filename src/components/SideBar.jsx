import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Layout, Menu, Icon } from "antd"
import { connect } from "react-redux"
import PostTypes from "../redux/sideBar-redux"

const { Header, Sider, Content } = Layout

class SideBar extends Component {
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Icon
          className="trigger"
          type='menu'
          onClick={() => {
            this.props.clickSideBar()
          }}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} >
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

const mapStateToProps = (state) => ({
  collapsed: state.collapsed.collapsed
})

const mapDispatchToProps = (dispatch) => ({
  clickSideBar: () => {
    dispatch(PostTypes.getClickSideBar())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);