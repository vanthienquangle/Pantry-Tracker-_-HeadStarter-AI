import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { db } from '../firebaseConfig';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const PantryForm = ({ id, itemName, setItemName, isEditing, setIsEditing }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      const itemDoc = doc(db, 'pantry', id);
      await updateDoc(itemDoc, { name: itemName });
      setIsEditing(false);
    } else {
      await addDoc(collection(db, 'pantry'), { name: itemName });
    }
    setItemName('');
  };

  const handleDelete = async (id) => {
    const itemDoc = doc(db, 'pantry', id);
    await deleteDoc(itemDoc);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
      {isEditing && (
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      )}
    </form>
  );
};

export default PantryForm;
