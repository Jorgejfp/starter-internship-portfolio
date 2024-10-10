import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [sections, setSections] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchSections();
    }, []);

    const fetchSections = async () => {
        const response = await axios.get('/api/sections');
        setSections(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await axios.put(`/api/sections/${editingId}`, { title, content });
        } else {
            await axios.post('/api/sections', { title, content });
        }
        setTitle('');
        setContent('');
        setEditingId(null);
        fetchSections();
    };

    const handleEdit = (section) => {
        setTitle(section.title);
        setContent(section.content);
        setEditingId(section._id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/sections/${id}`);
        fetchSections();
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    required
                />
                <button type="submit">{editingId ? 'Update' : 'Create'}</button>
            </form>
            <ul>
                {sections.map((section) => (
                    <li key={section._id}>
                        <h3>{section.title}</h3>
                        <p>{section.content}</p>
                        <button onClick={() => handleEdit(section)}>Edit</button>
                        <button onClick={() => handleDelete(section._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;