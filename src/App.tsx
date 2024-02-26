// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';

interface Entry {
    id: number;
    date: string;
    diaryInput: string;
    tags: string[];
}

const App: React.FC = () => {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [newEntry, setNewEntry] = useState<string>('');
    const [newEntryDate, setNewEntryDate] = useState<string>('');
    const [newEntryTags, setNewEntryTags] = useState<string>('');
    const [filteredEntries, setFilteredEntries] = useState<Entry[]>([]);

    useEffect(() => {
        // Update filtered entries whenever entries change
        setFilteredEntries(entries);
    }, [entries]);

    const addEntry = () => {
        if (newEntry.trim() !== '') {
            const newId = entries.length + 1;
            const currentDate = newEntryDate || new Date().toLocaleDateString();
            const entryTags = newEntryTags.trim() !== '' ? newEntryTags.split(',').map((tag) => tag.trim()) : [];
            const newEntryObject: Entry = { id: newId, date: currentDate, diaryInput: newEntry, tags: entryTags };
            setEntries([...entries, newEntryObject]);
            setNewEntry('');
            setNewEntryDate('');
            setNewEntryTags('');
        }
    };

    const deleteEntry = (id: number) => {
        const updatedEntries = entries.filter((entry) => entry.id !== id);
        setEntries(updatedEntries);
    };

    const filterEntriesByTag = (tag: string) => {
        if (tag.trim() === '') {
            // If the tag is empty, reset to all entries
            setFilteredEntries(entries);
        } else {
            // Filter entries based on the tag
            const filteredEntries = entries.filter((entry) => entry.tags.includes(tag));
            setFilteredEntries(filteredEntries);
        }
    };

    return (
        <div className="App">
            <h1>My simple diary app</h1>
            <div>
                <label>Date:</label>
                <input type="text" value={newEntryDate} onChange={(e) => setNewEntryDate(e.target.value)} placeholder="yyyy-mm-dd" />
            </div>
            <div>
                <label>Entry:</label>
                <textarea
                    rows={4}
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    placeholder="Please tell me about your day..."
                />
            </div>
            <div>
                <label>Tags:</label>
                <input type="text" value={newEntryTags} onChange={(e) => setNewEntryTags(e.target.value)} placeholder="tag1, tag2, tag3" />
            </div>
            <button onClick={addEntry}>Add Entry</button>
            <div>
                <h2>Entries</h2>
                {filteredEntries.map((entry) => (
                    <div key={entry.id}>
                        <p>{entry.date}</p>
                        <p>{entry.diaryInput}</p>
                        <p>Tags: {entry.tags.join(', ')}</p>
                        <button onClick={() => deleteEntry(entry.id)}>Delete Entry</button>
                    </div>
                ))}
            </div>
            <div>
                <h2>Filter Entries by Tag</h2>
                <input type="text" placeholder=" tag" onChange={(e) => filterEntriesByTag(e.target.value)} />
            </div>
        </div>
    );
};

export default App;
