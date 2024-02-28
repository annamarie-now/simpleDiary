import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddEntryPage from './Pages/AddEntryPage';
import DiaryListPage from './Pages/DiaryListPage';
import HomePage from './Pages/HomePage';
import { Entry } from './Entry';
import './styles/App.scss';

const App: React.FC = () => {
    const [entries, setEntries] = useState<Entry[]>([]);

    return (
        <Router>
            <div className="app_container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/addEntry">Add a diary entry</Link>
                        </li>
                        <li>
                            <Link to="/diaryList">View my diary entries</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/addEntry"
                        element={<AddEntryPage onAddEntry={(newEntry) => setEntries([...entries, newEntry])} />}
                    />
                    <Route
                        path="/diaryList"
                        element={<DiaryListPage entries={entries} onDeleteEntry={(id) => setEntries(entries.filter((entry) => entry.id !== id))} />}
                    />
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
