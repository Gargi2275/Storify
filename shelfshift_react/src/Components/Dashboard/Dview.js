import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PurchaseReceive from './PurchaseReceive';
import Purchase from './Purchase.js'
import Bills from './Bills.js'
import ExpenseForm from './Expenses.js';
import DashboardMainView from './DashboardMainView.js';

const DView = () => {
    return (
        <div className="flex-grow bg-slate-500 dark:bg-slate-900">
            <Routes>
                <Route path="/dashboardmainview" element={<DashboardMainView/>} />
                <Route path="/inventory" element={<ExpenseForm/>} />
                <Route path="/sales" element={<Purchase/>} />
                <Route path="/purchase" element={<Purchase/>} />
                <Route path="/report" element={<Bills/>} />                
            </Routes>
        </div>
    );
};

export default DView;

