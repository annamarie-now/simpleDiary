import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Entry } from '../Entry';
import '../styles/AddEntryPage.scss';


interface AddEntryPageProps {
    onAddEntry: (entry: Entry) => void;
}

const AddEntryPage: React.FC<AddEntryPageProps> = ({ onAddEntry }) => {
    const [newEntry, setNewEntry] = useState<string>('');
    const [newEntryDate, setNewEntryDate] = useState<string>('');
    const [newEntryTags, setNewEntryTags] = useState<string>('');
    const navigate = useNavigate();

    const addEntry = () => {
        if (newEntry.trim() !== '') {
            const entryTags = newEntryTags.trim() !== '' ? newEntryTags.split(',').map((tag) => tag.trim()) : [];
            const currentDate = newEntryDate || new Date().toLocaleDateString();

            const newId = Date.now();

            onAddEntry({
                id: newId,
                date: currentDate,
                content: newEntry,
                tags: entryTags,
            });

            navigate('/diaryList');
        }
    };


return (
        <div className="addEntryPage_container">
            <h2>ADD ENTRY</h2>
            <label>Date:</label>
            <input type="text" value={newEntryDate} onChange={(e) => setNewEntryDate(e.target.value)} placeholder="DD-MM-YYY" />
            <label>Entry:</label>
            <textarea rows={4} value={newEntry} onChange={(e) => setNewEntry(e.target.value)} placeholder="Write your entry..." />
            <label>Tags:</label>
            <input type="text" value={newEntryTags} onChange={(e) => setNewEntryTags(e.target.value)} placeholder="Separate the tags with a comma..." />
            <button onClick={addEntry}>Add Entry</button>
        </div>
    );
};

export default AddEntryPage;
