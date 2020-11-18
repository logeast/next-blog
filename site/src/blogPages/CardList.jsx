import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SafeArea from '../components/SafeArea';
import TagsMenu from '../components/TagsMenu';
import CardGroup from '../components/CardGroup';

function CardList(props) {
    const { path } = useRouteMatch();

    return (
        <SafeArea>
            <TagsMenu />
            <Switch>
                <Route exact path={path}>
                    <CardGroup />
                </Route>
                <Route exact path={`${path}/popular`}>
                    xx
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
