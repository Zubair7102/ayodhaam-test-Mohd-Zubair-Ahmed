import { useState } from 'react';

function AddNote({ addNote }) {
  const [note, setNote] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex justify-between items-center w-[50%]">
      <input 
        type="text" 
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Input your note..." 
        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 "
      />
      <div>
      <button 
  type="submit" 
  className="absolute right-5 mr-4 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-4xl mr-12"
>
  +
</button>
      </div>
    </form>
  );
}

export default AddNote;
