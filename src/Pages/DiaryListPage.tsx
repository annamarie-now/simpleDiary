// src/Pages/DiaryListPage.tsx
import React, { useState } from 'react';
import { Entry } from '../Entry';
import '../styles/DiaryListPage.scss';


interface DiaryListPageProps {
    entries: Entry[];
    onDeleteEntry: (id: number) => void;
}

const DiaryListPage: React.FC<DiaryListPageProps> = ({ entries, onDeleteEntry }) => {
    const [tagFilter, setTagFilter] = useState<string>('');

    const filterEntriesByTag = (tag: string) => {
        setTagFilter(tag);
    };

    const resetEntries = () => {
        setTagFilter('');
    };

    const filteredEntries = tagFilter
        ? entries.filter((entry) => entry.tags.includes(tagFilter))
        : entries;

    const deleteEntryHandler = (id: number) => {
        onDeleteEntry(id);
    };

    return (
        <div className="diaryListPage_container">
            <h1>MY DIARY LIST</h1>
            <div>
                <input type="text" placeholder="Filter entries by tag" value={tagFilter} onChange={(e) => filterEntriesByTag(e.target.value)} />
                <button onClick={resetEntries}>Reset filter</button>
            </div>
            {filteredEntries.map((entry) => (
                <div className="diaryListPage_entry" key={entry.id}>
                    <h3>Date:</h3>
                    <p>{entry.date}</p>
                    <h3>Diary entry:</h3>
                    <p>{entry.content}</p>
                    <h3>Tags:</h3>
                    <p>{entry.tags.join(', ')}</p>
                    <button onClick={() => deleteEntryHandler(entry.id)}>Delete Entry</button>
                </div>
            ))}
        </div>
    );
};

export default DiaryListPage;
