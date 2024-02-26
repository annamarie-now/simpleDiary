import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddEntryPage from './Pages/AddEntryPage';
import DiaryListPage from './Pages/DiaryListPage';
import HomePage from './Pages/HomePage';
import { Entry } from './Entry';

const App: React.FC = () => {
    const [entries, setEntries] = useState<Entry[]>([]);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/addDiaryEntry">Add a diary entry</Link>
                        </li>
                        <li>
                            <Link to="/diaryEntryList">My diary entries</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/addDiaryEntry"
                        element={<AddEntryPage onAddEntry={(newEntry) => setEntries([...entries, newEntry])} />}
                    />
                    <Route
                        path="/diaryEntryList"
                        element={<DiaryListPage entries={entries} onDeleteEntry={(id) => setEntries(entries.filter((entry) => entry.id !== id))} />}
                    />
                    <Route
                        path="/home"
                        element={<HomePage />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
