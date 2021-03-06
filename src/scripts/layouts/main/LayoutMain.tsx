import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from '../../components/nav/menu_top/Navbar';
import BtnBottom from '../../components/nav/buttons/BtnBottom';
import PageHome from '../../pages/home/PageHome';
import PageList from '../../pages/list/PageList';

const LayoutMain: React.FC = () => {
    const location = useLocation();

    const [currentLocation, setCurrentLocation] = useState<string>(location.pathname || '/');

    useEffect((): void => {
        setCurrentLocation(location.pathname);
    }, [location.pathname]);

    return (
        <div className="layout layout-main">
            <div className="content-container">
                <div className={`content-container--inner ${currentLocation === '/' ? 'page-home' : 'page-list'}`}>
                    <Navbar />

                    <Switch>
                        <Route path="/" exact>
                            <PageHome />
                        </Route>
                        <Route path="/list">
                            <PageList />
                        </Route>
                    </Switch>

                    <BtnBottom />
                </div>
            </div>
        </div>
    );
};

export default LayoutMain;
