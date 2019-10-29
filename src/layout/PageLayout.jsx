import React, { Component } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Table, Layout } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTest from "../pages/list/ListTest";
import ListQuestion from "../pages/list/ListQuestion";
import EditTest from "../pages/edit/EditTest";
import EditQuestion from "../pages/edit/EditQuestion";
import AddTest from "../pages/add/AddTest";
import AddQuestion from "../pages/add/AddQuestion";
import NotFoundScreen from "../components/NotFoundScreen";
import Login from "../pages/login/Login";
class PageLayout extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Login} exact />
            <Layout>
              <SideBar />
              <Layout >
                <Header />

                <Route path='/test' component={ListTest} exact />
                <Route path='/questions' component={ListQuestion} exact />
                <Route path='/edit/test/:testId' component={EditTest} exact />
                <Route
                  path='/edit/question/:questionId'
                  component={EditQuestion}
                  exact
                />
                <Route path='/create/test' component={AddTest} exact />
                <Route path='/create/question' component={AddQuestion} exact />

                <Footer />
              </Layout>
            </Layout>
            <Route component={NotFoundScreen} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default PageLayout;
