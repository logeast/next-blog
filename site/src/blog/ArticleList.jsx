import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SafeArea from '../components/SafeArea';
import TagsMenu from '../components/TagsMenu';
import CardGroup from '../components/CardGroup';
import axios from 'axios';
import defaultServicePath from '../config/defaultServicePath';

function ArticleList(props) {
    const { path, url } = useRouteMatch();

    const [list, setList] = useState([]);

    useEffect(() => {
        getArticleList();
    }, []);

    const getArticleList = () => {
        axios({
            method: 'get',
            url: defaultServicePath.getArticleList,
            withCredentials: true,
            header: {
                'Access-Control-Allow-Origin': '*',
            },
        }).then((res) => {
            setList(res.data);
        });
    };

    return (
        <SafeArea>
            <TagsMenu />
            <Switch>
                <Route exact path={path}>
                    <CardGroup data={list} />
                    <Switch>
                        <Route path="blog/:id">detail</Route>
                        <Route path="*">404</Route>
                    </Switch>
                </Route>
                <Route exact path={`${path}/popular`}>
                    <CardGroup />
                    <Switch>
                        <Route path="blog/:id">detail</Route>
                    </Switch>
                </Route>
                <Route exact path={`${path}/art`}>
                    art
                </Route>
                <Route exact path={`${path}/technology`}>
                    technology
                </Route>
            </Switch>
        </SafeArea>
    );
}

export default ArticleList;
