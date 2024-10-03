import { useState } from 'react';
import TodoList from './components/TodoList';
import AddNote from './components/AddNote';
import Filter from './components/Filter';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [notes, setNotes] = useState([
  ]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => setDarkTheme(!darkTheme);

  const addNote = (note) => {
    setNotes([...notes, { text: note, completed: false }]);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const toggleComplete = (index) => {
    const newNotes = [...notes];
    newNotes[index].completed = !newNotes[index].completed;
    setNotes(newNotes);
  };

  const filteredNotes = notes
    .filter(note => {
      if (filter === 'complete') return note.completed;
      if (filter === 'incomplete') return !note.completed;
      return true;
    })
    .filter(note => note.text.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={`${darkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen p-8`} >
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold ml-12">TODO LIST</h1>
        <div className="flex items-center gap-4">
          <Filter setFilter={setFilter} filter={filter} />
          <button onClick={toggleTheme} className="bg-purple-500 text-white p-2 rounded-full mr-12">
            {darkTheme ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      <main className="max-w-2xl mx-auto">
        <input 
          type="text" 
          placeholder="Search note..." 
          className="w-full p-3 mb-6 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <TodoList 
          notes={filteredNotes} 
          toggleComplete={toggleComplete} 
          deleteNote={deleteNote} 
        />
        <AddNote addNote={addNote} />
      </main>
    </div>
  );
}

export default App;
