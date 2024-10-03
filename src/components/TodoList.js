function TodoList({ notes, toggleComplete, deleteNote }) {
    return (
      <div className="space-y-4">
        {notes.map((note, index) => (
          <div key={index} className="flex justify-between items-center p-3 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={note.completed}
                onChange={() => toggleComplete(index)}
                className="form-checkbox h-5 w-5 text-blue-500 border-gray-600"
              />
              <span className={note.completed ? 'line-through text-gray-500' : ''}>{note.text}</span>
            </div>
            <div className="flex gap-2">
            <button 
  onClick={() => deleteNote(index)} 
  className="text-gray-400 hover:text-red-500"
>
  <i className="fas fa-trash-alt"></i> {/* Delete Icon */}
</button>

            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default TodoList;
  