import React, { useState } from 'react';
import { Entry } from '../Entry';
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
        <div>
            <h2>Diary List</h2>
            <div>
                <h2>Filter Entries by Tag</h2>
                <input type="text" placeholder="Enter tag" onChange={(e) => filterEntriesByTag(e.target.value)} />
                <button onClick={resetEntries}>Reset Filter</button>
            </div>
            {filteredEntries.map((entry) => (
                <div key={entry.id}>
                    <p>{entry.date}</p>
                    <p>{entry.content}</p>
                    <p>Tags: {entry.tags.join(', ')}</p>
                    <button onClick={() => deleteEntryHandler(entry.id)}>Delete Entry</button>
                </div>
            ))}
        </div>
    );
};

export default DiaryListPage;
