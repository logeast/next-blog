import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SafeArea from '../components/SafeArea';
import TagsMenu from '../components/TagsMenu';
import CardGroup from '../components/CardGroup';

function CardList(props) {
    const { path, url } = useRouteMatch();

    return (
        <SafeArea>
            <TagsMenu />
            <Switch>
                <Route exact path={path}>
                    <CardGroup />
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

export default CardList;
