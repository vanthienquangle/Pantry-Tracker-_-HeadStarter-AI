import React, { useState } from 'react';
import PantryForm from '../components/PantryForm';
import SearchBar from '../components/SearchBar';
import PantryList from '../components/PantryList';

export default function Home() {
  const [itemName, setItemName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const handleEdit = (id, name) => {
    setSelectedId(id);
    setItemName(name);
    setIsEditing(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pantry Management</h1>
      <PantryForm
        id={selectedId}
        itemName={itemName}
        setItemName={setItemName}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PantryList searchTerm={searchTerm} onEdit={handleEdit} />
    </div>
  );
}
